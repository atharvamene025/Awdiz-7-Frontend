import { useNavigate } from "react-router-dom";

function Home() {
  const router = useNavigate();
  return (
    <div>
      <h1>Home Page</h1>
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
