import React, { useState } from 'react'

const AddTask = ({onAdd}) => {
  const [notes, setNotes] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault()
    if(!notes) {
      alert('Please add a task')
      return
    }

    onAdd({notes,day,reminder})

    setNotes('')
    setDay('')
    setReminder(false)
  }
  return (
    <>
    <form className='mt-4 mb-4' onSubmit={onSubmit}>
      <div className='form-floating mb-3'>
        <input type="text" placeholder='Add a task' className='form-control' id="floatingInput" value={notes} onChange={(event) => setNotes(event.target.value)}/>
        <label htmlFor="" className='floatingInput'>Add a task</label>
      </div>
      <div className='form-floating mb-3'>
        <input type="text" placeholder='Add a Date & Time' className='form-control' id="floatingInput" onChange={(event) => setDay(event.target.value)} value={day}/>
        <label htmlFor="" className='floatingInput'>Add a Date & Time</label>
      </div>
      <div className="form-check form-switch mb-3">
        <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" value={reminder} onChange={(event) => setReminder(event.currentTarget.checked)} checked={reminder}/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Set reminder</label>
      </div>

      <input type="submit" value="Save Task" className='btn btn-primary w-100'/>
    </form>
    <hr />
    </>
  )
}

export default AddTask