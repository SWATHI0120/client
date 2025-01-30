import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './CustomerDetails.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CustomerDetails = () => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const totalPrice = location.state?.totalPrice || 0;
  const cartItems = location.state?.cartItems || [];

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Phone number validation
    if (!/^\d{10}$/.test(phone)) {
      setPhoneError('Phone number must be exactly 10 digits.');
      return;
    }
    setPhoneError('');

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setEmailError('Please enter a valid email address.');
      return;
    }
    setEmailError('');

    try {
      const response = await fetch('http://localhost:5000/api/customers', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, gender, phone, email, address }),
      });

      if (!response.ok) {
        throw new Error('Failed to create customer. Please try again.');
      }

      navigate('/order', {
        state: { name, gender, phone, email, address, totalPrice, cartItems },
      });
    } catch (error) {
      console.error('Error submitting customer details:', error.message);
    }
  };

  return (
    <>
      <button
        className="cus-back-to-cart-button"
        onClick={() => navigate('/cart', { state: { totalPrice, cartItems } })}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Cart
      </button>

      <div className="cus-customer-details-container">
        <h1 className="cus-h1">Enter Your Details</h1>
        <form className="cus-form" onSubmit={handleSubmit}>
          <label className="cus-label">Name</label>
          <input
            className="cus-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <label className="cus-label">Gender</label>
          <select
            className="cus-select"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>

          <label className="cus-label">Phone Number</label>
          <input
            className="cus-input"
            type="text"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
          {phoneError && <span className="error-text">{phoneError}</span>}

          <label className="cus-label">Email</label>
          <input
            className="cus-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <span className="error-text">{emailError}</span>}

          <label className="cus-label">Address</label>
          <textarea
            className="cus-textarea"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          ></textarea>

<button
  className="cus-button"
  type="submit"
  onClick={(e) => {
    e.preventDefault();
    handleSubmit(e); 
    navigate('/order', {
      state: { name, gender, phone, email, address, totalPrice, cartItems },
    });
  }}
>
  Proceed to Order
</button>

        </form>
      </div>
    </>
  );
};

export default CustomerDetails;


