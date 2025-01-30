// import React, { useState, useEffect, useContext } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';
// import './Payment.css';
// import { itemContext } from '../context/ItemContext';

// const Payment = () => {
//   const { totalPrice } = useContext(itemContext);
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [isProcessing, setIsProcessing] = useState(true);
//   const [paymentMode, setPaymentMode] = useState('');

//   useEffect(() => {
//     if (location.state?.paymentMode) {
//       setPaymentMode(location.state.paymentMode);
//     }

//     // Simulate payment processing
//     setTimeout(() => {
//       setIsProcessing(false);
//     }, 3000);
//   }, [location.state?.paymentMode]);

//   const handlePaymentCompletion = () => {
//     navigate('/payment-success', {
//       state: {
//         paymentMode,
//         totalPrice,
//         transactionId: `TXN-${Math.floor(Math.random() * 1000000)}`,
//       },
//     });
//   };

//   return (
//     <div className="payment-container">
//       {isProcessing ? (
//         <div className="payment-processing">
//           <h2>Processing Payment...</h2>
//           <p>We are processing your {paymentMode} payment. Please wait a moment.</p>
//         </div>
//       ) : (
//         <div className="payment-qr">
//           <h3 style={{ color: 'Black', fontSize: 40 }}>Total Price: ₹{totalPrice}</h3>
//           <h2>Scan QR Code to Pay</h2>
//           <div className="qr-code-container">
//             <img
//               src="payy.jpg"
//               alt="QR Code"
//               className="qr-code-img"
//             />
//           </div>
//           <button onClick={handlePaymentCompletion} className="scan-qr-btn">
//             Payment Completed
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Payment;
