import React, { Component } from 'react'

export default class Demo extends Component {

  state = {
    count: 0
  }

  add = () => {
    // 1. 对象式的setState
    /* // 1. 获取原来的状态
    const { count } = this.state
    // 2. 更新状态, state里面的是状态改变对象, setState引起的后续动作是异步的，所以打印输出的状态是更新前的
    this.setState({ count: count + 1 }, () => {
      console.log(this.state.count);
    }) */
    // console.log(this.state);
    // 2. 函数式的setState 能收到当前组件的state，和外部组件传递的props两个参数
    /* this.setState(state => ({ count: state.count + 1 }), () => {
      console.log(this.state.count)
    }) */
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <div>
        <h1>当前求和为： {this.state.count}</h1>
        <button onClick={this.add}>点我+1</button>
      </div>
    )
  }
}
