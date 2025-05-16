import React, { useState, useEffect } from 'react';
import '../styles/orderManagement.css';
import { MdShoppingCart, MdLocalShipping, MdCancel, MdKeyboardArrowDown } from 'react-icons/md';

function OrderManagement() {
  const [totalOrders, setTotalOrders] = useState(0);
  const [deliveredOrders, setDeliveredOrders] = useState(0);
  const [cancelledOrders, setCancelledOrders] = useState(0);
  const [orders, setOrders] = useState([]);
  const [expandedRows, setExpandedRows] = useState({});

  useEffect(() => {
    setOrders([
      {
        id: '028369A',
        customer: 'Elizabeth idk',
        total: 645,
        profit: 120,
        status: 'Shipping',
        products: [
          { sku: '3425', name: 'Savannah Armchair', price: 134, qty: 3, total: 426 }
        ]
      },
      {
        id: '028369B',
        customer: 'Elizabeth idk',
        total: 645,
        profit: 120,
        status: 'Cancelled',
        products: [
          { sku: '3425', name: 'Savannah Armchair', price: 134, qty: 3, total: 426 },
          { sku: '3426', name: 'Classic Chair', price: 134, qty: 3, total: 426 }
        ]
      },
      {
        id: '028370',
        customer: 'David Whatever',
        total: 350,
        profit: 75,
        status: 'Delivered',
        products: [
          { sku: '1234', name: 'Modern Table', price: 175, qty: 2, total: 350 }
        ]
      }
    ]);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setTotalOrders(280);
      setDeliveredOrders(180);
      setCancelledOrders(25);
    }, 500);
  }, []);

  const toggleStatus = (index) => {
    const newOrders = [...orders];
    if (newOrders[index].status === 'Shipping') {
      newOrders[index].status = 'Delivered';
    }
    setOrders(newOrders);
  };

  const toggleExpanded = (index) => {
    setExpandedRows((prev) => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div>
      <h4 className="orders-title">Orders</h4>

      <div className="summary-cards">
        <SummaryCard icon={<MdShoppingCart size={40} color="#6a948a" />} count={totalOrders} label="Orders today" />
        <SummaryCard icon={<MdLocalShipping size={40} color="#6a948a" />} count={deliveredOrders} label="Delivered orders" />
        <SummaryCard icon={<MdCancel size={40} color="#6a948a" />} count={cancelledOrders} label="Cancelled orders" />
      </div>

      <div className="orders-table-wrapper">
        <table className="orders-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Profit</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, idx) => (
              <React.Fragment key={order.id}>
                <tr>
                  <td>{idx + 1}</td>
                  <td>{order.id}</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>${order.profit}</td>
                  <td>
                    {order.status === 'Shipping' ? (
                      <button
                        onClick={() => toggleStatus(idx)}
                        className="status-btn status-shipping"
                      >
                        Shipping
                      </button>
                    ) : (
                      <span
                        className={`status-btn ${
                          order.status === 'Delivered'
                            ? 'status-delivered'
                            : 'status-cancelled'
                        }`}
                      >
                        {order.status}
                      </span>
                    )}
                  </td>
                  <td className="toggle-arrow">
                    <MdKeyboardArrowDown onClick={() => toggleExpanded(idx)} />
                  </td>
                </tr>

                {expandedRows[idx] &&
                  order.products.map((product, i) => (
                    <tr key={i} className="product-row">
                      <td></td>
                      <td colSpan={2}>SKU: {product.sku}</td>
                      <td>{product.name}</td>
                      <td>${product.price}</td>
                      <td>x{product.qty}</td>
                      <td>${product.total}</td>
                    </tr>
                  ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
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

export default OrderManagement;
