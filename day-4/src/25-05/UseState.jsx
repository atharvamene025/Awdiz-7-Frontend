import { useState } from "react";

function UseState() {
  const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(10);

  function increment() {
    // console.log("inside function")
    setCounter((prevValue) => prevValue + 1);
  }
  function decrement() {
    if (counter > 1) {
      setCounter((prevValue) => prevValue - 1);
    }
  }

  function reset() {
    setCounter(1);
  }

  function increment2() {
    if (counter > 10) {
      setCounter2((prevValue) => prevValue + 1);
    }
  }

  function decrement2() {
    if (counter > 10) {
      if (counter2 > 10) {
        setCounter2((prevValue) => prevValue - 1);
      }
    }
  }

  function reset2() {
    if (counter > 10) {
      setCounter2(10);
    }
  }
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <button onClick={reset}>Reset</button>

      <div>
        <h1>Counter 2: {counter2}</h1>
      </div>
      <button onClick={increment2}>+</button>
      <button onClick={decrement2}>-</button>
      <button onClick={reset2}>Reset</button>
    </div>
  );
}

export default UseState;
