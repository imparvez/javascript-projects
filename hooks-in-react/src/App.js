import React, { useState } from 'react'
import './app.css'

function Todo({ index, todo, completeTodo, deleteTodo }) {
  return (
    <div style={{textDecoration: todo.isCompleted ? 'line-through' : ''}} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Completed</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  )
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if(!value) return
    addTodo(value)
    setValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={e => setValue(e.target.value)} placeholder="Add Todo"/>
    </form>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Todo 1',
      isCompleted: false
    },{
      text: 'Todo 2',
      isCompleted: false
    },{
      text: 'Todo 3',
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const deleteTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="App">
      <div className="todo-list">
        {todos.map((todo, index) => (
            <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App
