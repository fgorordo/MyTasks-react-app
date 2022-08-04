import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import data from './data/data'


function App() {
  const [tasks, setTasks] = useState(data)
  const [showForm, setShowForm] = useState(false)
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    console.log(task)
    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => {return task.id !== id}))
  }

  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id? {...task, reminder:!task.reminder} : task
      )
    )
  }

  return (
    <>
      <div className="container">
           <Header onAdd={() => setShowForm(!showForm)} showForm={showForm}/>
           {showForm ? <AddTask onAdd={addTask}/>: ''}
           {
            tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No tasks to show'
            
           }
      </div>
    </>
  );
}

export default App;
