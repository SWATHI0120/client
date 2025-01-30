import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccess.css'

const PaymentSuccess = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); 
  };

  return (
    <div className="payment-success">
      <h2>Payment Successful!</h2>
      <p>Your payment was successfully processed. Thank you for your purchase!</p>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default PaymentSuccess;
