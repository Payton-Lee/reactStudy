import { ADD_PERSON } from "../constant"

// 初始化人的列表
const ininState = [{id: '001', name: 'tom', age: 19}]
export default function personReducer(preState = ininState, action) {
  const { type, data } = action
  switch(type) {
    case ADD_PERSON: // 若是添加一个人
      return [data, ...preState]
    default:
      return preState
  }
}