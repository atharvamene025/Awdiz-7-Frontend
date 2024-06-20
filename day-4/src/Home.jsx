import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/aut.context";
import { CountContext } from "./context/counter.context";

function Home() {
  const router = useNavigate();
  // const {state}=useContext(AuthContext)
  const {state}=useContext(CountContext)
  return (
    <div>
      {/* <h1>Home Page-{state?.user?.name}</h1> */}
      <h1>Home Page-{state?.counter}</h1>
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
