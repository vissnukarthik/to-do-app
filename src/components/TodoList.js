import React from 'react'
import Todo from './Todo'

function TodoList({setTodos,todos}) {
  return (
    <div className='todo-container'>
      <ul>
        {todos.map(todo =>(
           <Todo key={todo.id} todo={todo} todos = {todos} setTodos = {setTodos}/>
        ))}
      </ul>
    </div>
  )
}

export default TodoList