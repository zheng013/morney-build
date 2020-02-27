<template>
    <Layout>
        <Tabs :data-source='typeList' class-prefix="type" :value.sync="type"/>
        <Tabs :data-source='intervalList' class-prefix="interval" :value.sync="intervalType"/>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Tabs from "@/components/Tabs.vue";

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = "-";
    intervalType = "day";
    intervalList = [
      {text: "按天", value: "day"},
      {text: "按周", value: "week"},
      {text: "按月", value: "month"},
    ];
    typeList = [
      {text: "支出", value: "-"},
      {text: "收入", value: "+"},

    ];
  }
</script>

<style lang="scss" scoped>
    ::v-deep .type-item {
        background: white;

        &.selected {
            background: #c4c4c4;
        }

        &::after {
            display: none;
        }
    }
</style>