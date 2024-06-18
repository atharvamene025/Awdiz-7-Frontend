import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./context/aut.context";

function Home() {
  const router = useNavigate();
  const {state}=useContext(AuthContext)
  return (
    <div>
      <h1>Home Page-{state?.user?.name}</h1>
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
