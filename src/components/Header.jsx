import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { itemContext } from '../context/ItemContext';

const Header = () => {
  const { itemsInCart, totalPrice } = useContext(itemContext);
  const navigate = useNavigate();

  return (
    <div className="header">
      <img
        src="https://logodix.com/logo/689863.png"
        alt="Fresh Greeny Market Banner"
        className="header-image"
        style={{ width: '10%' }}
      />
      <h1 className="h">Fresh Greeny Market</h1>
      <h3 style={{ color: 'Black', fontSize: 30 }}>Total Price: {totalPrice} Rs</h3>
      <div className="cart-num">
        <div className="cart-items">{itemsInCart}</div> 
      </div>
      <div>
        <FontAwesomeIcon
          icon={faCartShopping}
          size="4x"
          color="red"
          style={{ cursor: 'pointer' }}
          onClick={() => navigate('/cart')} // Navigate to the cart page
        />
      </div>
    </div>
  );
};

export default Header;
