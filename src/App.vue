<template>
    <div id="app">
        <router-view/>
    </div>
</template>
<script lang="ts">
    import vue from "vue";
    export default vue.extend({});
</script>

<style lang="scss">
@import "~@/assets/style/reset.scss";
@import "~@/assets/style/helper.scss";
    body{
        font-family: $font-hei;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        line-height: 1.5;
        color: #333333;
        font-size: 16px;
    }
</style>
