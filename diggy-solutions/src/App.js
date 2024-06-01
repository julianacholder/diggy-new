import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <>
      < BrowserRouter>
      <Home />
      
      </ BrowserRouter>
    </>
  );
}

export default App;




