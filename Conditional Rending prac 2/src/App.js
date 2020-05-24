import React ,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      unreadMessage: [
      "call your mom!",
        "New spam email available."  
      ]
    }
  }

  render(){
    return(
      <div>
        <h1>You have{this.state.unreadMessage.length} unreadMessage!</h1>
      </div>
    )
  }
}

export default App