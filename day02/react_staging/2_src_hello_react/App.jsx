// 引入React
import React, { Component } from "react"
import Hello from "./components/Hello"
import Welcome from "./components/Welcome"

// 创建“外壳”组件App，并暴露出来
export default class App extends Component {
  render() {
    return (
      <div>
        <Hello/>
        <Welcome/>
      </div>
    )
  }
}
