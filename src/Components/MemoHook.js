import React, {useState, useMemo} from 'react'

function MemoHook() {
    const [countOne, setCountOne] = useState(0)
    const [countTwo, setCountTwo] = useState(0)

    const IncreamentOne = () =>{
        console.log(`Rendering Increament one`)
        setCountOne(countOne + 1)
    }
    const IncreamentTwo = () =>{
        console.log(`Rendering Increament two`)
        setCountTwo(countTwo + 1)
    }

    const isEven = useMemo(() =>{
        let i = 0
        while(i < 200000000) i++
        return countOne % 2 === 0
    },[countOne]) 

  return (
    <div>
        <div>
            <button onClick={IncreamentOne}>Count One - {countOne}</button>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
        <div>
            <button onClick={IncreamentTwo}>Count Two - {countTwo}</button>
        </div>
    </div>
  )
}

export default MemoHook