import React, { useState } from "react";
import { Flag, ShoppingCart, MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Popup from "../components/popup.jsx";

export default function product({
  imageUrl,
  category,
  name,
  material,
  width,
  height,
  price,
  color,
  status,
}) {
  const [showComments, setShowComments] = useState(false);
  const [popup, setPopup] = useState({ message: "", type: "", visible: false });
    const navigate = useNavigate();
     const handleCheckout = () => {
    // Simuler une action réussie
    setPopup({
      message: "Order placed successfully!",
      type: "success",
      visible: true
    });
  };

  const handleConfirm = () => {
    setPopup({ ...popup, visible: false });
    navigate("/profile"); // Exemple : rediriger vers profile
  };

  return (
    <div className="product">
      <img src={imageUrl} className="img" alt={name} />
      <div className="parent">
        <p className="name mt-3">{name}</p>
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
        <p className="textprod">Status: {status}</p>
        <div className="flex justify-around mt-1 text-gray-200 btn-container icons">
          <button title="Flag" className="btn">
            <Flag className="w-4 h-4 hover:text-black icon" />
          </button>
          <button title="Cart" className="btn" onClick={handleCheckout} >
            <ShoppingCart className="w-4 h-4 hover:text-black transition-colors icon" />
          </button>
          {popup.visible && (
        <Popup
          message={popup.message}
          type={popup.type}
          onClose={() => setPopup({ ...popup, visible: false })}
          onConfirm={handleConfirm}
        />
      )}
          <button
            title="Comment"
            className="btn"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageCircle className="w-4 h-4 hover:text-black transition-colors icon" />
          </button>
        </div>
      </div>

      {showComments && (
        <div className="comment-panel">
          <div className="comment-header">
            <h3 className="comment-title">Comments</h3>
            <button className="close-button" onClick={() => setShowComments(false)}>✖</button>
          </div>

          <div className="comment-list">
            <div className="comment-item">
              <img className="comment-avatar" src="https://i.pravatar.cc/30?img=1" alt="user" />
              <div className="comment-bubble">
                <span className="comment-username">Alice</span>
                <p>Hello world hello world!</p>
              </div>
            </div>
            <div className="comment-item">
              <img className="comment-avatar" src="https://i.pravatar.cc/30?img=2" alt="user" />
              <div className="comment-bubble">
                <span className="comment-username">Bob</span>
                <p>Second comment here...</p>
              </div>
            </div>
          </div>

          <div className="comment-input-container">
            <input
              type="text"
              placeholder="Write a comment..."
              className="comment-input"
            />
            <button className="send-button">➤</button>
          </div>
        </div>
      )}
    </div>
  );
}
