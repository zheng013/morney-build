const localStorageKeyName = 'tags';

type TagsModel = {
  data: Tag[]
  fetch: () => Tag[]
  save: () => void
  update: (id: string, name: string) => void
  destroy:(id:string)=>void
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
    this.data.push({id: name, name: name});
    this.save();
    return 'success';
  },
  update(id: string, name: string) {
    const tag = this.data.filter(item => item.id === id)[0];
    tag.id = tag.name = name;
    this.save();
  },
  destroy(id: string) {
    const tag = this.data.filter(item => item.id === id)[0];
    const index: number = this.data.indexOf(tag);
    this.data.splice(index, 1);
    this.save()
  },
  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
};
export default tagsModel;