import React from 'react'
import useCounter from '../Hook/useCounter'

function Counter2() {
  const [count, Increament, Decreament, Reset] = useCounter(10, 10)
  return (
    <div>
        <div>Count = {count}</div>
        <button onClick={Increament}>Increament</button>
        <button onClick={Decreament}>Decreament</button>
        <button onClick={Reset}>Reset</button>
    </div>
  )
}

export default Counter2