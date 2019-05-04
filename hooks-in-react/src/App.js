import React, { useState } from 'react'; // useState is a hook
import './app.css';

function Todo({ todo, index, completeTodo, deleteTodo}) {
  return <div style={{textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
    {todo.text}
    <div>
      <button onClick={() => completeTodo(index)}>Complete</button>
      <button onClick={() => deleteTodo(index)}>x</button>
    </div>
  </div>;
}

function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if(!value) return;
    addTodo(value);
    setValue('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="input"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="Add Todo..."
      />
    </form>
  )
}

function Counter() {
  const [count, setCount] = useState(0); // Calling useState aka hook in a functional component to set local state to it.

  return (
    <div>
      <p>You click count {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        click
      </button>
    </div>
  )
}

function App(){
  const [todos, setTodos] = useState([
    {
      text: 'Learn React',
      isCompleted: false
    },{
      text: 'Meet friend on Lunch',
      isCompleted: false
    },{
      text: 'Build really cool app',
      isCompleted: false
    },
  ])

  const addTodo = text => {
    const newTodos = [...todos, { text, isCompleted: false }];

    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const deleteTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index} todo={todo} completeTodo={completeTodo} deleteTodo={deleteTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
      </div>
      <Counter />
    </div>
  )
}

export default App;