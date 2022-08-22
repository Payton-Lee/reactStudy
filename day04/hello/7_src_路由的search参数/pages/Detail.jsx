import React from 'react'
import { useSearchParams, useLocation } from 'react-router-dom'


export default function Detail() {

  const [search, setSearch] = useSearchParams()
  const id = search.get('id')
  const title = search.get('title')
  const content = search.get('content')
  console.log(setSearch);

  const x = useLocation()
  console.log('@', x);

  return (
    <ul>
      <li>
        <button onClick={() => setSearch('id=008&title=哈哈&content=嘻嘻')}>点我更新一下收到的search参数</button>  
      </li>
      <li>消息的编号：{id}</li>
      <li>消息的标题：{title}</li>
      <li>消息的内容：{content}</li>
    </ul>
  )
}
