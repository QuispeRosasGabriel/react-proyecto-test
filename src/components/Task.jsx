import React from 'react'

const Task = ({task}) => {
    const handleDeleteTask = () => {
        console.log(task);
    }
    return (
        <div style="display:flex;">
            <span>
                {task}
            </span>
            <button onClick={handleDeleteTask}>Eliminar</button>
        </div>
    )
}

export default Task
