import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from "./pages/register/Register"
import Signup from './pages/Signup';
function App() {
  return (
    <Router>
      <div className="App">
        <Signup/>
      </div>
    </Router>
    
  );
}

export default App;
