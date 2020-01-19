<template>
    <div class="nav">
        <router-link to="/"></router-link>

        <router-link to="/money" class="item">
            <Icon name="money"></Icon>
            记账
        </router-link>
        <router-link to="/labels">
            <Icon name="label"></Icon>
            标签
        </router-link>
        <router-link to="/Statistics">
            <Icon name="TaskStatistics"></Icon>
            统计
        </router-link>
    </div>
</template>

<script lang="ts">


    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>
    .nav {
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>