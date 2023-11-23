import React, { useEffect, useRef } from 'react' 
import useInput from '../Hook/useInput'

function UserForm() {
    const [firstName, bindFirstName, resetFirstName] = useInput('')
    const [lastName, bindLastName, resetLastName] = useInput('')

    const inputRef = useRef(null)
    const submitHandler = (e) => {
        e.preventDefault() // to prevent refreshing the page
        alert(`Hello ${firstName} ${lastName}`)
        resetFirstName()
        resetLastName()
    }

    useEffect(() =>{
        inputRef.current.focus()
    },[])

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div>
                <label>First Name:</label>
                <input 
                    type='text'
                    ref={inputRef}
                    {...bindFirstName}
                />
            </div>
            <div>
                <label>Last Name:</label>
                <input 
                    type='text'
                    {...bindLastName}
                />
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default UserForm