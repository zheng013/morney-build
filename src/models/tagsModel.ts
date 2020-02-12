const localStorageKeyName = 'tags';
type Tag = {
  id: string
  name: string
}
type TagsModel = {
  data: Tag[]
  fetch: () => Tag[]
  save: () => void
  create: (name: string) => 'success' | 'duplicated' //联合类型
}

const tagsModel: TagsModel = {
  data: [],
  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]');
    return this.data;
  },
  create(name: string) {
    const names = this.data.map(item => item.name);
    if (names.indexOf(name) >= 0) {return 'duplicated';}
    this.data.push({id:name,name:name});
    this.save();
    return 'success';
  },

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagsModel;