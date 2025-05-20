import './App.css';
import Home from "./screens/home";
import Categories from "./screens/categories";
import Category from "./screens/category"
import Profile from './screens/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyCart from './screens/mycart';
import Login from './screens/login';
import Sell from './screens/sell';
import ManageAccount from './screens/manageaccount'




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:catId" element={<Category />} />
        <Route path="/sell" element={<Sell />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/mycart" element={<MyCart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>

  );
}

export default App;
