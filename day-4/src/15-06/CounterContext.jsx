import { useContext, useState } from "react";
import { CountContext } from "../context/counter.context";
import { useNavigate } from "react-router-dom";

function CounterContext() {
  const [counter, setCounter] = useState(0);
  const { state, dispatch } = useContext(CountContext);
  const router=useNavigate();
  function increment() {
    // console.log("inside function")
    dispatch({type: "INCREMENT"})
    setCounter((prevValue) => prevValue + 1);
    router ("/");
  }



 
  
  return (
    <div>
      <h1>Counter : {counter}</h1>
      <button onClick={increment}>+</button>
      

      
    </div>
  );
}

export default CounterContext;
