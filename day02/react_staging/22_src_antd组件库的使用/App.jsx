import React, { Component } from 'react'

import { Button, DatePicker } from 'antd'
import { WechatOutlined, WeiboCircleOutlined } from '@ant-design/icons'

const { RangePicker } = DatePicker

export default class App extends Component {
  onChange = () => {

  }
  render() {
    return (
      <div>
        App...
        <button>点我</button>
        <Button type="primary">Primary Button</Button>
        <WechatOutlined />
        <WeiboCircleOutlined />
        <DatePicker onChange={this.onChange} />
        <RangePicker/>
      </div>
    )
  }
}
