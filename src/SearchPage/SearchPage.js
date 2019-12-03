import React, { Component} from 'react'
import {
    Link
  } from "react-router-dom";
import './SearchPage.css'

class SearchPage extends Component {
    state={
        value: ""
    }
    componentDidMount(){
        console.log('MONTOU')
    }
    componentWillUnmount(){
        console.log('DESMONTOU')
    }
    shouldComponentUpdate(props, state){
        console.log('ATUALIZOU ALGUMA COISA')
        return true
    }
    handleChange(e){
        this.setState({value: e.target.value})
    }
    render(){
        console.log(this)
        return <div className="search">
            <Link to="/" >Voltar</Link>
            <input type="text" value={this.state.value} onChange={this.handleChange.bind(this)}></input>
        </div>
    }
}
export default SearchPage