// 引入Count的ui组件
import React, { Component } from 'react'

// 引入connect，用于链接UI组件与redux
import { connect } from 'react-redux'

// 引入action对象
import {
  createIncrementAction,
  createDecrementAction,
  createIncrementAsyncAction
} from '../../redux/actions/count'

// 定义ui组件
class Count extends Component {


  /* componentDidMount() {
    // 监测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({})
    })
  } */

  increment = () => {
    const { value } = this.selectedNumber
    this.props.jia(value * 1)
  }
  decrement = () => {
    const { value } = this.selectedNumber
    this.props.jian(value * 1)
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    if (this.props.count % 2 !== 0) {
      this.props.jia(value * 1)
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedNumber
    this.props.jiaAsync(value * 1, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{this.props.count}</h1>
        <select ref={c => this.selectedNumber = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>&nbsp;
        <button onClick={this.increment}>+</button>&nbsp;
        <button onClick={this.decrement}>-</button>&nbsp;
        <button onClick={this.incrementIfOdd}>当前求和为奇数再加</button>&nbsp;
        <button onClick={this.incrementAsync}>异步加</button>&nbsp;
      </div>
    )
  }
}


// 使用connect()()创建并暴露一个Count容器组件
export default connect(
  state => ({ count: state }),
  // mapDispatchToProps的一般写法
  /* dispatch => ({
    // 通知redux执行加法
    jia: number => dispatch(createIncrementAction(number)),
    jian: number => dispatch(createDecrementAction(number)),
    jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
  }) */
  // mapDispatchToProps的简写
  {
    jia: createIncrementAction,
    jian: createDecrementAction,
    jiaAsync: createIncrementAsyncAction
  }
)(Count)


