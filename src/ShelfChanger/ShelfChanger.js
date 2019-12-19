import React from 'react'
import PropTypes from 'prop-types'
import './ShelfChanger.css'
import * as API from '../BooksAPI'

const ShelfChanger = ({value = 'none', bookId}) => {
    function handlerChangeSelect(e){
        API.update({id:bookId}, e.target.value).then(() => window.location.reload())
    }
    return <div className="shelf-changer">
        <select value={value} onChange={handlerChangeSelect}>
            <option value="none" disabled>Mover para...</option>
            <option value="currentlyReading">Tô lendo</option>
            <option value="wantToRead">Quero ler</option>
            <option value="read">Já li</option>
            <option value="none">Nada</option>
        </select>
    </div>
}
ShelfChanger.propTypes = {
    value: PropTypes.string
}
export default ShelfChanger