<template>
    <Layout class-prefix="layout">
        <!--一个文件超过一百五十行的代码，开始分模块优化-->
        {{record}}
        <Tags :data-source.sync="tags" @update:value="onUpdateTags"/>
        <Notes @update:value="onUpdateNotes"/>
        <Types @update:value="onUpdateType"/>
        <NumberPad @update:value="onUpdateAmount"/>
    </Layout>
</template>
<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tags from "@/components/Money/Tags.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPad from "@/components/Money/NumberPad.vue";

  type Record = {
    tags: string[]
    notes: string
    type: string
    amount: number
  }
  @Component({components: {NumberPad, Types, Notes, Tags}})

  export default class Money extends Vue {
    tags = ["衣", "食", "住", "行"];
    record: Record = {
      tags: [],
      notes: "",
      type: "",
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

    onUpdateType(type:string) {
      if (this.record) {
        this.record.type = type;
      }
    }

    onUpdateAmount(number: string) {
      if (this.record) {
        this.record.amount = parseFloat(number);
      }
    }
  }
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
    }
</style>