<template>
    <Layout>
        标签编辑
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Model from "@/models/tagsModel.ts";

  @Component
  export default class EditLabels extends Vue {
    created() {
      const id = this.$route.params.id;
      Model.fetch();
      const tags = Model.data;
      const tag = tags.filter(item => item.id === id)[0];
      if (tag){
        console.log(tag);
      }else{
        this.$router.replace('/404')
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>