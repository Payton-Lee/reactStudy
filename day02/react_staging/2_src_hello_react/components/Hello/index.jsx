import React, { Component } from "react"
// 样式模块化，命名时添加上module，引入时用变量接住，自动整理成对象，使用 `变量名.样式（类选择器）名` 的方式访问
import hello from './index.module.css'

export default class Hello extends Component {
  render() {
    return (
      <h1 className={ hello.title }>Hello, React!</h1>
    )
  }
} 