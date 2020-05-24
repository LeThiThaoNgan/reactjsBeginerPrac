import React from 'react';
import logo from './logo.svg';
import './App.css';
import Joke from './Joke';
import jokeData from './jokeData';

function App() {
  const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} answer={joke.answer}/>)
  // const jokeComponents = jokeData.map(item => <Joke joke={item}/>)

  return (
    <div>
      {jokeComponents}
    </div> 
  )
}
export default App