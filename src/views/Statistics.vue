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
  import typeList from "@/constants/typeList";
  import intervalList from "@/constants/intervalList"

  @Component({
    components: {Tabs}
  })
  export default class Statistics extends Vue {
    type = "-";
    intervalType = "day";
    intervalList = intervalList;
    typeList = typeList;
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