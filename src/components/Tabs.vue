<template>
    <div>
        <ul class="tabs">
            <li v-for="item in dataSource" :key="item.value"
                :class="liClass(item)"
                class="tabs-item"
                @click="typeSelect(item)">{{item.text}}
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop} from "vue-property-decorator";


  @Component
  export default class Tabs extends Vue {
    @Prop(String) value!: string;
    @Prop(String) classPrefix?: string;
    @Prop({required: true, type: Array}) dataSource!: DataSourceItem[];

    liClass(item:DataSourceItem) {
     return  {[this.classPrefix+'-item']:this.classPrefix,selected:item.value===this.value}
    }

    //运行时放入可执行的一个环境下执行发生的错误    编译时false则无法得到js在终端会出现error
    typeSelect(item: DataSourceItem) {
      this.$emit("update:value", item.value);
    }
  }
</script>

<style lang="scss" scoped>
    .tabs {
        display: flex;
        background: #c5c5c5;
        font-size: 24px;

        &-item{
            display: flex;
            justify-content: center;
            align-items: center;
            width: 50%;
            height: 64px;
            position: relative;

            &.selected::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                background: #333;
                height: 4px;
            }
        }
    }
</style>