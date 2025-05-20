import React, { useState, useEffect } from 'react';
import '../styles/MyCart.css';
import Navbar from '../components/navbar';
import { apihost } from '../api/call';
import Call from '../api/call';

function MyCart() {
    const [cartItems, setCartItems] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const storedCartItems = localStorage.getItem('cartItems');
        if (storedCartItems) {
            try {
                const parsedCartItems = JSON.parse(storedCartItems);
                setCartItems(parsedCartItems);
                let total = 0;
                parsedCartItems.forEach(item => {
                    total += parseFloat(item.price) * item.quantity;
                });
                setTotalAmount(total);
            } catch (e) {
                setError('Error parsing cart data.');
            } finally {
                setIsLoading(false);
            }
        } else {
            setIsLoading(false);
        }
    }, []);

    const handleConfirmOrder = async () => {
        if (cartItems.length === 0) {
            setError('Your cart is empty.');
            return;
        }

        const orderItems = cartItems.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
        }));

        const body = {
            orderItems: orderItems,
        };

        const [response, err] = await Call(
            '/v1/products/order',
            'POST',
            body,
            true,
            true
        );

        if (err) {
            setError(`Error confirming order: ${err}`);
            console.error('Order confirmation error:', err);
        } else if (response) {
            console.log('Order confirmed:', response);
            localStorage.removeItem('cartItems');
            setCartItems([]);
            setTotalAmount(0);
            alert('Order confirmed successfully!');
        }
    };

    if (isLoading) {
        return (
            <div>
                <Navbar />
                <div className="main1">
                    <p>Loading cart items...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div>
                <Navbar />
                <div className="main1">
                    <p className="error-message">Error: {error}</p>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="main1">
                <h4 className="txt">The total amount of the cart is ${totalAmount.toFixed(2)}</h4>
                <button className="confirm-btn" onClick={handleConfirmOrder}>Confirm Order</button>
                <div className="products">
                    {cartItems.map((item) => (
                        <div className="product" key={item.productId}>
                            <div className="txts">
                                <p className="name mt-3">{item.name}</p>
                                <p className="textprod">Material: {item.material}</p>
                                <p className="textprod">Dimensions: {item.width} x {item.height} cm</p>
                                <p className="textprod">Price: ${parseFloat(item.price).toFixed(2)}</p>
                                <div className="d-flex flex-row align-items-center">
                                    <p className="textprod">Color:</p>
                                    <div
                                        className="w-10 h-10 rounded-full ml-2"
                                        style={{ backgroundColor: item.color || "white" }}
                                    />
                                </div>
                                <p className="textprod">Status: {item.status}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default MyCart;
