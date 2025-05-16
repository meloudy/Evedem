import React, { useState, useEffect, useRef } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from 'recharts';

import { MdShoppingCart, MdPeople } from 'react-icons/md';

function Admindashboard() {
  const ordersData = [
    { name: 'Jan', orders: 780 },
    { name: 'Feb', orders: 660 },
    { name: 'Mar', orders: 800 },
    { name: 'Apr', orders: 220 },
    { name: 'May', orders: 770 },
    { name: 'Jun', orders: 900 },
    { name: 'Jul', orders: 600 },
    { name: 'Aug', orders: 520 },
    { name: 'Sep', orders: 300 },
    { name: 'Oct', orders: 470 },
    { name: 'Nov', orders: 700 },
    { name: 'Dec', orders: 610 },
  ];

  const revenueData = [
    { name: 'Jan', value: 120000 },
    { name: 'Feb', value: 85000 },
    { name: 'Mar', value: 130000 },
    { name: 'Apr', value: 30000 },
    { name: 'May', value: 100000 },
    { name: 'Jun', value: 150000 },
    { name: 'Jul', value: 95000 },
    { name: 'Aug', value: 82000 },
    { name: 'Sep', value: 40000 },
    { name: 'Oct', value: 75000 },
    { name: 'Nov', value: 110000 },
    { name: 'Dec', value: 98000 },
  ];

  const COLORS = ['#f94144', '#f9c74f', '#90be6d', '#577590', '#f3722c', '#f8961e', '#43aa8b', '#277da1', '#e76f51', '#e63946', '#ef476f', '#06d6a0'];

  const totalOrders = ordersData.reduce((sum, month) => sum + month.orders, 0);
  const totalUsers = 1280; 

  return (
    <div >
      <h4 className='statistics' style={{margin:'1rem'}} >Statistics</h4>

     
      <div style={{ display: 'flex', gap: '2rem', marginBottom: '2rem' , }}>
        <div style={{
          flex: 1,
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <MdShoppingCart size={40} color="#6a948a" />
          <div>
            <h3 style={{ margin: 0 , color:'#7d6d6d'}}>{totalOrders}</h3>
            <p style={{ margin: 0, color: '#7d6d6d' }}>Total Orders</p>
          </div>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: '#f8f8f8',
          borderRadius: '12px',
          padding: '1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}>
          <MdPeople size={40} color="#6a948a" />
          <div>
            <h3 style={{ margin: 0 , color:'#7d6d6d'}}>{totalUsers}</h3>
            <p style={{ margin: 0, color: '#7d6d6d' }}>Total Users</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="statistics" style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem' }}>
        {/* Orders Chart */}
        <div style={{ flex: 1, height: 400, backgroundColor: '#f8f8f8', borderRadius: '20px', padding: '1rem' }}>
          <h3 style={{ marginLeft: '10px', color: '#7d6d6d' }}>Orders per Month</h3>
          <ResponsiveContainer width="100%" height="85%">
            <BarChart data={ordersData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="orders" fill="#d66a6a" radius={[20, 20, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Revenue Chart */}
        <div style={{ flex: 1, height: 400, backgroundColor: '#f8f8f8', borderRadius: '20px', padding: '1rem' }}>
          <h3 style={{ marginLeft: '10px', color: '#7d6d6d' }}>Revenue per Month</h3>
          <ResponsiveContainer width="100%" height="95%">
            <PieChart>
              <Pie
                data={revenueData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={110}
                label
              >
                {revenueData.map((_, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default Admindashboard;
