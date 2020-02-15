import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagsModel from '@/models/tagsModel';
import Model from "@/models/tagsModel.ts";

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
window.tagList = tagsModel.fetch();
window.createTags = (name:string) => {
  const info = Model.create(name);
  if (info === "duplicated") {
    window.alert("您输入的标签名重复");
  } else if (info === "success") {
    window.alert("添加成功");
  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
