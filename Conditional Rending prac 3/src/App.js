import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      isLoggeIn: false
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState(prevState =>{
      return{
        isLoggeIn: !prevState.isLoggeIn
      }
    })
  }

  render(){
    let buttonText = this.state.isLoggeIn? "LOG OUT" : "LOG IN"
    return(
      <div>
        <button onClick={this.handleClick}>{buttonText}</button>
      </div>
    )
  }
}

export default App