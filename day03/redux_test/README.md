## 一、求和案例 redux精简版
1. 去除Count组件自身的状态（指需要用redux管理的状态）
2. src下面建立：
-src
  -redux
    -store.js
    -count_reducer.js
3. store.js:
  (1)引入redux中的createStore函数，创建一个store
  (2)createStore调用时要传入一个为其服务的reducer
  (3)记得暴露store对象
4. count_reducer.js:
  (1)reudcer的本质是一个函数，接收: preState, action， 返回加工后的状态
  (2)reducer有两个作用: 初始化状态，加工状态
  (3)reducer被第一次调用时，时store自动触发的，
          传递的preState是undefined
          传递的aciton是{type: '@@REDUX/INIT_a.2.b.4'}
5. 在index.js中监测store中状态的改变，一旦发生改变重新渲染<App/>
  备注： redux只负责状态管理，至于状态的该百年驱动着页面的展示，要靠自己写

## 二、求和案例 redux完整版
新增文件：
1. count_action.js 专门用于创建action对象
2. constant.js 防止容易写错的type值

## 三、求和案例 redux异步action版
1. 明确：延迟动作不想交给组件本身，想交给action
2. 何时需要异步action，想要对状态进行操作，但是具体的数据靠异步任务返回
3. 具体编码：
  (1).yarn add redux-thunk，并配置在store中
  (2).创建action函数不再返回一般对象，而是一个函数，该函数写异步任务
  (3).异步任务有结果后，分发一个同步的action去真正操作数据。
4. 备注：异步action不是必须要写的，完全可以自己等待异步任务的接过来再去分发同步action。

## 四、求和案例 react-redux基本使用
1. 明确两个概念：
  (1) UI 组件：不能使用任何redux的API，只负责页面的呈现、交互等
  (2) 容器组件：负责和redux通信，将结果交给UI组件
2. 如何创建一个容器组件——靠react-redux的connect函数
    connect(mapStateToProps, mapDispatchToProps)(UI组件)
      - mapStateToProps: 映射状态，返回值是一个对象
      - mapDispatchToProps： 映射操作状态的方法，返回值是一个对象
3. 备注1：容器组件中的store是靠props传进去的，而不是在容器组件中直接引入
4. 备注2：mapDispatchToProps ，也可以是一个对象

## 五、求和案例 react-redux优化
1. 容器组件和UI组件整合一个文件
2. 无需自己给容器组件传递store，给<App/>包裹一个<Provider store={store}></Provider>即可
3. 使用了react-redux后也不用再自己监测redux中状态的改变了，容器组件可以自动完成这个工作。
4. mapDispatchToProps也可以建东的写成一个对象
5. 一个组件要和redux“打交道”要经过哪几步？
  (1)定义好UI组件---不暴露
  (2)引入connect生成一个容器组件，并暴露，写法如下：
    connect(
      state => ({ key: value }),  // 映射状态
      { key: xxxxAction } // 映射操作状态的方法
    )(UI组件)
  (3)在UI组件中通过this.props.xxxxx读取和操作状态