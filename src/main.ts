import Vue from 'vue';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import Nav from '@/components/Nav.vue';
import Layout from '@/components/Layout.vue';
import Icon from '@/components/Icon.vue';
import tagsModel from '@/models/tagsModel.ts';
import recordListModel from '@/models/recordListModel';

Vue.config.productionTip = false;
Vue.component('Nav', Nav);
Vue.component('Layout', Layout);
Vue.component('Icon', Icon);

window.store = {
  //recordList store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  },

  //tagList store
  tagList: tagsModel.fetch(),
  createTags: (name: string) => {
    const info = tagsModel.create(name);
    if (info === 'duplicated') {
      window.alert('您输入的标签名重复');
    } else if (info === 'success') {
      window.alert('添加成功');
    }
  },
  destroy: (id: string) => {
    tagsModel.destroy(id);
  },
  update: (id: string, name: string) => {
    tagsModel.update(id, name);
  },
  findTag(id: string) {
    return this.tagList.filter(item => item.id === id)[0];

  }
};

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
