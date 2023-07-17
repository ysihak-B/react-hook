import React, { useState } from 'react';

function HookCounterTwo() {
    const [name, setName] = useState({firstName:'',lastName:''})
    return ( 
        <div>
            <form>
                <div>
                    <lebel>First Name: </lebel>
                    {/* The spread operator is used to merge all of the attributes with new one 
                    and is necessary since the setName method can not merge it so that it has to be done manually */}
                    <input type="text" 
                        placeholder='first name' 
                        value={name.firstName} 
                        onChange={e => setName({...name, firstName: e.target.value})}>
                    </input>
                </div>
                <div>
                    <lebel>Last Name: </lebel>
                    <input type="text" 
                        placeholder='last name'
                        value={name.lastName}
                        onChange={e => setName({...name, lastName: e.target.value})}>
                    </input>
                </div>
                <div>
                    <h2>Your first name is - {name.firstName}</h2>
                    <h2>Your last name is - {name.lastName}</h2>
                </div>
                <div><h2>{JSON.stringify(name)}</h2></div>
            </form>
        </div>
     );
}

export default HookCounterTwo;