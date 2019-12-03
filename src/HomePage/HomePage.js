import React from "react";
import "./HomePage.css";
import Shelf from '../Shelf'
import {
  Link
} from "react-router-dom";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <Shelf title="Tô lendo" books={this.props.reading} />
          <Shelf title="Quero ler" books={this.props.reading} />
          <Shelf title="Já li" books={this.props.reading} />
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
