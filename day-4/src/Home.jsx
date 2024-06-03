import { useNavigate } from "react-router-dom";

function Home() {

    const router=useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={()=> router("/use-navigate")}>Redirect To Routing Page </button>
      <button onClick={()=> router("/use-effect3")}>Redirect To Use Effect </button>
    </div>
  );
}

export default Home;
