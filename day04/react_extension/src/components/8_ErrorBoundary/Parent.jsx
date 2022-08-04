import React, { Component } from 'react'

import Child from './Child'

export default class Parent extends Component {

  state = {
    hasError: ''
  }

  // 当Parent的子组件出现报错的时候，会触发getDerivedStateFromError调用，并且携带错误信息
  static getDerivedStateFromError(error) {
    console.log(error);
    return { hasError: error }
  }

  componentDidCatch(error, info) {
    console.log('统计此处错位，反馈给服务器，用于通知编码人员进行bug的解决');
    console.log(error);
    console.log(info);
  }

  render() {
    return (
      <div>
        <h2>我是Parent组件</h2>
        { this.state.hasError ? <h2>当前网络不稳定，稍后再试</h2> : <Child/> }
      </div>
    )
  }
}
