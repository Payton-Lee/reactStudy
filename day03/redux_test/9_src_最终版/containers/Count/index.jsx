// 引入Count的ui组件
import React, { Component } from 'react'

// 引入connect，用于链接UI组件与redux
import { connect } from 'react-redux'

// 引入action对象
import {
  increment,
  decrement,
  incrementAsync
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
    this.props.increment(value * 1)
  }
  decrement = () => {
    const { value } = this.selectedNumber
    this.props.increment(value * 1)
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    if (this.props.count % 2 !== 0) {
      this.props.increment(value * 1)
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedNumber
    this.props.incrementAsync(value * 1, 500)
  }

  render() {
    const { count, personCount } = this.props
    return (
      <div>
        <h2>我是Count组件, 下方组件总人数为：{personCount}</h2>
        <h4>当前求和为：{count}</h4>
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
  state => ({
    count: state.count,
    personCount: state.person.length
  }),
  // mapDispatchToProps的一般写法
  /* dispatch => ({
    // 通知redux执行加法
    increment: number => dispatch(increment(number)),
    incrementn: number => dispatch(decrement(number)),
    incrementAsync: (number, time) => dispatch(incrementAsync(number, time))
  }) */
  // mapDispatchToProps的简写
  {
    increment,
    decrement,
    incrementAsync
  }
)(Count)


