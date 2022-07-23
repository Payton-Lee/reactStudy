/* 
  1. 该文件是用于创建一个为Count组件服务的reducer， reducer本质是一个函数
  2. reducer函数会接收到两个参数，分别为：之前的状态(prestate), 动作对象(action)
*/
const ininState = 0
export default function countReducer(preState = ininState, action) {
  console.log(preState, action);
  /* if(preState === undefined) {
    preState = 0
  } */
  // 从action对象中获取：type、data
  const { type, data } = action
  // 根据type决定如何加工数据
  switch (type) {
    case 'increment': // 如果是加
      return preState + data
    case 'decrement': // 如果是减
      return preState - data
    /* case 'increment':
      return preState + data
    case 'increment':
      return preState + data */
    default:
      return preState
  }
}