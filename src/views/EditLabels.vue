<template>
    <Layout>
        <div class="navBar">
            <Icon class="iconLeft" name="left" @click.native="back"/>
            <span class="title">编辑标签</span>
        </div>
        <div class="form-wrapper">
            <FormItem field-name="标签" :value="tag.name" place-holder="在这里输入标签名" @update:value="update"/>
        </div>
        <div class="button-wrapper">
            <Button @click="destroy">删除标签</Button>
        </div>
    </Layout>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";
  import Button from "@/components/Button.vue";
  import FormItem from "@/components/Money/FormItem.vue";

  @Component({
    components: {FormItem, Button},
  })
  export default class EditLabels extends Vue {
    get tag() {
      return this.$store.state.tag;
    }

    created() {
      this.$store.commit("findTag", this.$route.params.id);
      if (!this.tag) {
        this.$router.replace("/404");
      }
    }

    update(name: string) {
      if (this.tag) {
        this.$store.commit("update", {id: this.tag.id, name: name});
      }
    }

    destroy() {
      if (this.$store.state.tag) {
        this.$store.commit("destroy", this.$store.state.tag.id);
        this.$router.back();
      }
    }

    back() {
      this.$router.back();
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

    .form-wrapper {
        margin-top: 6px;
        overflow: hidden;
    }

    .button-wrapper {
        text-align: center;
        margin-top: 44px;
    }

</style>