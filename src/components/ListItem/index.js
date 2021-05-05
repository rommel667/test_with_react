import React from 'react'
import './styles.scss'
import PropTypes from 'prop-types'

const ListItem = ({ title, description }) => {
    if(!title) return null
    return (
        <div data-test="list-item">
            <h2 data-test="title">{title}</h2>
            <p data-test="description">{description}</p>
        </div>
    )
}

ListItem.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string
}


export default ListItem