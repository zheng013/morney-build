<template>
    <div class="tags">
        <ul class="current">
            <li v-for="tag in dataSource" :key="tag" :class="{selected:selectedTags.indexOf(tag)>=0}"
                @click="toggle(tag)">{{tag}}
            </li>
        </ul>
        <div class="new">
            <button>新增标签</button>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";

  @Component
  export default class Tags extends Vue {
    @Prop(Array) dataSource: string[] | undefined;
    selectedTags: string[] = [];

    toggle(tag: string) {
      const index=this.selectedTags.indexOf(tag)
      if(index>=0){
        this.selectedTags.splice(index,1)
      }else{
      this.selectedTags.push(tag);
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