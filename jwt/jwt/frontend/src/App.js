// App.js

import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './Screens/Home';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';
import About from './Screens/About';
import { refreshAuthToken } from './authUtils';

function App() {
  useEffect(() => {
    // Trigger token refresh when the app component mounts
    refreshAuthToken();
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/SignUp" element={<SignUp />} />
          <Route exact path="/About" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
