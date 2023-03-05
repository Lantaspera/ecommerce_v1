import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/header/Topnavbar';
import HomeScreen from './pages/HomeScreen';
import Mensproduct from './pages/Mensproduct';
import Card from './components/mensproduct/Card';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
        <NavBar/>
      <main>
        <Routes>
          <Route path='/' element={<HomeScreen/>}/>
          <Route path='/products' element={<Card/>}/>
        </Routes>
      </main>  
     </div> 
     </BrowserRouter>   
  );
}

export default App;
