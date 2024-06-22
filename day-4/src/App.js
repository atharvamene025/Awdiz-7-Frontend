import "./App.css";
import { Routes, Route, Form } from "react-router-dom";
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
import FunctionProp from "./04-06/FunctionProp";
import StyledComponents from "./04-06/StyledComponents";
import InlineStyling from "./04-06/InlineStyling";
import TodoList from "./06-06/TodoList";
import Register from "./08-06/Register";
import Login from "./08-06/Login";
import Reducer from "./15-06/Reducer";
import CounterContext from "./15-06/CounterContext";
import TodolistPractice from "./06-06/TodolistPractice";

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
        <Route path="/use-effect3" element={<UseEffect3 />} />
        <Route path="/use-navigate" element={<Routing />} />
        <Route path="/user/:username" element={<UserDetails />} />
        <Route
          path="/mapping"
          element={<Mapping students={["Rahul", "Raj", "Ram"]} />}
        />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/function-prop" element={<FunctionProp />} />
        <Route path="/styled-components" element={<StyledComponents />} />
        <Route path="/inline-styling" element={<InlineStyling />} />
        <Route path="/todo-list" element={<TodoList />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/reducer" element={<Reducer />} />
        <Route path="/counter" element={<CounterContext />} />
        <Route path="/todo-practice" element={<TodolistPractice />} />
      </Routes>
    </div>
  );
}

export default App;
