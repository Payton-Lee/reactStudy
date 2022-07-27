// 引入Count的ui组件
import CountUI from "../../components/Count"

// 引入connect，用于链接UI组件与redux
import { connect } from 'react-redux'

// 引入action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/count_action'

/* 
1. mapStateToProps函数返回的是一个对象
2. 返回的对象中的key就作为传递给UI组件props中的key， value就作为传递给UI组件props的value
3. mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
  return {
    count: state
  }
}

/* 
1. mapDispatchToProps函数返回的是一个对象
2. 返回的对象中的key就作为传递给UI组件props中的key， value就作为传递给UI组件props的value
3. mapDispatchToProps用于传递状态操作方法
*/
function mapDispatchToProps(dispatch) {
  return {
    // 通知redux执行加法
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
  }
}

// 使用connect()()创建并暴露一个Count容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)


