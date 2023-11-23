import React, { useReducer } from "react";

const initialState = {
  firstCounter: 0,
  secondCounter: 10,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "increament":
      return { ...state, firstCounter: state.firstCounter + action.value };
    case "decreament":
      return { ...state, firstCounter: state.firstCounter - action.value };
    case "increament2":
      return { ...state, secondCounter: state.secondCounter + action.value };
    case "decreament2":
      return { ...state, secondCounter: state.secondCounter - action.value };
    case "reset1":
      return { ...state, firstCounter: initialState.firstCounter };
    case "reset2":
      return { ...state, secondCounter: initialState.secondCounter };
    default:
      return state;
  }
};

function HookReducer2() {
  const [count, dispatch] = useReducer(reducer, initialState);
  return (
    <div>
      <div>Count - {count.firstCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increament", value: 1 })}>
          Increament
        </button>
        <button onClick={() => dispatch({ type: "increament", value: 5 })}>
          Increament 5
        </button>
        <button onClick={() => dispatch({ type: "decreament", value: 1 })}>
          Decreament
        </button>
        <button onClick={() => dispatch({ type: "decreament", value: 5 })}>
          Decreament 5
        </button>
        <button onClick={() => dispatch({ type: "reset1" })}>Reset</button>
      </div>
      <div>Count - {count.secondCounter}</div>
      <div>
        <button onClick={() => dispatch({ type: "increament2", value: 1 })}>
          Increament
        </button>
        <button onClick={() => dispatch({ type: "decreament2", value: 1 })}>
          Decreament
        </button>
        <button onClick={() => dispatch({ type: "reset2" })}>Reset</button>
      </div>
    </div>
  );
}

export default HookReducer2;
