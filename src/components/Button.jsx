import React from 'react'
import propTypes from 'prop-types'
const Button = ({onClick,text, btnColor}) => {
    return (
        <button
            className={`col-3 btn ${btnColor}`}
            onClick={onClick}
        >{text}</button>
    )
}

Button.propTypes = {
    onClick: propTypes.func,
}

export default Button