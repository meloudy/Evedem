import './App.css';
import Home from "./screens/home";
import Categories from "./screens/categories";
import Beds from './screens/beds';
import Tables from './screens/tables';
import Armchairs from './screens/armchairs';
import DressingTables from './screens/dressingtables';
import Profile from './screens/profile';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MyCart from './screens/mycart';
import Login from './screens/login';





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
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
    
  );
}

export default App;
