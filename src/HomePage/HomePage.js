import React from "react";
import "./HomePage.css";
import CardsBlock from '../CardsBlock'

class HomePage extends React.Component {
  state={
    reading: [{
      image: {
        src: "http://placekitten.com/200/300",
        alt: "It's an cat"
      },
      title: 'Meow',
      authors: ['author one', 'author two']
    },{
      image: {
        src: "http://placekitten.com/200/300",
        alt: "It's an cat"
      },
      title: 'Meow',
      authors: ['author one', 'author two']
    },{
      image: {
        src: "http://placekitten.com/200/300",
        alt: "It's an cat"
      },
      title: 'Meow',
      authors: ['author one', 'author two']
    }]
  }
  render() {
    const {reading} = this.state
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <CardsBlock title="Tô lendo" content={reading}/>
          <CardsBlock title="Quero ler" content={reading}/>
          <CardsBlock title="Já li" content={reading}/>
          <a className="plus" href="/search" title="Pesquisar minhas leituras">+</a>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
