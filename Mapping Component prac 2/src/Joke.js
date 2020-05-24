import React from 'react';
import jokeData from './jokeData';

function Joke(props){
    return(
        <div>
            <h3>Question: {props.joke.question}</h3>
            <h3>Answer: {props.joke.answer}</h3>

        </div>
    )
}
export default Joke