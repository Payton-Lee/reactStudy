/* 
  该文件专门用于暴露一个store对象，整个应用只有一个store对象
*/
// 引入createStore，专门用于创建redux中最为核心的store对象
// import {} from '@redux'
import { createStore, applyMiddleware, combineReducers } from 'redux'
// 引入为Count组件服务的reducer
import countReducer from './reducers/count'
// 引入为Person组件服务的reducer
import personReducer from './reducers/person'
// 引入redux-thunk
import thunk from 'redux-thunk'
// 引入redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension'

// combineReducers传入的对象就是redux保存的总状态对象
// 汇总所有的reducer，变成一个总的reducer
const allReducer = combineReducers({
   he: countReducer,
   rens: personReducer
})

// 暴露store
export default createStore(allReducer, composeWithDevTools(applyMiddleware(thunk)))