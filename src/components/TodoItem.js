import React from 'react';
import { useState } from 'react';
import './todoList.css';

const TodoItem = (props) => {
  const [name, setName] = useState(props.todoItem.name);
  const [completed, setCompleted] = useState(props.todoItem.completed);
  const editTask = (event) => {
    event.preventDefault();
    const task = {
      id: props.todoItem.id,
      name: name,
      completed: completed
    }
    props.editTask(task);
   
  }
  return (
    <div key={props.todoItem.id}>
      <div className="todo-container">
        <div>
          <label id='taskName' htmlFor='taskName'>Task Name</label>
          <input
            id='taskName'
            onChange={(e) => setName(e.target.value)}
            value={name}
            
          />
        </div>
        <div>
          <label id="taskCompleted" htmlFor="taskCompleted">Completed</label>
          <input
            type="checkbox"
            value={completed}
            onChange={(e) => setCompleted(e.target.checked)}
          />
        </div>
        <button onClick={editTask}>Edit</button>
      </div>
    </div>
  )
}

export default TodoItem;