import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import UseState from "./25-05/UseState";
import NotFound from "./25-05/NotFound";
import UseState2 from "./26-05/UseState2";
import UseEffect from "./26-05/UseEffect1";
import UseEffect2 from "./26-05/UseEffect2";
import UseEffect3 from "./29-05/UseEffect3";
import Routing from "./30-05/Routing";
import UserDetails from "./30-05/UserDetails";
import Mapping from "./02-06/Mapping";
import AllProducts from "./02-06/AllProducts";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/use-state" element={<UseState />} />
        <Route path="/use-state2" element={<UseState2 />} />
        <Route path="/use-effect1" element={<UseEffect />} /> 
        <Route path="/use-effect2" element={<UseEffect2 />} />
        <Route path="/use-effect3" element={<UseEffect3 />}/>
        <Route path="/use-navigate" element={<Routing />}/>
        <Route path="/user/:username" element={<UserDetails />}/>
        <Route path="/mapping" element={<Mapping students={["Rahul","Raj","Ram"]} />}/>
        <Route path="/all-products" element={<AllProducts />}/>
      </Routes>
    </div>
  );
}

export default App;
