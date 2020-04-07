import React from 'react';
import { Button } from 'antd';

export default function TodoItem(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((item, index) => {
        return (
          <li key={`todo${index}`} style={{ marginBottom: 10 }}>
            <span style={{ padding: 5 }}>{item}</span>
            <Button size="small" type="ghost" onClick={() => props.deleteTodo(index)}>删除</Button>
          </li>
        )
      })}
    </ul>
  )
}