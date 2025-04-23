import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from "./screens/Home";
import Categories from "./screens/Categories";
import Beds from './screens/Beds';
import Tables from './screens/Tables';
import Armchairs from './screens/Armchairs';
import DressingTables from './screens/DressingTables';
import Profile from './screens/Profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sell from './screens/Sell';
import MyCart from './screens/MyCart';





function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/beds" element={<Beds />} />
        <Route path="/tables" element={<Tables />} />
        <Route path="/armchairs" element={<Armchairs />} />
        <Route path="/dressing-tables" element={<DressingTables />} />
        <Route path="/profile" element={<Profile />} />
       <Route path="/mycart" element={<MyCart />} />
      </Routes>
    </Router>
    
  );
}

export default App;
