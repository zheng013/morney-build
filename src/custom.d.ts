type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number//数据类型
  createAt?: Date //类 \ 构造函数 ?代表属性可能不存在
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
  store:{
    tagList:Tag[]
    createTags:(name:string)=>void
    destroy:(name:string)=>void
    update:TagsModel['update']
    findTag:(id:string)=>Tag|undefined
    recordList:RecordItem[]
    createRecord:(record:RecordItem)=>void
  }
}