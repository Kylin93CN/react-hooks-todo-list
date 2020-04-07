import React from 'react';
import { Button } from 'antd';

export default function TodoItem(props) {
  const { todos } = props;
  return (
    <ul>
      {todos.map((item, index) => {
        return (
          <li key={`todo${index}`}>
            <span>{item}</span>
            <Button type="primary" onClick={() => props.deleteTodo(index)}>删除</Button>
          </li>
        )
      })}
    </ul>
  )
}