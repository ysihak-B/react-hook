import {useState} from 'react'

function useCounter(initialState = 0, value = 1) {
    const [count, setCount] = useState(initialState)

    const Increament = () =>{
      setCount(prevCount => prevCount + value)
    }
  
    const Decreament = () =>{
      setCount(prevCount => prevCount - value)
    }
  
    const Reset = () =>{
      setCount(initialState)
    }
  return [count,Increament, Decreament, Reset]
}

export default useCounter