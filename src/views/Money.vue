<template>
    <Layout class-prefix="layout">
        <!--一个文件超过一百五十行的代码，开始分模块优化-->
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Notes @update:value="onUpdateNotes"/>
        <Types :value.sync="record.type"/>
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
</template>
<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tags from "@/components/Money/Tags.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPad from "@/components/Money/NumberPad.vue";
  // import model from "@/model.js";
  const {model} = require("@/model.js");
  console.log(model)  ;
  const recordList: Record[] = model.fecth();
  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number//数据类型
    createAt?: Date //类 \ 构造函数 ?代表属性可能不存在
  }
  window.localStorage.setItem("version", "0.0.2"); //进行数据库升级  数据库迁移的策略
  @Component({components: {NumberPad, Types, Notes, Tags}}) //必须置为最后一行

  export default class Money extends Vue {
    tags = ["衣", "食", "住", "行"];
    recordList: Record[] = recordList;
    record: Record = {
      tags: [],
      notes: "",
      type: "-",
      amount: 0
    };

    onUpdateTags(tag: string[]) {
      if (this.record) {
        this.record.tags = tag;
      }
    }

    onUpdateNotes(notes: string) {
      if (this.record) {
        this.record.notes = notes;
      }
    }

    onUpdateAmount(number: string) {
      if (this.record) {
        this.record.amount = parseFloat(number);
      }
    }

    saveRecord() {
      const deepClone: Record = JSON.parse(JSON.stringify(this.record));
      deepClone.createAt = new Date();
      this.recordList.push(deepClone);
      window.localStorage.setItem("recordList", JSON.stringify(this.recordList));
      console.log(this.recordList);
    }
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
    }
</style>