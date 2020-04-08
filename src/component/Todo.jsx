import React, { useState } from 'react';
import { Input } from 'antd';
import TodoItem from './TodoItem';

export default function Todo() {
  const [todos, setTodo] = useState([]);
  const [input, setInput] = useState('');
  const addTodo = () => {
    if (!input) return;
    setTodo(todos.concat(input));
    setInput('');
  }
  const deleteTodo = index => {
    todos.splice(index, 1);
    setTodo([].concat(todos));
  }
  return (
    <div>
      <Input 
        style={{ width: 200, marginBottom: 20 }}
        value={input}
        placeholder= "please input someting..."
        onChange={e => {
          setInput(e.target.value);
        }}
        onPressEnter={addTodo}/>
      <TodoItem todos={todos} deleteTodo={deleteTodo}/>
    </div>
  )
}