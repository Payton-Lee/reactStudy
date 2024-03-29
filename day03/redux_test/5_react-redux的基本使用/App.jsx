import React, { Component } from 'react'
// 引入store
import store from './redux/store'

import Count from './containers/Count'

export default class App extends Component {
  render() {
    return (
      <div>
        {/* 给容器组件传递store */}
        <Count store={store} />
      </div>
    )
  }
}
