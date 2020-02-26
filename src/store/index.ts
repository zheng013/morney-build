import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';


Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[],
    tagList: []as Tag[]
  },
  mutations: {
    createRecord(state,record: RecordItem) {
      const deepClone = clone(record);
      deepClone.createAt = new Date();
      state.recordList.push(deepClone);
      store.commit('saveRecord')
    },
    fetchRecordList(state) {
      state.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    },
    saveRecord(state) {
      window.localStorage.setItem(localStorageKeyName, JSON.stringify(state.recordList));
    }
  }
});
export default store
