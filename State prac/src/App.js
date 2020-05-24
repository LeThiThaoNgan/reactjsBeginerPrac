import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import jokeData from './jokeData';

class App extends React.Component{
  constructor(){
    super()
    this.state ={
      isLoggeIn: false
    }
  }

  render(){
    let wordDisplay
    if(this.state.isLoggeIn === true){
      wordDisplay = "in"
    }
    else{
      wordDisplay = "out"
    }
    return(
      <div>
        <h1>You are current Logged {wordDisplay}</h1>
      </div>
    )
  }
}

export default App