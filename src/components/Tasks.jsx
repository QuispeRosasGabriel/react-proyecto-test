import React from 'react'
import Task from './Task'

const Tasks = ({tasks}) => {
    return (
        <div>
            {tasks.map((task, idx) => (
                <Task task={task} key={idx} />
            ))}            
        </div>
    )
}

export default Tasks
