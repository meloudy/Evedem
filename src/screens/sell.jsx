import React, { useState } from 'react';
import ProductCard from '../components/product';
import '../styles/sellProduct.css';
import NavBar from '../components/navbar'

export default function SellProduct() {
  const [formData, setFormData] = useState({
    imageUrl: '',
    category: '',
    name: '',
    material: '',
    width: '',
    height: '',
    price: '',
    color: '#ffffff',
    quantity: 1
  });

  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === 'quantity' || name === 'price' || name === 'width' || name === 'height'
        ? parseInt(value) || ''
        : value
    }));
  };

  const handleCancel = () => {
    setFormData({
      imageUrl: '',
      category: '',
      name: '',
      material: '',
      width: '',
      height: '',
      price: '',
      color: '#ffffff',
      quantity: 1
    });
    setPreview(false);
  };

  return (
    <div>
        <NavBar></NavBar>
    <div className="sell-container">
        
      <h3 className="sell-title">Sell a New Product</h3>

      <div className="sell-form">
        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={formData.imageUrl}
          onChange={handleChange}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={formData.category}
          onChange={handleChange}
        />
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="material"
          placeholder="Material"
          value={formData.material}
          onChange={handleChange}
        />

        <div className="dimension-fields">
          <input
            type="number"
            name="width"
            placeholder="Width (cm)"
            value={formData.width}
            onChange={handleChange}
          />
          <input
            type="number"
            name="height"
            placeholder="Height (cm)"
            value={formData.height}
            onChange={handleChange}
          />
        </div>

        <input
          type="number"
          name="price"
          placeholder="Price $"
          value={formData.price}
          onChange={handleChange}
        />

        <label className="color-label">
          Color:
          <input
            type="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
        </label>

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={handleChange}
          min="1"
        />

       
          <button className="post-btn">Post</button>
         
      </div>

      </div>
    </div>
  );
}
