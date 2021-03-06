import Vue from 'vue';
import Component from 'vue-class-component';

const map:{[key:string]:string} = {
  'duplicated':'标签名重复' //表驱动编程
};

@Component
export class TagHelper extends Vue {

  createTag() {
    const name = window.prompt('请输入标签名');
    if (name) {
      this.$store.commit('createTags', name);
      if (this.$store.state.tagError) {
        window.alert(map[this.$store.state.tagError.message]||'未知错误');
      }
      // if (this.dataSource) {
      //   const id = createId();
      //   this.$emit("update:dataSource", [...this.dataSource, {id, name}]); //等价于as string 通过触发事件进行外部数据修改
      // }
    } else {
      window.alert('标签名不能为空');
    }
  }
}