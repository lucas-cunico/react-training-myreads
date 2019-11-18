import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import uniqueId from 'lodash/uniqueId'

const CardsBlock = ({ title, content }) => {
    return <React.Fragment>
        <h3>{title}</h3>
        <div className="row">
            {content.map((data, index) => {
                return <div className="col-md-3" key={uniqueId('card_block_')}>
                    <Card {...data} />
                </div>
            })}
        </div>
    </React.Fragment>
}
CardsBlock.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.arrayOf(PropTypes.shape({ ...Card.propTypes }))
}

export default CardsBlock