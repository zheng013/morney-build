<template>
    <div>
        <ul class="types">
            <li class="selected">支出</li>
            <li>收入</li>
        </ul>
    </div>
</template>

<script lang="ts">
  export default {
    name: "types"
  };
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