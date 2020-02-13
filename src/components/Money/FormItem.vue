<template>
    <div>
        <label class="notes">
            <span class="name">{{fieldName}}</span>
            <input type="text" :value="value" @input="onValueChanged($event.target.value)" :placeholder="placeHolder">
        </label>
    </div>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component, Watch, Prop} from "vue-property-decorator";

  @Component
  export default class FormItem extends Vue {
    @Prop({default:''}) readonly value!:string;
    @Prop({required: true}) fieldName!: string;
    @Prop() placeHolder!: string;

    // @Watch("value")
    onValueChanged(value: string) {
      this.$emit("update:value", value);
    } //因为 input 的值一旦被用户变化，就会触发 @update:value 事件，所以就没必要再加一个 watch 了。
  }
</script>

<style lang="scss" scoped>
    .notes {
        font-size: 14px;
        background: #f5f5f5;
        display: flex;
        align-items: center;
        padding-left: 16px;

        > .name {
            padding-right: 16px;
        }

        > input {
            height: 40px;
            padding-right: 16px;
            flex-grow: 1;
            background: transparent;
        }
    }
</style>