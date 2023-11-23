import React, {useReducer} from 'react'
import './App.css';
import HookCounter from './Components/HookCounter';
import HookCounterOne from './Components/HookCounterOne';
import HookCounterThree from './Components/HookCounterThree';
import HookCounterTwo from './Components/HookCouterTwo';
import MouseContainer from './Components/MouseContainer';
import IntervalHookCouter from './Components/IntervalHookCounter';
import DataFetching from './Components/DataFetching';
import ComponentC from './Components/ComponentC';
import HookReducer from './Components/HookReducer';
import HookReducer2 from './Components/HookReducer2';
import HookReducer3 from './Components/HookReducer3';
import ComponentD from './Components/ComponentD';
import ComponentE from './Components/ComponentE';
import ComponentF from './Components/ComponentF';
import DataFetching2 from './Components/DataFetching2';
import Counter1 from './Components/Counter1';
import Counter2 from './Components/Counter2';
import ParentComponent from './Components/ParentComponent';
import MemoHook from './Components/MemoHook';
import RefHook from './Components/RefHook';
import RefHook2 from './Components/RefHook2';
import DocTitleOne from './Components/DocTitleOne';
import DocTitleTwo from './Components/DocTitleTwo';
import UserForm from './Components/UserForm';


export const UserContext = React.createContext()
export const ChannelContext = React.createContext()

export const CountContext = React.createContext()
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

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <p>**************************useState hook**************************</p>
      {/* counting/changing values with useState hook */}
      <HookCounterOne/>
      {/* merging usestate variables */}
      <HookCounterTwo/>
      {/* merging and use useState hook with arrays and map */}
      <HookCounterThree/>
      <p>**************************useEffect hook**************************</p>
      {/* counter with useEffect hook to update the title with the given condition */}
      <HookCounter/>
      {/* <HookMouse/> */}
      {/* this code is to Unmount the HookMouse */}
      <MouseContainer/>
      {/* this code is to show incorrect independecy*/}
      <IntervalHookCouter />
      {/* this code is used to fetch data using useEffect and useState */}
      <DataFetching/>
      <p>**************************useContext hook**************************</p>
      {/* this code is used to show the use of context to pass down props through nested components with out passing down manually */}
      <UserContext.Provider value={'Ysihak'}>
        <ChannelContext.Provider value={'Code Evolution'} >
          <ComponentC/>
        </ChannelContext.Provider>
      </UserContext.Provider>
      <p>**************************useReducer hook**************************</p>
      {/* this code is used to show how to use useReducer Hook with simple state and action */}
      <HookReducer/>
      {/* this code is used to show how to use useReducer hook with complex state and action */}
      <HookReducer2/>
      {/* this code shows how to use the useReducer if we need two counters with the same state transition */}
      <HookReducer3/>
      <p>**************************useContext with useReducer**************************</p>
      {/* this code shows how to use useContext with useReducer for global state management */}
      <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
        <div>Count - {count}</div>
        <ComponentD/>
        <ComponentE/>
        <ComponentF/>
      </CountContext.Provider>
      {/* this code shows how to fetch data using useReducer and useEffect */}
      <DataFetching2/>
      <p>**************************useCallback Hook**************************</p>
      {/* every componenet is rerenderd when one of the child component is rerendered and causes performance issue */}
      <ParentComponent/>
      <p>**************************useMemo hook**************************</p>
      {/* this code shows how to use useMemo hook for performance optimization */}
      {/* useCallback caches the provided function intself whereas useMemo invokes the provided function and caches the result */}
      {/* when using useMemo the function that is to be invoked has to return some value */}
      <MemoHook/>
      <p>**************************useRef hook**************************</p>
      {/* this code shows how to use ref hook to access the dom nodes directly */}
      <RefHook/>
      <RefHook2/>
      {/* this code shows how to use useCallback to rerender only the component that has to be rerendered that inturn increase the performance */}
      <p>**************************Custom Hook**************************</p>
      {/* this code shows how to write a custom hook */}
      <DocTitleOne/>
      <DocTitleTwo/>
      <Counter1/>
      <Counter2/>
      <p>**************************Input Hook**************************</p>
      {/* this code shows how to use input hook */}
      <UserForm/>
    </div>
  );
}

export default App;
