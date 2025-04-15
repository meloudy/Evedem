import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css';
import Home from "../src/screens/Home"
import Categories from "../src/screens/Categories"
import Navbar from './components/Navbar';
import Armchairs from'./screens/Armchairs'
import DressingTables from './screens/DressingTables'
import Profile from './screens/Profile';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

function App() {
  

  return (
    <div>
     
    <Home/>
    </div>
  );
}

export default App
