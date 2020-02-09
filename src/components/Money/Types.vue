<template>
    <div>
        <ul class="types">
            <li :class="value ==='-'&&'selected'" @click="typeSelect('-')">支出</li>
            <li :class="value ==='+'&&'selected'" @click="typeSelect('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Prop, Watch} from "vue-property-decorator";

  @Component
  export default class Types extends Vue {
    @Prop(String) value!: string;

    //运行时放入可执行的一个环境下执行发生的错误    编译时false则无法得到js在终端会出现error
    typeSelect(type: string) {
      if (type !== "+" && type !== "-") {
        throw new Error("type is unknown");
      }
      this.$emit("update:value", type);
    }

  }

</script>

<style lang="scss" scoped>
    .types {
        display: flex;
        background: #c4c4c4;
        font-size: 24px;

        > li {
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