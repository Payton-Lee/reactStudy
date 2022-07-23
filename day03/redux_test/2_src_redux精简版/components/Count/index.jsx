import React, { Component } from 'react'
// 引入store，用于获取redux中的状态
import store from '../../redux/store'

export default class Count extends Component {


  /* componentDidMount() {
    // 监测redux中状态的变化，只要变化，就调用render
    store.subscribe(() => {
      this.setState({})
    })
  } */

  increment = () => {
    const { value } = this.selectedNumber
    store.dispatch(
      {
        type: 'increment',
        data: value * 1
      }
    )
  }
  decrement = () => {
    const { value } = this.selectedNumber
    store.dispatch(
      {
        type: 'decrement',
        data: value * 1
      }
    )
  }

  // 奇数再加
  incrementIfOdd = () => {
    const { value } = this.selectedNumber
    const count = store.getState()
    if(count % 2 !== 0) {
      store.dispatch(
        {
          type: 'increment',
          data: value * 1
        }
      )
    }
  }

  // 异步加
  incrementAsync = () => {
    const { value } = this.selectedNumber
    setTimeout(() => {
      store.dispatch(
        {
          type: 'increment',
          data: value * 1
        }
      )
    }, 500)
  }

  render() {
    return (
      <div>
        <h1>当前求和为：{ store.getState() }</h1>
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
