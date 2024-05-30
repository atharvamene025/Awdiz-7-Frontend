import { useState } from "react";

function UseState2() {
  const [counter, setCounter] = useState(1);

function increment(){
    setCounter(counter+1);
}


function decremnet(){
    setCounter(counter-1);
}

  return (
    <div>
      <h1>Use State 2</h1>
      <h1>Counter :{counter} </h1>
      <button onClick={increment}>+</button>
      <button onClick={decremnet}>-</button>
    </div>
  );
}

export default UseState2;
