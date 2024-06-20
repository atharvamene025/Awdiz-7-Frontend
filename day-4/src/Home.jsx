import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/aut.context";
import { CountContext } from "./context/counter.context";

import { themeContext } from "./context/theme.context";

function Home() {
  const router = useNavigate();
  // const {state}=useContext(AuthContext)
  const { state } = useContext(CountContext);
  const { themestate, dispatch } = useContext(themeContext);
  console.log(themestate);
  return (
    <div
      style={{
        height: "200px",
        width: "300px",
        background: themestate.theme === "light" ? "lightblue" : "black",
        color: themestate.theme === "light" ? "black" : "white",
      }}
    >
      {/* <h1>Home Page-{state?.user?.name}</h1> */}
      <h1>Home Page-{state?.counter}</h1>
      <button
        onClick={() =>
          dispatch({ type: themestate?.theme === "light" ? "DARK" : "LIGHT" })
        }
      >
        Change {themestate?.theme === "light" ? "light" : "dark"} Theme
      </button>
      <br />
      <button onClick={() => router("/use-navigate")}>
        Redirect To Routing Page{" "}
      </button>
      <button onClick={() => router("/all-products")}>
        Redirect To Products Page{" "}
      </button>
    </div>
  );
}

export default Home;
