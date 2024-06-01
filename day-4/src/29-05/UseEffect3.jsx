import { useEffect, useState } from "react";

function UseEffect3() {
  const [counter, setCounter] = useState(1);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  function switchFlag() {
    setIsUserLoggedIn((prevstate) => !prevstate);
  }

  useEffect(() => alert("User Is Logged In"), [isUserLoggedIn]);

  return (
    <div>
      {isUserLoggedIn ? (
        <button onClick={switchFlag}>Welcome</button>
      ) : (
        <button onClick={switchFlag}>Please Login</button>
      )}

      {counter>10  ? <h1>Value Is Above 10</h1>: <h1>Value Is Below 10</h1>}
      <h1>Counter : {counter}</h1>

      <button onClick={() => setCounter(counter + 1)}>Increase</button>
      <button onClick={() => setCounter(counter - 1)}>Decrease</button>
    </div>
  );
}
export default UseEffect3;
