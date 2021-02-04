// State  JS object where property values of the component are stored
// Manager inside of the component instead of being passed into it (unlike props)

import {useState} from 'react';

const State = () => {
    const [count, setCount] = useState(4)

    function decCount() {
        setCount(count - 1);
    }

    function incCount() {
        setCount(count + 1);
    }
   
    
    return (
        <>
        <button onClick={decCount}> - </button>
        <span> {count} </span>
        <button onClick={incCount}> + </button>
        </>
    )
}

export default State;