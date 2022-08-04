import React, { Component } from 'react'

import './index.css'

// 创建Context对象
const MyContext = React.createContext()

const { Provider, Consumer } = MyContext

export default class A extends Component {

  state = {
    username: 'tom',
    age: 18
  }


  render() {

    const { username, age } = this.state

    return (
      <div className='parent'>
        <h3>我是A组件</h3>
        <h4>我的用户名是： {username}</h4>
        <Provider value={{ username, age }}>
          <B />
        </Provider>
      </div>
    )
  }
}

class B extends Component {


  render() {
    console.log('B组件', this.context);
    return (
      <div className='child'>
        <h3>我是B组件</h3>
        {/* <h4>我从A组件接收到的用户名： { this.props.useranme }</h4> */}
        <C />
      </div>
    )
  }
}

/* class C extends Component {

  // 声明接收Context
  static contextType = MyContext

  render() {
    console.log('C组件', this.context);
    const { username, age } = this.context
    return (
      <div className='grand'>
        <h3>我是C组件</h3>
        <h4>我从A组件接收到的用户名： {username}， 年龄是{age}</h4>
      </div>
    )
  }
}
 */

function C() {
  return (
    <div className='grand'>
      <h3>我是C组件</h3>
      <h4>我从A组件接收到的用户名： 
        <Consumer>
          {
            value => `${value.username}, 年龄是${value.age}`
          }  
        </Consumer>  
      </h4>
    </div>
  )
}