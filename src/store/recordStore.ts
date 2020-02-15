import recordListModel from '@/models/recordListModel';

export default{
  //recordList store
  recordList: recordListModel.fetch(),
  createRecord: (record: RecordItem) => {
    recordListModel.create(record);
  },
}