import Task from './Task'
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <div className="row">
            <div className="col-sm-6">
                {
                    tasks.map((task) => {
                        return (
                            <Task key={task.id} task={task} onDelete={() => onDelete(task.id)} onToggle={()=> onToggle(task.id)}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Tasks