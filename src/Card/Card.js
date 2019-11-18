import React from 'react'
import PropTypes from 'prop-types'
import uniqueId from 'lodash/uniqueId'

const Card = ({ image, title, authors }) => {
    return <React.Fragment>
        <img src={image.src} alt={image.alt} />
        <p>{title}</p>
        {authors && <ul>
            {authors.map(author => <li key={uniqueId('card_author_')}>{author}</li>)}
        </ul>}
    </React.Fragment>
}
Card.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
    }),
    authors: PropTypes.arrayOf(PropTypes.string).isRequired
}
export default Card