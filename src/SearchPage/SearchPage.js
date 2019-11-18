import React from 'react'
import './SearchPage.css'

class SearchPage extends React.Component{
    state={
        value: ''
    }
    render(){
        return <React.Fragment>
            <div style={{display:'flex'}}>
            <a href="/" className="search-anchor">Voltar</a>
            <input type="text" className="search-input" placeholder="Procure seu livro:" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})}></input>
            </div>
            <div className="container">{this.state.value}</div>
        </React.Fragment>
    }
}
export default SearchPage