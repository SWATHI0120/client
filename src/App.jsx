import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProductList from './components/ProductList';
import Header from './components/Header';
import CartPage from './components/CartPage';
import './App.css';
import CustomItemContext from './context/ItemContext';
import CustomerDetails from './components/CustomerDetails';
import Order from './components/Order'; // Import the Order component
import PaymentSuccess from './components/PaymentSuccess';


const App = () => {
  return (
    <CustomItemContext>
      <Router>
        <Routes>
        
          <Route path="/" element={<><Header /><ProductList /></>} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/customer-details" element={<CustomerDetails />} />

          <Route path="/order" element={<Order />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

        </Routes>
      </Router>
    </CustomItemContext>
  );
};

export default App;
