// function FunctionProp() {
//   function HandleClick() {
//     console.log("Clicked.");
//   }

import { useState } from "react";

//   return (
//     <div>
//       <h1>Function prop</h1>
//       <ChildrenComponent buttonValue="Click Me" HandleClick={HandleClick} />
//     </div>
//   );
// }

// function ChildrenComponent({buttonValue, HandleClick}) {
//   return <button onClick={HandleClick}>{buttonValue}</button>;
// }

// export default FunctionProp;

function FunctionProp() {
  const [counter, setCounter] = useState(1);

  function Increment(){

    setCounter(counter+1);
  }

  return (
    <div>
      <h1>Counter={counter}</h1>
      <ChildComponent Increment={Increment} />
    </div> 
  );

 
}

function ChildComponent({Increment}) {
    return <button onClick={Increment}>+</button>;
  }

export default FunctionProp;
