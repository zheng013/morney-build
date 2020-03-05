
type RecordItem = {
  tags: Tag[]
  notes: string
  type: string
  amount: number//数据类型
  createAt?: string //类 \ 构造函数 ?代表属性可能不存在
}
type TagsModel = {
  data: Tag[]
  fetch: () => Tag[]
  save: () => void
  update: (id: string, name: string) => void
  destroy: (id: string) => void
  create: (name: string) => 'success' | 'duplicated' //联合类型
}
type Tag = {
  id: string
  name: string
}
interface Window {
}
type DataSourceItem = {
  text: string, value: string
};
type RootState={
  recordList:  RecordItem[]
  tagList: Tag[]
  tag: Tag
  tagError: Error|null
  recordError:Error|null
}
