import React, { useReducer } from "react";
import "./ReducerCounter.css";

function reducer(state, action) {
  console.log(state, action);
  switch (action.type) {
    case "INCREMENT":
      return { ...state, counter: state.counter + 1 };
    case "DECREMENT":
      return { ...state, counter: state.counter - 1 };
    case "RESET":
      return { ...state, counter: 0 };
    default:
      return state;
  }
}

const initialState = { counter: 0 };
const Reducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  function INCREMENT() {
    dispatch({ type: "INCREMENT" });
  }
  function DECREMENT() {
    dispatch({ type: "DECREMENT" });
  }
  function RESET() {
    dispatch({ type: "RESET" });
  }

  return (
    <div className="counter-container">
        <h1>Counter with Reducer Hook</h1>
      <h1>Counter: {state.counter}</h1>
      <br />
      <button className="button" onClick={INCREMENT}>+</button>
      <button className="button" onClick={DECREMENT}>-</button>
      <button className="reset" onClick={RESET}>Reset</button>
    </div>
  );
};

export default Reducer;
