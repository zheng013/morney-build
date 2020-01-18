<template>
    <div class="nav">
        <router-link to="/"></router-link>
        <router-link to="/money">记账</router-link>
        |
        <router-link to="/labels">标签</router-link>
        |
        <router-link to="/Statistics">统计</router-link>
    </div>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>
.nav{
    display: flex;
    align-items: center;
    justify-content: space-around;
}
</style>