<template>
        <div class="tags">
            <ul class="current">
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <div class="new">
                <button>新增标签</button>
            </div>
        </div>
</template>

<script lang="ts">
  export default {
    name: "tages"
  };
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