import React from 'react';
import { Link, Outlet, Route, Routes, useNavigate } from 'react-router-dom';
import Transaction from './Transaction';
import SalesForm from './SalesForm';
import ProductList from './ProductList';
import ProductForm from './productForm';

function Dashboard() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate('/swift'); // Navigate to the "/swift" route
  };

  return (
    <div>
      <nav className="bg-green-500 p-4 text-black text-lg font-bold">
  <ul className="container mx-auto flex flex-wrap justify-between">
    <li className="my-2">
      <button onClick={goBack} className="text-blue-500 hover:underline focus:outline-none">
        HOME
      </button>
    </li>
    <li className="my-2">
      <Link to="/dashboard/productlist">PRODUCT LIST</Link>
    </li>
    <li className="my-2">
      <Link to="/dashboard/productform">PRODUCT FORM</Link>
    </li>
    <li className="my-2">
      <Link to="/dashboard/sales">SALESFORM</Link>
    </li>
    <li className="my-2">
      <Link to="/dashboard/transactions">TRANSACTIONS</Link>
    </li>
  </ul>
</nav>

      <div>
        <Routes>
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/productform" element={<ProductForm />} />
          <Route path="/sales" element={<SalesForm />} />
          <Route path="/transactions" element={<Transaction />} />
        </Routes>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
