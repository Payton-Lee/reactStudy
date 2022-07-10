import React, { Component } from 'react'
import PubSub from 'pubsub-js'

// import axios from 'axios'

export default class Search extends Component {

  search = async () => {
    // 获取用户的输入(连续解构赋值+重命名)
    const { keywordElement: { value: keyWord } } = this
    // 发送请求前，通知List通知状态
    PubSub.publish('atguigu', {
      isFirst: false,
      isLoading: true
    })

    console.log(keyWord);

    // axios.get(`http://localhost:3000/api1/search/users?q=${keyWord}`).then(
    //   response => {console.log('成功了', response.data);},
    //   error => {
    //     console.log('失败了', error)
    //   }
    // )
    // 发起网络请求 使用axios发送
    /* axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        console.log(response.data)
        PubSub.publish('atguigu', {
          isLoading: false,
          users: response.data.items
        })
      },
      error => {
        PubSub.publish('atguigu', {
          isLoading: false,
          err: error.message
        })
      }
    ) */
    // 发送网络请求，使用fetch发送(未优化)
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        return response.json() // 返回的是一个Promise实例对象
      }
      ,

      error => {
        console.log('联系服务器失败了', error);
        return new Promise(() => {})
      }
    ).then(
      response => {
        console.log('获取数据成功了', response);
      },
      error => {
        console.log('获取数据失败了', error);
      }
    ) */
    // 发送网络请求，使用fetch发送(优化)
    /* fetch(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => {
        return response.json() // 返回的是一个Promise实例对象
      }
    ).then(
      response => {
        console.log('获取数据成功了', response);
      }
    ).catch(
      error => {
        console.log('请求出错', error);
      }
    ) */
    try {
      const response = await fetch(`https://api.github.com/search/users?q=${keyWord}`)
      const data = await response.json()
      PubSub.publish('atguigu', {
        isLoading: false,
        users: data.items
      })
    } catch (error) {
      console.log('请求出错', error);
      PubSub.publish('atguigu', {
        isLoading: false,
        err: error.message
      })
    }
  }


  render() {
    return (
      <section className="jumbotron">
        <h3 className="jumbotron-heading">搜索GitHub用户</h3>
        <div>
          <input ref={c => this.keywordElement = c} type="text" placeholder="输入关键字点击搜索" />&nbsp;
          <button onClick={this.search}>搜索</button>
        </div>
      </section>
    )
  }
}
