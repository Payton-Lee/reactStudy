import { ADD_PERSON } from "../constant"

// 初始化人的列表
const ininState = [{id: '001', name: 'tom', age: 19}]
export default function personReducer(preState = ininState, action) {
  const { type, data } = action
  switch(type) {
    case ADD_PERSON: // 若是添加一个人
      // preState.unshift(data) // 此处不可以这样写，这样会导致preState被改写了，personReducer就不是纯函数了
      return [data, ...preState]
    default:
      return preState
  }
}