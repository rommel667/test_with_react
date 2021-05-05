import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const Headline = ({ header, description }) =>  {
    
        if(!header) return null

        return (
            <div data-test="headlineComponent">
                <h1 data-test="header">{header}</h1>
                <p data-test="description">{description}</p>
            </div>
        )
}

Headline.propTypes = {
    header: PropTypes.string,
    description: PropTypes.string
}

export default Headline