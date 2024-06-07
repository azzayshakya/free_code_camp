
import './App.css';
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  return (

    <Router>
    <div>
      <Routes>

        <Route exact path ="/" element={<Home/>}/>
        <Route exact path ="/Login" element={<Login/>}/>
        <Route exact path ="/SignUp" element={<SignUp/>}/>
       

        
      </Routes>
    </div>
    </Router>

  );
}

export default App;
