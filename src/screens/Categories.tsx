import React from "react";
import Navbar from '../components/Navbar.tsx';
import '../styles/Categories.css';
import '../images.d.ts'
import Armchair from '../assets/armchair.png';
import DressingTable from '../assets/drsngtbl.png';
import Table from '../assets/table.png'
import Bed from '../assets/bed.png'

function Categories(){
    return(<div>
        <Navbar/>
        <div className='position-relative d-flex flex-row' >
            <div className='d-flex flex-column position-absolute'>
            <p className='armchair'>Armchairs</p>
            <div className='card d-flex flex-row'>
              <img className='img'src={Armchair}></img>
              <div className="texts d-flex flex-column">
                <p className='evedem'>Evedem</p>
                <p className='sub'>Armchairs</p>
                 <p className="description">Upgrade your comfort zone ! 
                                            Shop our incredible selection of 
                                            armchairs and discover relaxation redefined</p>
                <button className="btn">Discover Now</button>
              </div>
              
              
            </div>
            </div>

            <div className='right-catg d-flex flex-column position-absolute'>
            <p className='armchair'>Dressing tables</p>
            <div className='card1 d-flex flex-row'>
              <img className='img'src={DressingTable}></img>
              <div className="texts d-flex flex-column">
                <p className='evedem'>Evedem</p>
                <p className='sub'>Dressing tables</p>
                 <p className="description">Create your dream vanity without the high cost
                    . Shop now and upgrade your mornings!</p>
                <button className="btn">Discover Now</button>
              </div>
              
              
            </div>
            </div>
       
        </div>
        <div className='position-relative d-flex flex-row bottom-row' >
            <div className='d-flex flex-column position-absolute'>
            <p className='armchair'>Tables</p>
            <div className='card1 d-flex flex-row'>
              <img className='img'src={Table}></img>
              <div className="texts d-flex flex-column">
                <p className='evedem'>Evedem</p>
                <p className='sub'>Tables</p>
                 <p className="description">Find your perfect table!
                    Explore our wide selection of dining tables, 
                    coffee tables, and more. Shop now!</p>
                <button className="btn">Discover Now</button>
              </div>
              
              
            </div>
            </div>

            <div className='right-catg d-flex flex-column position-absolute'>
            <p className='armchair'>Beds</p>
            <div className='card3 d-flex flex-row'>
              <img className='img'src={Bed}></img>
              <div className="texts d-flex flex-column">
                <p className='evedem'>Evedem</p>
                <p className='sub'>Beds</p>
                 <p className="description">Invest in your sleep! Our high-quality beds and 
                    mattresses ensure a restful night with luxury and support</p>
                <button className="btn">Discover Now</button>
              </div>
              
              
            </div>
            </div>
       
        </div>


        </div>
        
    )
}

export default Categories;