import React, { PureComponent } from 'react'

import './index.css'

export default class Parent extends PureComponent {

  state = {
    carName: "奔驰C63",
    stus: ['小张', '小李', '小华']
  }


  changeCar = () => {
    this.setState({ carName: '兰博基尼' })
    // this.setState({ })
    /* const obj = this.state
    obj.carName = '兰博基尼'
    this.setState(obj) */
  }

  addStu = () => {
    /* const { stus } = this.state
    stus.unshift('小刘')
    this.setState(stus) */
    this.setState({stus: ['小刘', ...this.state.stus]})
  }

  /*   shouldComponentUpdate(nextProps, nextState) {
      console.log(this.state, this.props); // 目前的props和state
      console.log(nextProps, nextState); // 接下来要变化的目标props和state
      return !this.state.carName === nextState.carName
    } */

  render() {

    const { carName } = this.state

    console.log('parent------render');
    return (
      <div className='parent'>
        <h3>我是Parent组件</h3>
        <span>我的车名字是： {carName}</span>
        <br />
        {this.state.stus}
        <br />
        <button onClick={this.changeCar}>点我换车</button>
        <button onClick={this.addStu}>点击添加一个小刘</button>
        {/* <Child carName={carName}/> */}
        <Child carName="奥托" />
      </div>
    )
  }
}

class Child extends PureComponent {

  /*   shouldComponentUpdate(nextProps, nextState) {
      console.log(this.props, this.state); // 目前的props和state
      console.log(nextProps, nextState); // 接下来要变化的目标props和state
      return !this.props.carName === nextProps.carName
    } */

  render() {
    console.log('child---render');
    return (
      <div className='child'>
        <h3>我是Child组件</h3>
        {/* <span>我接到的车是：{this.props.carName}</span> */}
      </div>
    )
  }
}
