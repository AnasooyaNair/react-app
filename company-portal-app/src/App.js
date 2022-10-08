import './App.css';
import React from "react";
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Services from './components/Services';
import Partners from './components/Partners';
import Aboutus from './components/Aboutus';

function App() {
  return (
  <Routes>
    <Route path="/home" element={<Home />}></Route>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/services" element={<Services/>}></Route>
    <Route path="/partners" element={<Partners/>}></Route>
    <Route path="/aboutus" element={<Aboutus/>}></Route>
  </Routes>
  );
}
export default App;
