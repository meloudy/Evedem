import React, { useState } from 'react';
import '../styles/payment.css';
import { CreditCard, Loader2 } from 'lucide-react';

export default function Payment({ onClose }) {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiry: '',
    cvc: '',
    name: '',
  });

  const [loading, setLoading] = useState(false);
  const [paid, setPaid] = useState(false);
  const [totalAmount, setTotalAmount] = useState(249.99); // Exemple

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setPaid(true);

      setTimeout(() => {
        onClose(); 
      }, 1000);
    }, 2000);
  };

  return (
    <div className="payment-container">
      <h3 className="payment-title">Payment Information</h3>

      <div className="payment-form">
        <label>Cardholder Name</label>
        <input
          type="text"
          name="name"
          placeholder="John Doe"
          value={formData.name}
          onChange={handleChange}
        />

        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          placeholder="1234 5678 9012 3456"
          maxLength={19}
          value={formData.cardNumber}
          onChange={handleChange}
        />

        <div className="card-details">
          <div>
            <label>Expiry Date</label>
            <input
              type="text"
              name="expiry"
              placeholder="MM/YY"
              maxLength={5}
              value={formData.expiry}
              onChange={handleChange}
            />
          </div>

          <div>
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              placeholder="123"
              maxLength={4}
              value={formData.cvc}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="payment-summary">
          <p>Total to Pay:</p>
          <span>${totalAmount.toFixed(2)}</span>
        </div>

        <button className="pay-btn" onClick={handlePayment} disabled={loading || paid}>
          {loading ? (
            <Loader2 className="animate-spin" />
          ) : paid ? (
            'Payment Successful'
          ) : (
            <>
              <CreditCard className="icon" /> Pay Now
            </>
          )}
        </button>
      </div>
    </div>
  );
}
