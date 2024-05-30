import { useEffect, useState } from "react";

function UseEffect() {

  const [counter,setCounter]=useState(2);
  

  useEffect(() => {
    alert("inside Useeffect");
  });

  return <div>
    <h2>Counter :{counter}</h2>
    <button onClick={()=> setCounter(counter+1)}>+</button>
  </div>
}

export default UseEffect;
