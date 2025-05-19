import React, { useState } from 'react';
import '../styles/MyCart.css';
import Navbar from '../components/navbar';
import Picture from '../assets/armchair1.png';
import Payment from '../components/payment'; 

function MyCart() {
  const [showPayment, setShowPayment] = useState(false);

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Elegant Armchair',
      material: 'Velvet',
      height: '120',
      width: '80',
      price: 453,
      color: '#42635a',
      status: 'In stock',
      quantity: 1,
      image: Picture,
    },
    {
      id: 2,
      name: 'Comfy Armchair',
      material: 'Linen',
      height: '110',
      width: '75',
      price: 389,
      color: '#a0603a',
      status: 'In stock',
      quantity: 1,
      image: Picture,
    },
  ]);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const updateQuantity = (id, delta) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const deleteItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <div>
      <Navbar />
      
      <div className={`main1 ${showPayment ? 'blur-background' : ''}`}>
        <h4 className="txt">The total amount of the cart is ${totalAmount}</h4>
        <button className="confirm-btn" onClick={() => setShowPayment(true)}>Confirm Order</button>

        <div className="products">
          {cartItems.map((item) => (
            <div className="product1" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="txts">
                <p className="textprod" style={{ fontWeight: 'bold', fontSize: '18px' }}>{item.name}</p>
                <p className="textprod">Material: {item.material}</p>
                <p className="textprod">Dimensions: {item.width} x {item.height} cm</p>
                <p className="textprod">Price: ${item.price}</p>
                <p className="textprod">Status: {item.status}</p>
                <div className="textprod color-line">
                  <span>Color:</span>
                  <div className="color-dot" style={{ backgroundColor: item.color }}></div>
                </div>

                <div className="quantity-control">
                  <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  <button className="delete-btn" onClick={() => deleteItem(item.id)}>Delete</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showPayment && (
  <div className="payment-modal">
    <Payment onClose={() => setShowPayment(false)} />
  </div>
)}

    </div>
  );
}

export default MyCart;
