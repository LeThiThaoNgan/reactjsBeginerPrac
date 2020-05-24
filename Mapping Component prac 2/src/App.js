import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import jokeData from './jokeData';

function App() {
  const jokeComponents = jokeData.map(item => <Joke joke={item}/>)
  
  return (
    <div>
      {jokeComponents}
    </div> 
  )
}
export default App