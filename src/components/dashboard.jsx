import React from 'react';
import '../styles/dashboard.css';
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

const products = [
  { name: 'Savannah Armchair', sales: 80, revenue: '327,890.00DA', status: 'In stock' },
  { name: 'Aero Armchair', sales: 12, revenue: '23,120.00DA', status: 'Out of stock' },
  { name: 'Zenith Armchair', sales: 3, revenue: '30,000.00DA', status: 'In stock' },
  { name: 'Aeris Dressing Table', sales: 9, revenue: '129,380.00DA', status: 'Out of stock' },
  { name: 'Serena Dressing Table', sales: 10, revenue: '327,890.00DA', status: 'In stock' },
  { name: 'Luxury Bed', sales: 6, revenue: '500,000.00DA', status: 'In stock' },
  { name: 'Oak Wood Table', sales: 4, revenue: '85,000.00DA', status: 'Out of stock' },
];

function dashboard() {
  return (
    <div style={{ padding: '1rem' }}>
      <h4 className='statistics'>Statistics</h4>
      <div className="statistics" style={{ display: 'flex', justifyContent: 'space-between', gap: '2rem', marginBottom: '3rem' }}>
        {/* chart */}
        <div style={{ flex: 1, height: 400, backgroundColor: '#f8f8f8', borderRadius: '20px', padding: '1rem' }}>
          <h3 style={{ marginLeft: '10px', color: '#7d6d6d' }}>9831 orders</h3>
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

        {/* pie chart */}
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

      {/* Products Table */}
      <div className="products" style={{ backgroundColor: '#fff', borderRadius: '20px', padding: '2rem', boxShadow: '0 0 10px rgba(0,0,0,0.05)' }}>
        <h3 style={{ marginBottom: '1rem' }}>All Products</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid #eee', textAlign: 'left' }}>
              <th>Product</th>
              <th>Sales</th>
              <th>Revenue</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid #eee', height: '50px' }}>
                <td>{item.name}</td>
                <td>{item.sales}</td>
                <td>{item.revenue}</td>
                <td style={{ color: item.status === 'In stock' ? 'green' : 'red' }}>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default dashboard;
