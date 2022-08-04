import React from 'react'
import ReactDOM from 'react-dom'

// 类式组件

/* class Demo extends React.Component {

  state = {
    count: 0
  }

  myRef = React.createRef()


  componentDidMount() {
    this.timer = setInterval(() => {
      this.setState( state => ({count: state.count + 1}))
    }, 1000)
  }

  unmount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }

  show = () => {
    alert(this.myRef.current.value)
  }

  

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  add = () => {
    this.setState(state => ({ count: state.count + 1 }))
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.myRef}/>
        <h2>当前求和为： {this.state.count}</h2>
        <button onClick={this.add}>点我+1</button>
        <button onClick={this.unmount}>卸载组件</button>
        <button onClick={this.show}>点击提示数据</button>
      </div>
    )
  }
} */




/* function Demo() {
  console.log('Demo');

  const [count, setCount] = React.useState(0)
  const [name, setName] = React.useState('tom')

  // 加的回调
  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  function changeName () {
    setName('jack')
  }

  return (
    <div>
      <h2>当前求和为： {count}</h2>
      <h2>我的名字是： {name}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={changeName}>点我改名</button>
    </div>
  )
} */

function Demo() {
  // console.log('Demo');

  const [count, setCount] = React.useState(0)
  const myRef = React.useRef()

  React.useEffect(() => {
    let timer = setInterval(() => {
      setCount(count => count + 1)
    }, 1000)
    return () => {
      clearInterval(timer)
      // return 的函数相当于componentWillUnMount生命周期函数，传递给useEffect的函数必须要有这个返回值函数，才能模拟此什么周期函数
    }
  }, []) // 方括号不写东西，不监听任何东西，方括号写谁监听谁，不屑方括号，全部监听，相当于componentDidUpdate和componentDidMount

  // 加的回调
  function add() {
    // setCount(count + 1) // 第一种写法
    setCount(count => count + 1)
  }

  // 提示输入的回调
  function show() {
    alert(myRef.current.value)
  }

  function unmount () {
    ReactDOM.unmountComponentAtNode(document.getElementById("root"))
  }


  return (
    <div>
      <input type="text" ref={myRef}/>
      <h2>当前求和为： {count}</h2>
      <button onClick={add}>点我+1</button>
      <button onClick={unmount}>卸载组件</button>
      <button onClick={show}>点我提示数据</button>
    </div>
  )
}

export default Demo