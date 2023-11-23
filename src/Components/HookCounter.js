import React, { useState, useEffect } from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    useEffect(()=>{
        console.log('updating document tiltle')
        document.title = `you clicked ${count} times`
    }, [count])

    const increament = () =>{
        setCount(count + 1)
    }

    return ( 
        <div>
            <input type='text' value={name} onChange = {e => setName(e.target.value)} ></input>
            <button onClick={increament}>count {count}</button>
        </div>
     );
}

export default HookCounter;