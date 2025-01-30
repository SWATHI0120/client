import React, { useState } from 'react';
import './BuyNow.css';
import { useNavigate } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const BuyNow = () => {
  const [selectedPaymentOption, setSelectedPaymentOption] = useState('');
  const navigate = useNavigate();

  // Handles the payment option selection (Online or COD)
  const handlePaymentOptionChange = (option) => {
    setSelectedPaymentOption(option);
  };

  // Handles the online payment mode selection (Google Pay, PhonePe, etc.)
  const handleOnlinePaymentSelection = (mode) => {
    // Alert user about selected mode and navigate to payment page
    alert(`You selected ${mode} for payment!`);
    navigate('/payment', { state: { paymentMode: mode } }); // Passing the selected mode to Payment component
  };

  return (
    <div className="buy-payment-container">
      {/* Back to Cart Button */}
      <button
        className="buy-back-to-cart-button"
        onClick={() => navigate('/customer-details')}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Customer Details
      </button>

      <h1 className="buy-h1">Select Payment Method</h1>

      {/* Payment Option Selection */}
      <div className="buy-payment-options">
        <button
          className={`buy-payment-btn ${selectedPaymentOption === 'online' ? 'selected' : ''}`}
          onClick={() => handlePaymentOptionChange('online')}
        >
          Online Payment
        </button>
        <button
          className={`buy-payment-btn ${selectedPaymentOption === 'cod' ? 'selected' : ''}`}
          onClick={() => handlePaymentOptionChange('cod')}
        >
          Cash on Delivery (COD)
        </button>
      </div>

      {/* Online Payment Modes */}
      {selectedPaymentOption === 'online' && (
        <div className="buy-online-payment-options">
          <h3 className="buy-h3">Select Online Payment Mode:</h3>
          
          <button className="buy-payment-mode-btn" onClick={() => handleOnlinePaymentSelection('Google Pay')}>
            <img 
              src="https://static.vecteezy.com/system/resources/previews/021/672/633/large_2x/google-pay-logo-transparent-free-png.png" 
              className="buy-payment-icon" 
              alt="Google Pay" 
            />
          </button>

          <button className="buy-payment-mode-btn" onClick={() => handleOnlinePaymentSelection('PhonePe')}>
            <img 
              src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/phonepe-icon.png" 
              className="buy-payment-icon" 
              alt="PhonePe" 
            />
          </button>

          <button className="buy-payment-mode-btn" onClick={() => handleOnlinePaymentSelection('Paytm')}>
            <img 
              src="https://logos-download.com/wp-content/uploads/2021/01/Paytm_Logo.png" 
              className="buy-payment-icon" 
              alt="Paytm" 
            />
          </button>

          <button className="buy-payment-mode-btn" onClick={() => handleOnlinePaymentSelection('BHIM UPI')}>
            <img 
              src="https://www.nicepng.com/png/full/360-3606562_bhim-logo-bhim-upi.png" 
              className="buy-payment-icon" 
              alt="BHIM UPI" 
            />
          </button>
        </div>
      )}

      {/* Cash on Delivery Confirmation */}
      {selectedPaymentOption === 'cod' && (
        <div className="buy-cod-confirmation">
          <p>You selected Cash on Delivery. Please confirm your order.</p>
        </div>
      )}
    </div>
  );
};

export default BuyNow;


