import React from 'react';
import jokeData from './jokeData';

function Joke(props){
    console.log(props.isLoading)
    if(props.isLoading === true){
        return(
            <h1>Loading....</h1>
        )
    }
    else{
        return(
        <h1>Temp</h1>
        )}
    
    // cach 2
    // return(
    // props.isLoading===true ? <h1>Loading....</h1> : <h1>Temp</h1>
    // )
}

export default Joke