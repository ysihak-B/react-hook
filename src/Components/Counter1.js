import React from 'react'
import useCounter from '../Hook/useCounter'

function Counter1() {
    const [count, Increament, Decreament, Reset] = useCounter()
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter1