import React from "react";
import Header from "../components/Header";
import NewArrivals from "../components/NewArrivals";
import '../styles/Header.css';

 

function Home(){
    return <div className='home'>
    
      <Header></Header>
      <NewArrivals></NewArrivals>
     
    </div>

}
export default Home;