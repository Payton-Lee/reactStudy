import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addPerson } from '../../redux/actions/person'

import { nanoid } from 'nanoid'

class Person extends Component {

  addPerson = () => {
    const name = this.nameNode.value
    const age = this.ageNode.value * 1
    const personObj = { id: nanoid(), name, age }
    this.props.addPerson(personObj)
    this.nameNode.value = ''
    this.ageNode.value = ''
  }


  render() {
    const { persons, count } = this.props
    return (
      <div>
        <h2>我是Person组件, 上方求和为{ count }</h2>
        <input ref={c => this.nameNode = c} type="text" placeholder='输入名字' />
        <input ref={c => this.ageNode = c} type="text" placeholder='输入年龄' />
        <button onClick={this.addPerson}>添加</button>
        <ul>
          {
            persons.map(p => {
              return (
                <li key={p.id}>{p.name}----{p.age}岁</li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default connect(
  state => ({
    persons: state.person,
    count: state.count
  }),// 映射状态
  { addPerson } // 映射操作状态的方法
)(Person)
