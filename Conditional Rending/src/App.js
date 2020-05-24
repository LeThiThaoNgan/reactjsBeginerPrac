import React ,{Component} from 'react';
import Joke from './Joke.js';
import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      isLoading: true
    }
  }
  
  componentDidMount(){
    setTimeout(() => {
      this.setState({
        isLoading: false
      })
    }, 1500)
  }

  render(){
  return(
    <div>
      <Joke isLoading={this.state.isLoading} />
    </div>
  )
  }
}

export default App