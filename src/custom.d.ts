type RecordItem = {
  tags: string[]
  notes: string
  type: string
  amount: number//数据类型
  createAt?: Date //类 \ 构造函数 ?代表属性可能不存在
}
type Tag = {
  id: string
  name: string
}
interface Window {
  tagList:Tag[]
}