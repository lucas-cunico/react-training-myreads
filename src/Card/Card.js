import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'
/**
 * PROPS
 * {
 * image: {src, alt},
 * title,
 * authors
 * }
*/
const Card = ({ image, title, authors }) => {
    //DESTRUCTURING
    //const {image, title} = props
    return <div className="card">
        <img src={image.src} alt={image.alt} />
        <p>{title}</p>
        <ul>
            {authors.map(function (author, index) {
                return <li key={index}>{author}</li>
            })}
        </ul>
    </div>
}
Card.propTypes = {
    image: PropTypes.shape({ src: PropTypes.string, alt: PropTypes.string }).isRequired
}

export default Card