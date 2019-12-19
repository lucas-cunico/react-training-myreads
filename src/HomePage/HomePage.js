import React from "react";
import "./HomePage.css";
import Shelf from '../Shelf'
import {
  Link
} from "react-router-dom";
import * as API from '../BooksAPI'

class HomePage extends React.Component {
  state = {
    currentlyReading: [],
    wantToRead: [],
    read: [],
  }

  componentDidMount(){
    API.getAll().then(books => {
      let currentlyReading = []
      let wantToRead = []
      let read = []
      books.forEach(book => {
        if(book.shelf === "currentlyReading"){
          currentlyReading.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "wantToRead"){
          wantToRead.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
        if(book.shelf === "read"){
          read.push({
            id: book.id,
            title: book.title,
            authors: book.authors || [],
            image: {
                src: book.imageLinks && book.imageLinks.thumbnail,
                alt: book.subtitle
            },
            shelf: book.shelf
          })
        }
      })
      this.setState({currentlyReading, wantToRead, read})
    })
  }
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <Shelf title="Tô lendo" books={this.state.currentlyReading} />
          <Shelf title="Quero ler" books={this.state.wantToRead} />
          <Shelf title="Já li" books={this.state.read} />
          <Link to="/search" className="search-link">+</Link>
        </div>
      </React.Fragment>
    );
  }
  static defaultProps = {
    reading: [{
      id: 1,
      title: 'Titulo do livro 01',
      image: { src: "http://placekitten.com/200/300", alt: "It's an cat" },
      authors: ['autor 01', 'autor 2']
    },
    {
      id: 2,
      title: 'Titulo do livro 02',
      image: { src: "http://placekitten.com/200/300", alt: "It's an cat" },
      authors: ['autor 01', 'autor 2']
    },
    {
      id: 3,
      title: 'Titulo do livro 03',
      image: { src: "http://placekitten.com/200/300", alt: "It's an cat" },
      authors: ['autor 01', 'autor 2']
    }]
  }
}
export default HomePage;
