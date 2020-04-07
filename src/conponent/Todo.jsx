import React, { useState } from 'react';
import { Input } from 'antd';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    setTodo(todos.concat(input));
    setInput('');
  }
  const deleteTodo = index => {
    todos.splice(index, 1);
    console.log(todos)
    setTodo([].concat(todos));
  }
  return (
    <div>
      <Input 
        style={{ width: 200 }}
        value={input}
        onChange={e => {
          setInput(e.target.value);
        }}
        onPressEnter={() => addTodo()}/>
      <TodoItem todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}