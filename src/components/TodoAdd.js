
import React, { useState } from 'react'
import { nanoid } from 'nanoid';

const TodoAdd = (props) => {
  const [name, setName] = useState('');
  const [completed, setCompleted] = useState(false);
  const addTaskNew = (event) => {
    event.preventDefault();
    const task = {
      id: nanoid(),
      name: name,
      completed:completed
    }
    props.addTaskNew(task);
    setName('');
    setCompleted(false);
  }
  return (
    <div>
      <h2>Add  new Task</h2>
      <form>
        <div>
          <label id='name' htmlFor='name'>Task Name</label>
          <input
            id='name'
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div>
          <label id="completed" htmlFor="completed">Completed</label>
          <input
            type="checkbox"
            value={completed}
            onChange={(e)=>setCompleted(e.target.checked)}
          />
        </div>
       <button onClick={addTaskNew}>Submit</button>
      </form>
    </div>
  )
}

export default TodoAdd;