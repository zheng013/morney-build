import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: [] as Tag[],
    tag: {} as Tag
  },
  mutations: {
    createRecord(state, record: RecordItem) {
      const deepClone = clone(record);
      deepClone.createAt = new Date().toISOString();
      state.recordList.push(deepClone);
      store.commit('saveRecord');
    },
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    },
    saveRecord(state) {
      window.localStorage.setItem('recordList', JSON.stringify(state.recordList));
    },
    fetchTagList(state) {
      state.tagList = JSON.parse(window.localStorage.getItem('tags') || '[]');
    },
    createTags(state, name: string) {
      // @ts-ignore
      const names = state.tagList.map(item => item.name);
      const id = createId().toString();
      if (names.indexOf(name) >= 0) {
        window.alert('您输入的标签名重复');
        return 'duplicated';
      }
      state.tagList.push({id: id, name: name});
      store.commit('saveTagList');
      window.alert('添加成功');
      return 'success';
    },
    destroy(state, id: string) {
      const tag = state.tagList.filter(item => item.id === id)[0];
      const index: number = state.tagList.indexOf(tag);
      state.tagList.splice(index, 1);
      store.commit('saveTagList');
    },
    update(state, payload: { id: string, name: string }) {
      const {name, id} = payload;
      const tag = state.tagList.filter(item => item.id === id)[0];
      if (tag) {
        tag.name = name;
      }
      store.commit('saveTagList');
    },


    findTag(state, id: string) {
      state.tag = state.tagList.filter(item => item.id === id)[0];
    },
    saveTagList(state) {
      window.localStorage.setItem('tags', JSON.stringify(state.tagList));
    }
  }
});
export default store;
