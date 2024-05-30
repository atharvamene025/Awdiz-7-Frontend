import { useEffect, useState } from "react";

function UseEffect2() {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    alert("Hiee");
  }, []);

  return (
    <div>
      <h1>Use effect 2</h1>
      <h1>Counter:{counter}</h1>
      <button onClick={() => setCounter(counter + 1)}>+</button>
      <button onClick={() => setCounter(1)}>Reset</button>
    </div>
  );
}

export default UseEffect2;
