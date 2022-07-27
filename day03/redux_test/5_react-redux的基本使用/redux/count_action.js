/* 
  该文件专门为Count生成action对象
*/
/* function createIncrementAction (data) {
  return {type: 'increment', data}
} */

import { INCREMENT, DECREMENT } from './constant'
// 所谓的异步action就是指，action的值为Object类型的一般对象
export const createIncrementAction = data => ({ type: INCREMENT, data })

/* function createDecrementAction (data) {
  return {type: 'decrement', data}
} */

export const createDecrementAction = data => ({ type: DECREMENT, data })

// 所谓的异步action就是指，action的值为函数, 异步action中，一半都会调用同步action, 异步action不是必须要用的
export const createIncrementAsyncAction = (data, time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(createIncrementAction(data))
    }, time)
  }
}