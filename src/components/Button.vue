<template>
    <button class="button" @click="$emit('click',$event)">
        <slot/>
    </button>
</template>

<script lang="ts">
  import Vue from "vue";
  import {Component} from "vue-property-decorator";

  @Component
  export default class Button extends Vue {

  }
</script>

<style lang="scss" scoped>
    @import '~@/assets/style/helper.scss';

    .button {
        background: $color-highlight;
        color: white;
        border-radius: 4px;
        height: 40px;
        padding: 0 16px;
    }
</style>