<template>
    <Layout class-prefix="layout">
        <!--一个文件超过一百五十行的代码，开始分模块优化-->
        <Tags/>
        <Notes/>
        <Types :propA="11"/>
        <NumberPad/>
    </Layout>
</template>
<script lang="ts">
  import Tags from "@/components/Money/Tags.vue";
  import Notes from "@/components/Money/Notes.vue";
  import Types from "@/components/Money/Types.vue";
  import NumberPad from "@/components/Money/NumberPad.vue";

  export default {
    name: "Money",
    components: {NumberPad, Types, Notes, Tags}
  };
</script>
<style lang="scss">
    .layout-content {
        display: flex;
        flex-direction: column;
    }
</style>