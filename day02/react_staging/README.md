## 一、todoList案例相关知识点
    1. 拆分组件、实现静态组件，注意： className、style的写法
    2. 动态初始化列表，如何确定将数据反正哪个组件的state中？
          —— 某个组件hi用：放在起自身的state中
          —— 某些组件使用：放在他们共同的父组件state中(官方称此操作为：状态提升)
    3. 关于父子组件之间的通信：
          —— 【父组件】给【子组件】传递数据：通过props传递
          —— 【子组件】给【父组件】传递数据：通过props传递，要求父提前给子传递一个函数
    4. 注意defaultChecked(只有在第一次指定的时候才会起作用，其他时间不会起作用) 和 checked 的区别，类似的还有：defaultValue 和 value
    5. 状态在哪里，操作状态的方法就在哪里

## 二、github搜索案例相关知识点
    1. 设计状态时要考虑全面，例如带有网络请求的组件，要考虑请求失败怎么办
    2. ES6小知识点： **结构赋值 + 重命名**
            ```js
                  let obj = {a :{ b:1 }}
                  const { a } = obj // 传统解构赋值
                  const { a: {b} } = obj // 连续解构赋值
                  const { a: {b: value}} = obj // 连续解构赋值 + 重命名
            ```
     3. 消息订阅于发布机制
            1. 先订阅，在发布 (理解，有一种隔空对话)
            2. 适用于任意组件间通讯
            3. 要在组件的componentWillUnmount中取消订阅
     4. fetch发送请求(关注分离的设计思想)
            ```js
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
            ```
            