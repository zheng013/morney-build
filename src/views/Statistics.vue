<template>
    <Layout>
        <Types class-prefix="xxx" :value.sync="type"/>
    </Layout>
</template>

<script lang="ts">
  import Types from "@/components/Money/Types.vue";
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component({
    components: {Types}
  })
  export default class Statistics extends Vue {
type='-'
  }
</script>

<style lang="scss" scoped>
::v-deep .xxx-item{

}
</style>