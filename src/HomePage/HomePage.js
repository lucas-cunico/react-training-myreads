import React from "react";
import "./HomePage.css";

class HomePage extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1 className="list-books-title">Minhas leituras</h1>
        <div className="container home">
          <h3>Tô lendo</h3>
          <div className="row">
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
          <h3>Quero ler</h3>
          <div className="row">
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
          <h3>Já li</h3>
          <div className="row">
            <div className="col-md-3">
                <img src="http://placekitten.com/200/300" alt="It's an cat"/>
                <p>Titulo do livro</p>
                <ul>
                    <li>autor</li>
                    <li>autor</li>
                </ul>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default HomePage;
