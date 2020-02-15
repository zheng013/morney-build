<template>
    <Layout class-prefix="layout">
        <!--一个文件超过一百五十行的代码，开始分模块优化-->
        {{record}}
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <div class="form-wrapper">
            <FormItem field-name="备注" @update:value="onUpdateNotes" place-holder="在这里输入备注"/>
        </div>
        <Types :value.sync="record.type"/>
        <NumberPad @update:value="onUpdateAmount" @submit="saveRecord"/>
    </Layout>
</template>
<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tags from "@/components/Money/Tags.vue";
  import FormItem from "@/components/Money/FormItem.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPad from "@/components/Money/NumberPad.vue";
  // import model from "@/models/recordListModel.ts";
  import tagsModel from "@/models/tagsModel.ts"

  // const tagList=tagsModel.fetch();
  window.localStorage.setItem("version", "0.0.2"); //进行数据库升级  数据库迁移的策略
  @Component({components: {NumberPad, Types, FormItem, Tags}}) //必须置为最后一行

  export default class Money extends Vue {
    tags= window.tagList||["衣", "食", "住", "行"];
    recordList: RecordItem[] = window.recordList;
    record: RecordItem = {
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
      if(this.record){
        window.createRecord(this.record)
      }
    }
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
    }

    .form-wrapper {
        padding: 12px 0;
        background: #f5f5f5;
    }
</style>