import React from "react";
import Navbar from '../components/navbar.jsx';
import Product from '../components/product.jsx'
import '../styles/Product.css';
import '../images.d.ts';
import DTable from '../assets/dtable1.png';
import DTable1 from '../assets/dtable2.png';


 

function dressingtables(){
    

    return(
        <div>
           <Navbar/>
           <p className="logo2">Evedem</p>
           <p className="armchairs-style">Dressing Tables</p>
           <div>
  <div className="row  d-flex ">
  <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
  <Product
    imageUrl={DTable}
    category="Dressing Table"
    name="Savannah Dressing Table"
    material="Velvet"
    width={80}
    height={100}
    price={199}
    color="#aabbcc"
    status ="In stock"
  />
</div>

<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
  <Product
    imageUrl={DTable1}
    category="Dressing Table"
    name="Aurore Dressing Table"
    material="Velvet"
    width={80}
    height={100}
    price={199}
    color="#aabbcc"
    status ="In stock"
  />
</div>

<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
  <Product
    imageUrl={DTable}
    category="Dressing Table"
    name="Elise Dressing Table"
    material="Velvet"
    width={80}
    height={100}
    price={199}
    color="#aabbcc"
    status ="In stock"
  />
</div>

<div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
  <Product
    imageUrl={DTable1}
    category="Dressing Table"
    name="Florence Dressing Table"
    material="Velvet"
    width={80}
    height={100}
    price={199}
    color="#aabbcc"
    status ="In stock"
  />
</div>


 </div>
 </div>

        </div>
    )
}

export default dressingtables;