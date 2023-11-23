import React, { useReducer } from 'react'

const initialState = 0
const reducer = (state, action) =>{
    switch(action){
        case 'increament':
            return state + 1
        case 'decreament':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function HookReducer3() {
  const [count, dispatch] = useReducer(reducer, initialState)
  const [count2, dispatch2] = useReducer(reducer, initialState)
  return (
    <div>
        <div>Count - {count}</div>
        <button onClick={() => dispatch('increament')}>Increament</button>
        <button onClick={() => dispatch('decreament')}>Decreament</button>
        <button onClick={() => dispatch('reset')}>Reset</button>
        <div>Count - {count2}</div>
        <button onClick={() => dispatch2('increament')}>Increament</button>
        <button onClick={() => dispatch2('decreament')}>Decreament</button>
        <button onClick={() => dispatch2('reset')}>Reset</button>
    </div>
  )
}

export default HookReducer3