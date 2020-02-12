<template>
    <Layout>
        <ul>
            <li class="nav">
                <Icon name="left"/>
                <span>编辑标签</span>
            </li>
            <li class="content">
                <FormItem field-name="标签" place-holder="在这里输入标签名"/>
            </li>
        </ul>
        <div class="deleteLabel">
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
    .nav {
        background: #f5f5f5;
        padding: 12px 0;
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: 1px solid #e9e9e9;

        > svg {
            color: #333333;
            width: 18px;
            height: 18px;
            left: 16px;
            position: absolute;
        }

        > span {
            text-align: center;
        }
    }

    button {
        margin-top: 400px;
    }

    .deleteLabel {
        text-align: center;
    }

</style>