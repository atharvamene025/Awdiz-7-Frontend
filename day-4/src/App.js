import logo from './logo.svg';
import './App.css';
import {Routes,Route} from 'react-router-dom'
import Home from './Home';
import UseState from './25-05/UseState';
import NotFound from './25-05/NotFound';
import UseState2 from './26-05/UseState2';
import UseEffect from './26-05/UseEffect1';
 
function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='*' element={<NotFound />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/use-state' element={<UseState />}/>
        <Route path='/use-state2' element={<UseState2/>}/>
        <Route path='/use-effect' element={<UseEffect/>}/>
        
        
      </Routes>
    </div>
  );
} 

export default App;
