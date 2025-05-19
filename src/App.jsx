import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Home from "./screens/home";
import Categories from "./screens/Categories";
import Beds from './screens/beds';
import Tables from './screens/tables';
import Armchairs from './screens/armchairs';
import DressingTables from './screens/DressingTables';
import Profile from './screens/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sell from './screens/sell';
import MyCart from './screens/mycart';
import Admin from './screens/admin';
import ManageAccount from './screens/manageaccount'
import SellProduct from './screens/sell';
import Payment from './components/payment'





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
       <Route path="/manage-account" element={<ManageAccount />} />
       <Route path="/sell" element={<SellProduct/>}/>
       <Route path='/payment' element={<Payment/>}/>

      </Routes>
    </Router>
  //  <div>
  //   <Admin></Admin>
  //  </div>

    
  );
}

export default App;
