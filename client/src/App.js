import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./pages/register/Register"
function App() {
  return (
    <Router>
      <div className="App">
        <Register/>
      </div>
    </Router>
    
  );
}

export default App;
