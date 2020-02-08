<template>
    <div>
        <ul class="types">
            <li :class="type==='-'&&'selected'" @click="typeSelect('-')">支出</li>
            <li :class="type==='+'&&'selected'" @click="typeSelect('+')">收入</li>
        </ul>
    </div>
</template>

<script lang="js">
  export default {
    name: "types",
    props: ['xxx'],
    data() {
      return {type: '-'}
    },
    mounted() {
      console.log(this.xxx)
    },
    methods: {
      typeSelect(type) {
        if (type !== '+' && type !== '-') {
          throw new Error('type is unknown')
        }
        this.type = type
      }
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