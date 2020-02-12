<template>
    <nav>
        <router-link to="/money" class="item" active-class="selected">
            <Icon name="money"></Icon>
            记账
        </router-link>
        <router-link to="/labels" class="item" active-class="selected">
            <Icon name="label"></Icon>
            标签
        </router-link>
        <router-link to="/Statistics" class="item" active-class="selected">
            <Icon name="TaskStatistics"></Icon>
            统计
        </router-link>
    </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style lang="scss" scoped>
    @import "~@/assets/style/helper.scss";
    nav {
        @extend %outerShadow;
        display: flex;
        font-size: 12px;
        > .item{
            padding-top: 2px;
            padding-bottom:  2px;
            display: flex;
            width:33.33333%;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            .icon{
                height:32px;
                width:32px
            }
            }
        >.item.selected{
            color: $color-highlight;
        }
    }
</style>