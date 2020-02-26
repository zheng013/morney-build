<template>
    <Layout>
        <div class="tags">
            <router-link class="tag" v-for="tag in tags" :key="tag.id" :to="`/labels/edit/${tag.id}`">
                <span>{{tag.name}}</span>
                <Icon name="right"/>
            </router-link>
        </div>
        <div class="createTag-wrapper">
            <Button class="createTag" @click="createTag">添加标签</Button> <!--可以使用.native的修饰符表示接受原生事件-->
        </div>
    </Layout>
</template>

<script lang="ts">
  // import Vue from "vue";
  // import {Component} from "vue-property-decorator";
  import Button from "@/components/Button.vue";
  import {CreateTag} from "@/mixins/tagHelper"
  import Component, {mixins} from "vue-class-component";

  // Model.fetch();
  @Component({
    components: {Button},
    computed:{
      tags(){
        return this.$store.state.tagList
      }
    }
  })
  export default class Labels extends mixins(CreateTag){
    beforeCreate(){
      this.$store.commit('fetchTagList')
    }

    createTags() {
      const name = window.prompt("请输入标签名");
      if (name) {
        this.$store.commit('createTags',name)
      }
    }
  }
</script>

<style lang="scss" scoped>
    @import '~@/assets/style/helper.scss';

    .tags {
        background: #f5f5f5;
        padding-left: 16px;
        font-size: 16px;

        > .tag {
            display: flex;
            align-items: center;
            justify-content: space-between;
            min-height: 44px;
            border-bottom: 1px solid #e6e6e6;

            > svg {
                color: #666666;
                margin-right: 16px;
                width: 18px;
                height: 18px;
            }
        }
    }

    .createTag {
        background: $color-highlight;
        color: white;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;

        &-wrapper {
            text-align: center;
            margin-top: 44px;
        }
    }

</style>