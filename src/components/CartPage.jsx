// CartPage.js
import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import './CartPage.css';

const CartPage = () => {
  const { cart, totalPrice, setCart, itemsInCart, setItemsInCart } = useContext(itemContext);
  const navigate = useNavigate();

  // Handle item removal
  const handleRemoveItem = (index) => {
    const updatedCart = cart.filter((_, itemIndex) => itemIndex !== index);
    setCart(updatedCart);
    setItemsInCart(updatedCart.length);
  };

  // Navigate to Customer Details 
  const handleBuyNowClick = () => {
    if (cart.length === 0) {
      alert('Your cart is empty. Please add items before proceeding!');
      return;
    }
    navigate('/customer-details', {
      state: {
        cartItems: cart,  // Pass the cart items 
        totalPrice: totalPrice,
      },
    });
  };

  return (
    <div className="cart-container">
      <button
        className="back-button"
        onClick={() => navigate('/')}
      >
        <FontAwesomeIcon icon={faArrowLeft} />
        Back to Product List
      </button>

      <div className="container">
        <button className="buy-now-btn" onClick={handleBuyNowClick}>Buy Now</button>
      </div>

      <h1 className="shoppingcart">Shopping Cart</h1>
      <div className="cart-count">Items in Cart: {itemsInCart}</div>

      {cart && cart.length > 0 ? (
        <div>
          <h2 className="total-price">Total Price: {totalPrice} Rs</h2>
          <ul className="cart-items-list">
            {cart.map((item, index) => (
              <li key={index} className="cart-item">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <p>Price: {item.price} Rs</p>
                  <button
                    className="removebt"
                    type="button"
                    aria-label={`Remove ${item.name} from cart`}
                    onClick={() => handleRemoveItem(index)}
                  >
                    Remove
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Your cart is empty.</p>
      )}
    </div>
  );
};

export default CartPage;



