import React, { Component } from 'react'

import C from '../1_setState'

import './index.css'

export default class Parent extends Component {
  render() {
    return (
      <div className='parent'>
        <h3>Parent</h3>
        <A render={(name) => <C name={name}/>}/>
        <A render={(name) => <B name={name}/>}/>
      </div>
    )
  }
}

class A extends Component {

  state = { name: 'tom' }

  render() {
    console.log(this.props);
    const { name } = this.state
    return (
      <div className='a'>
        <h3>A</h3>
        {this.props.render(name)}
        {/* 预留一个位置，相当于Vue的插槽技术 */}
      </div>
    )
  }
}

class B extends Component {
  render() {
    console.log('B');
    return (
      <div className='b'>
        <h3>B</h3>
        <h4>{this.props.name}</h4>
      </div>
    )
  }
}

