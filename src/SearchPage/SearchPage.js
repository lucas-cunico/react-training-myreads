import React, { Component, Fragment } from 'react'
import {
    Link
} from "react-router-dom";
import './SearchPage.css'
import Card from '../Card'
import * as API from '../BooksAPI'

class SearchPage extends Component {
    state = {
        value: "",
        books: []
    }
    componentDidMount() {
        console.log('MONTOU')
    }
    componentWillUnmount() {
        console.log('DESMONTOU')
    }
    shouldComponentUpdate(props, state) {
        console.log('ATUALIZOU ALGUMA COISA')
        return true
    }
    handleChange(e) {
        this.setState({ value: e.target.value })
        API.search(e.target.value).then(e => {
            if (Array.isArray(e)) {
                const books = e.map(book => {
                    return {
                        id: book.id,
                        title: book.title,
                        authors: book.authors || [],
                        image: {
                            src: book.imageLinks.thumbnail,
                            alt: book.subtitle
                        },
                        shelf: book.shelf
                    }
                })
                this.setState({ books: books })
            }
        })
    }
    render() {
        return <Fragment>
            <div className="search">
                <Link to="/" >Voltar</Link>
                <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
            </div>
            <div className="container">
                <div className="row">
                    {this.state.books.map((book) => {
                        return <div className="col-md-3" key={book.id}>
                            <Card title={book.title}
                                image={{ src: book.image.src, alt: book.image.alt }}
                                authors={book.authors}
                                shelf={book.shelf}
                            />
                        </div>
                    })}
                </div>
            </div>
        </Fragment>
    }
}
export default SearchPage