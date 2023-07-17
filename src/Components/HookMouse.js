import React, { useState, useEffect } from 'react';

function HookMouse() {
    const [initMousePos, setMousePos] = useState({x:0, y:0})

    const logMousePosition = (e) =>{
        console.log('Mouse event')
        setMousePos({x:e.clientX,y:e.clientY})
    }

    useEffect(()=>{
        console.log('the mouse changes position')
        window.addEventListener('mousemove', logMousePosition)

        return ()=>{
            console.log('component unmount code')
            window.removeEventListener('mousemove', logMousePosition)
        }
    },[])
    return ( 
        <div>
            X-{initMousePos.x} Y-{initMousePos.y}
        </div>
     );
}

export default HookMouse;