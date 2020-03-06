import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
import createId from '@/lib/createId';


Vue.use(Vuex);


const store = new Vuex.Store({
  state: {
    recordList: [],
    tagList: [],
    tag: {},
    tagError: null,
    recordError: null
  } as unknown as RootState,
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
      if (!state.tagList || state.tagList.length === 0) {
        store.commit('createTags', '衣');
        store.commit('createTags', '食');
        store.commit('createTags', '住');
        store.commit('createTags', '行');
      }
    },
    createTags(state, name: string) {
      // @ts-ignore
      state.tagError = null;
      const names = state.tagList.map(item => item.name);
      const id = createId().toString();
      if (names.indexOf(name) >= 0) {
        return state.tagError = new Error('duplicated');
      }
      state.tagList.push({id: id, name: name});
      store.commit('saveTagList');
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
