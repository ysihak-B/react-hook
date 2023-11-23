import React, { useEffect, useState, useRef } from 'react'

function RefHook2() {
    const [timer, setTimer] = useState(0)
    const intervalRef = useRef(null)
    useEffect(() =>{
        intervalRef.current = setInterval(() =>{
            setTimer(prevState => prevState + 1)
        }, 1000)

        return () => {
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        Timer - {timer}
        <button onClick={() => clearInterval(intervalRef.current)}>Clear Timer</button>
    </div>
  )
}

export default RefHook2