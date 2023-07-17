import React, { useState } from 'react';


function HookCounterOne() {

    const initialState = 0
    const [count, setCount] = useState(initialState)
    const increamentByFive = () => {
        for (let index = 0; index < 5; index++) {
            // setCount(count + 1) //it may not work properly in some scenarios like this
            setCount(prevCount => prevCount + 1) // the right way of setting a new value
        }
    }

    return ( 
        <div>
            <p>count : {count}</p>
            <button onClick={()=>setCount(prevCount => prevCount + 1)}>Increament</button>
            <button onClick={()=>setCount(initialState)}>Reset</button>
            <button onClick={()=>setCount(prevCount => prevCount - 1)}>Decreament</button>
            <button onClick={increamentByFive}>IncreamentByFive</button>
        </div>
     );
}

export default HookCounterOne;