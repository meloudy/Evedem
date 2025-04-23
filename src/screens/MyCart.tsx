import React from 'react';
import '../styles/MyCart.css';
import  Navbar from '../components/Navbar'
import Picture from '../assets/armchair1.png'


function MyCart(){
    const amount='3567'
    const name='Hello';
    const material ='Hello';
    const height='120';
    const width='120';
    const price= '453'
    const color= '#42635'
    const status= 'In stock'
    return (
        <div>
          <Navbar/>
          <div className='main1'>
            <h4 className='txt'>The total amount of the cart is {amount}$</h4>
            <button className='confirm-btn'>Confirm Order</button>
            <div className='products'>
                <div className='product'>
                   <img src={Picture}></img>
                   <div className='txts'>
                   {/* <p className="name mt-3">{name}</p>
        <p className="textprod">Material: {material}</p>
        <p className="textprod">Dimensions: {width} x {height} cm</p>
        <p className="textprod">Price: ${price}</p>
        <div className="d-flex flex-row align-items-center">
          <p className="textprod">Color:</p>
          <div
            className="w-10 h-10 rounded-full ml-2"
            style={{ backgroundColor: color || "white" }}
          />
          
        </div>
        <p className="textprod">Status: {status}</p> */}
        
                   </div>
                </div>
                <div className='product'>
                <img src={Picture}></img>
                </div>
            </div>
          </div>
          
        </div>
    )
}export default MyCart;
