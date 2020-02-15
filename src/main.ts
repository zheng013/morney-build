import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagsModel from '@/models/tagsModel.ts';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);
window.tagList = tagsModel.fetch();
window.createTags = (name: string) => {
  const info = tagsModel.create(name);
  if (info === 'duplicated') {
    window.alert('您输入的标签名重复');
  } else if (info === 'success') {
    window.alert('添加成功');
  }
};
window.destroy = (id: string) => {
  tagsModel.destroy(id);
};
window.update = (id: string, name: string) => {
  tagsModel.update(id, name);
};
window.findTag = (id: string) => {
  return window.tagList.filter(item => item.id === id)[0];

};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
