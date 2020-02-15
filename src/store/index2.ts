import recordListModel from '@/models/recordListModel';
import tagsModel from '@/models/tagsModel';

const store = {
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
export default store