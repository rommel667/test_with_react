import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'


const Button = ({ buttonText, emitEvent }) => {
    return (
        <button onClick={emitEvent} data-test="button">{buttonText}</button>
    )
}

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func
}

export default Button