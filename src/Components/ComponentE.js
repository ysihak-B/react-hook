import React, { useContext } from "react";
import { CountContext } from "../App";

function ComponentE() {
  const countContext = useContext(CountContext);
  return (
    <div>
      <div>ComponentE Count - {countContext.countState}</div>
      <button onClick={() => countContext.countDispatch("increament")}>
        Increament
      </button>
      <button onClick={() => countContext.countDispatch("decreament")}>
        Decreament
      </button>
      <button onClick={() => countContext.countDispatch("reset")}>Reset</button>
    </div>
  );
}

export default ComponentE;
