import clone from '@/lib/clone';
const localStorageKeyName = 'recordList';

const recordListStore={
  //recordList store
  recordList: [] as RecordItem[],
  createRecord(record: RecordItem) {
    const deepClone = clone(record);
    deepClone.createAt = new Date();
    this.recordList.push(deepClone);
    this.saveRecord();
  },
  fetchRecordList() {
    this.recordList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.recordList;
  },
  saveRecord() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.recordList));
  }
};
recordListStore.fetchRecordList();
export default recordListStore