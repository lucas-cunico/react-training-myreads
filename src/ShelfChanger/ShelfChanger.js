import React from 'react'
import PropTypes from 'prop-types'

const ShelfChanger = ({value}) => {
    return <div>
        <select value={value} onChange={e => e}>
            <option value="currentlyReading">Tô lendo</option>
            <option value="wantToRead">Quero ler</option>
            <option value="read">Já li</option>
        </select>
    </div>
}
ShelfChanger.propTypes = {
    value: PropTypes.string
}
export default ShelfChanger