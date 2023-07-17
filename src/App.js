import React from 'react'
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterOne from './Components/HookCounterOne';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCouterTwo';
// import HookMouse from './Components/HookMouse';
import MouseContainer from './Components/MouseContainer';

function App() {
  return (
    <div className="App">
      {/* counting/changing values with useState hook */}
      <HookCounterOne/>
      {/* merging usestate variables */}
      <HookCounterTwo/>
      {/* merging and use useState hook with arrays and map */}
      <HookCounterThree/>
      <p>**************************useState hook**************************</p>
      {/* counter with useEffect hook to update the title with the given condition */}
      <HookCounter/>
      {/* <HookMouse/> */}
      {/* this code is to Unmount the HookMouse */}
      <MouseContainer/>
    </div>
  );
}

export default App;
