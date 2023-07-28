import React from 'react';
import './completedList.css';

const CompletedList = (props) => {

  const completedTasks = props.tasks.filter((task) => task.completed)
  console.log('completed tasks', completedTasks);
  return (
    <div>
      {completedTasks.map((task) =>
        <div key={task.id}> 
          <span>
          {task.name}
          </span>
          
          <input
            className="check-box"
            type="checkbox"
          />
        </div>

      )}
    </div>
  )
}

export default CompletedList