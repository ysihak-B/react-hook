import React, { useState} from 'react'; 
import HookMouse from './HookMouse';


function MouseContainer() {

    const [disp,setdisp] = useState(true)

    return ( 
        <div>
            <button onClick={()=>setdisp(!disp)}>Toggle Display</button>
            {disp && <HookMouse/>}
        </div>
     );
}

export default MouseContainer;