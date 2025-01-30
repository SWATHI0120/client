import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Order.css'; 

const Order = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Destructure customer details, cart items, and total price from location.state
  const { name, gender, phone, email, address, totalPrice, cartItems } = location.state || {};

  
  const [orderSuccess, setOrderSuccess] = useState(false);

  const handlePaymentClick = async () => {
    try {
     
      setOrderSuccess(true);  

     
      const orderData = {
        name,
        gender,
        phone,
        email,
        address,
        cartItems,
        totalPrice,
      };

      // Send order details to the backend 
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      const data = await response.json();

      if (response.ok) {
       
        setTimeout(() => {
          navigate('/payment-success', {
            state: {
              name,
              gender,
              phone,
              email,
              address,
              totalPrice,
              cartItems,
            },
          });
        }, 500);  
      } else {
        console.error('Order creation failed:', data);
        setOrderSuccess(false); 
      }
    } catch (error) {
      console.error('Error during payment processing:', error);
      setOrderSuccess(false); 
    }
  };

  return (
    <div className="order-container-unique">
      <h1 className="order-header-unique">Order Summary</h1>

      <div className="customer-details-unique">
        <h2 className="customer-header-unique">Customer Details</h2>
        <p className="customer-info-unique">Name: {name}</p>
        <p className="customer-info-unique">Gender: {gender}</p>
        <p className="customer-info-unique">Phone: {phone}</p>
        <p className="customer-info-unique">Email: {email}</p>
        <p className="customer-info-unique">Address: {address}</p>
      </div>

      <div className="product-details-unique">
        <h2 className="product-header-unique">Order Details</h2>
        <ul className="product-list-unique">
          {cartItems && cartItems.length > 0 ? (
            cartItems.map((item, index) => (
              <li key={index} className="product-item-unique">
                <p className="product-info-unique">{item.name} - {item.price} Rs</p>
              </li>
            ))
          ) : (
            <p>No items in your order.</p>
          )}
        </ul>
      </div>

      
      <div className="total-price-unique">
        <h3 className="total-price-header-unique">Total Price: {totalPrice} Rs</h3>
      </div>

      <button className="pay-now-btn-unique" onClick={handlePaymentClick}>
        Pay Now
      </button>

      {orderSuccess && (
        <div className="order-success-box">
          <h2>Order Successful!</h2>
          <p>Your order has been successfully processed.</p>
          <p>Thank you for your purchase!</p>
        </div>
      )}
    </div>
  );
};

export default Order;
