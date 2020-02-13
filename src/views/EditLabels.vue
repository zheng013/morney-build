<template>
    <Layout>
        <div class="navBar">
            <Icon class="iconLeft" name="left"/>
            <span class="title">编辑标签</span>
        </div>
        <div class="form-wrapper">
            <FormItem field-name="标签" place-holder="在这里输入标签名"/>
        </div>
        <div class="button-wrapper">
            <Button>删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Model from "@/models/tagsModel.ts";
  import Button from "@/components/Button.vue";
  import FormItem from "@/components/Money/FormItem.vue";

  @Component({
    components: {FormItem, Button}
  })
  export default class EditLabels extends Vue {
    created() {
      const id = this.$route.params.id;
      Model.fetch();
      const tags = Model.data;
      const tag = tags.filter(item => item.id === id)[0];
      if (tag) {
        console.log(tag);
      } else {
        this.$router.replace("/404");
      }
    }
  }
</script>

<style lang="scss" scoped>
    .navBar {
        background: #f5f5f5;
        padding: 12px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #e9e9e9;
        font-size: 16px;
        > .iconLeft {
            color: #333333;
            width: 20px;
            height: 20px;
            left: 12px;
            position: absolute;
        }

    }
    .form-wrapper{
        margin-top: 6px;
        overflow: hidden;
    }

    .button-wrapper {
        text-align: center;
        margin-top: 44px;
    }

</style>