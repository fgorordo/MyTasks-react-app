import React from 'react'
import Button from './Button'
const Header = ({onAdd,showForm}) => {

  return (
    <>
    <header className='container row mt-4'>
        <h1 className="col">Task Tracker</h1>
        <Button onClick={onAdd} text={showForm? 'Close':'Add'} btnColor={showForm? 'btn-danger': 'btn-primary'}/>
    </header>
    <hr />
    </>
  )
}

export default Header