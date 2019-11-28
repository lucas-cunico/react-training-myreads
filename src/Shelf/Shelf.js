import React, { Fragment } from 'react'
import Card from '../Card'

const Shelf = (props) => {
    return <Fragment>
        <h3>{props.title}</h3>
        <div className="row">
            {props.books.map((book) => {
                return <div className="col-md-3" key={book.id}>
                    <Card title={book.title}
                        image={{ src: book.image.src, alt: book.image.alt }}
                        authors={book.authors}
                    />
                </div>
            })}
        </div>
    </Fragment>
}
export default Shelf