import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Carousel from "./Components/Carousel";
import { testcard } from "./Components/Data";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Use Routes
import Home from './Components/Home';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes> {/* Use Routes */}
          <Route path='/'  /> {/* Use 'element' prop */}
         
        </Routes>
        <Home/>
      </Router>
    </>
  );
}

export default App;
