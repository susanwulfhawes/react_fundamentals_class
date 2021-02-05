import React, { useState, useEffect } from 'react';

const ChuckJoke = () => {
    const [joke, setJoke] = useState('')

    function fetchJoke(){
        const url = "https://api.chucknorris.io/jokes/random";
        fetch(url)
        .then(res => res.json())
        .then(json => {
            setJoke(json);
            console.log(json)
        });

    

    }
    return ( 
        <div>
        <button onClick={fetchJoke}>click me</button><br></br>
        <p>{joke.value}</p>
        </div>
     );
}
 
export default ChuckJoke; 