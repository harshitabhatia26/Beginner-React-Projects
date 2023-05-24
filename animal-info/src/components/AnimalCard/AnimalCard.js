import React from 'react';
import './AnimalCard.css'
import PropTypes from 'prop-types'

export default function AnimalCard({
    notes,
    name,
    sciname,
    diet,
    size,
    showAdditional
}) {
    return (
        <div className='animal-wrapper'>
            <h2>{name}</h2>
            <h3>{sciname}</h3>
            <h4>{size}</h4>
            <div>{diet.join(',')}</div>
            <button onClick={() => showAdditional(notes)}>More info</button>
        </div>
    )
}

AnimalCard.propTypes = {
    name: PropTypes.string.isRequired,
    sciname: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
    showAdditional: PropTypes.func.isRequired,
    diet: PropTypes.arrayOf(PropTypes.string).isRequired,
    notes: PropTypes.shape({
        link: PropTypes.string,
        notes: PropTypes.string
    })
}

AnimalCard.defaultProps = {
    notes: {
        notes: 'No additional info'
    }
}