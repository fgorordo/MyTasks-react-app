import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete, onToggle}) => {
    return (
        <div className={`card mb-4 ${task.reminder ? 'reminder': ''}`} key={task.id} onDoubleClick={onToggle}>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    {task.notes} 
                    <FaTimes style={{color: 'red',cursor: 'pointer'}} onClick={onDelete}/>
                </h5>
                <p className='card-text'>
                    {task.day}
                </p>
            </div>
        </div>
    )
}

export default Task