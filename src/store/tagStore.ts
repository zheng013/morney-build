import createId from '@/lib/createId';
const localStorageKeyName = 'tags';

const tagListStore={
  //tagList store
  tagList: []as Tag[],
  fetchTagList() {
    this.tagList = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.tagList;
  },
  createTags(name: string) {
    // @ts-ignore
    const names = this.tagList.map(item => item.name);
    const id = createId().toString();
    if (names.indexOf(name) >= 0) { window.alert('您输入的标签名重复');return 'duplicated';}
    this.tagList.push({id:id, name:name});
    this.saveTagList();
    window.alert('添加成功');
    return 'success';
  },
  destroy(id: string) {
    const tag = this.tagList.filter(item => item.id === id)[0];
    const index: number = this.tagList.indexOf(tag);
    this.tagList.splice(index, 1);
    this.saveTagList();
  },
  update(id: string, name: string) {
    const tag = this.tagList.filter(item => item.id === id)[0];
    if(tag){
      tag.name = name;
    }
    this.saveTagList();
  },
  findTag(id: string) {
    return this.tagList.filter(item => item.id === id)[0];
  },
  saveTagList() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.tagList));
  }
};
tagListStore.fetchTagList();
export default tagListStore