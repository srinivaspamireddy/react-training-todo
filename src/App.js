
import './App.css';
import CompletedList from './components/CompletedList';
import TodoAdd from './components/TodoAdd';
import TodoItem from './components/TodoItem.js';
import { useState } from 'react';

function App() {
  const [todoTasks, setTodoTasks] = useState([]);
  const [completed, setCompleted] = useState(false);
  
  const addTaskNew = (task) => {
    setTodoTasks((prevTodo) => [...prevTodo,task]);
  }
  
  const editTask = (task) => {
    const newTodos = todoTasks.map((obj) => {
      if (obj.id === task.id) {
        return {...obj,name:task.name,completed:task.completed}
      }
      return obj;
    })
    setTodoTasks(newTodos);
  }
  const renderCompletedTasks = () => {
    setCompleted(prevState => !prevState); 
  }
  return (
    <div className="App">
      <TodoAdd addTaskNew={addTaskNew} />

      <h2>Todo list</h2>
      {todoTasks.map((todo,index) =>
        <TodoItem todoItem={todo} editTask={editTask} />
      )}
      <button  onClick={renderCompletedTasks}>
        Completed tasks
      </button>
      {(completed && <CompletedList tasks={ todoTasks } />)}
    </div>
  );
}

export default App;
