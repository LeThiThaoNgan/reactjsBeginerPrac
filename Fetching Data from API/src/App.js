import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      character: {}
    }
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => response.json())
    .then(data => {
      this.setState({
        character: data
      })
    })
  }
  render(){
    return(
      <div>
        {this.state.character.title}
      </div>
    )
  }
}


export default App