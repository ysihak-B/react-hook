import React, { useState, useCallback } from 'react'
import Title from './Title'
import Count from './Count'
import Button from './Button'

function ParentComponent() {
    const [age, setAge] = useState(25) 
    const [salary, setSalary] = useState(5000)

    const IncreamentAge = useCallback(() =>{
        setAge(prevState => prevState + 1)
    }, [age]) 

    const IncreamentSalary = useCallback(() =>{
        setSalary(prevState => prevState + 1000)
    }, [salary])
  return (
    <div>
        <Title/>
        <Count text='Age' count={age} />
        <Button handleClick={IncreamentAge}>Increament Age</Button>
        <Count text='Salary' count={salary} />
        <Button handleClick={IncreamentSalary}>Increament Salary</Button>
    </div>
  )
}

export default ParentComponent