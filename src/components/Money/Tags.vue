<template>
    <div class="tags">
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag" :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag}}
            </li>
        </ul>
        <div class="new">
            <button @click="create">新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) readonly dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index = this.selectedTags.indexOf(tag);
      if (index >= 0) {
        this.selectedTags.splice(index, 1);
      } else {
        this.selectedTags.push(tag);
      }
      this.$emit('update:value',this.selectedTags)
    }

    create() {
      const name = window.prompt("请输入标签名");
      if (name === "") {
        window.alert("标签名不能为空");
      } else {
        if (this.dataSource) {
          this.$emit('update:dataSource',[...this.dataSource,name]); //等价于as string 通过触发事件进行外部数据修改
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

    .tags {
        padding: 16px;
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
        overflow: auto;

        > .current {
            display: flex;
            flex-wrap: wrap;

            > li {
                background: #d9d9d9;
                $h: 24px;
                height: $h;
                border-radius: $h/2;
                padding: 0 18px;
                margin-right: 10px;
                margin-top: 16px;

                &.selected {
                    background: royalblue;
                    color: white;
                }
            }
        }

        > .new {
            padding-top: 16px;
            order: -1;

            > button {
                background: transparent;
                color: #999;
                border-bottom: 1px solid;
                padding: 0 4px
            }
        }
    }
</style>