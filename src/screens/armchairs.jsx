import React from "react";
import Navbar from '../components/navbar.jsx';
import Product from '../components/product.jsx'
import '../styles/Product.css';
import '../images.d.ts';
import Armchair from '../assets/armchair1.png'
import Armchair2 from '../assets/armchair2.png'
import Armchair3 from '../assets/armchair3.png'
import Armchair4 from '../assets/armchair4.png'




function armchairs(){
    

    return(
        <div className="w-100">
           <Navbar/>
           <p className="logo2">Evedem</p>
           <p className="armchairs-style">Armchairs</p>
           <div>
  <div className="row d-flex">
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>

    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair2}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair3}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair4}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair2}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 col-xl-3">
      <Product
        imageUrl={Armchair3}
        category="Chair"
        name="Comfort Armchair"
        material="Velvet"
        width={80}
        height={100}
        price={199}
        color="#aabbcc"
        status=" In stock"
      />
    </div>
  </div>
</div>

        </div>
    )
}

export default armchairs;
