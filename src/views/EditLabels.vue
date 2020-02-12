<template>
    <Layout>
        标签编辑
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class EditLabels extends Vue {
 created(){
   console.log(this.$route.params);
 }
  }
</script>

<style lang="scss" scoped>

</style>