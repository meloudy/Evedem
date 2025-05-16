import React, { useState, useEffect } from 'react';
import '../styles/productmanagement.css';
import { MdInventory, MdDelete } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';

function ProductManagement() {
  const [totalProducts, setTotalProducts] = useState(0);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setProducts([
      {
        id: '1',
        name: 'Modern Sofa',
        category: 'Armchairs',
        price: '$499',
        status: 'Available',
      
      },
      {
        id: '2',
        name: 'Wooden Table',
        category: 'Tables',
        price: '$299',
        status: 'Out of Stock',
       
        
      }
    ]);
    setTotalProducts(2);
  }, []);

  

  const toggleProductStatus = (productId) => {
    const updatedProducts = products.map((product) => {
      if (product.id === productId) {
        const newStatus = product.status === 'Available' ? 'Out of Stock' : 'Available';
        return { ...product, status: newStatus };
      }
      return product;
    });

    setProducts(updatedProducts);
    setSelectedProduct(updatedProducts.find(p => p.id === productId));
  };

  return (
    <div>
      <h4 className="product-title">Products</h4>
      <div className="product-summary-cards">
        <SummaryCard icon={<MdInventory size={40} color="#6a948a" />} count={totalProducts} label="Total products" />
      </div>

      <table className="product-table">
        <thead>
          <tr className="headers">
            <th>#</th>
            <th>Product</th>
            <th>Category</th>
            <th>Status</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, idx) => (
            <tr key={product.id}>
              <td>{idx + 1}</td>
              <td>{product.name}</td>
              <td>{product.category}</td>
              <td>
                {product.status === 'Available' ? (
                  <span className="status-available">Available</span>
                ) : (
                  <span className="status-out">Out</span>
                )}
              </td>
              <td>{product.price}</td>
              <td><MdDelete style={{color:'#999'}}></MdDelete></td>
            </tr>
          ))}
        </tbody>
      </table>

     
    </div>
  );
}


const SummaryCard = ({ icon, count, label }) => (
  <div className="summary-card">
    {icon}
    <div>
      <h3>{count}</h3>
      <p>{label}</p>
    </div>
  </div>
);

export default ProductManagement;
