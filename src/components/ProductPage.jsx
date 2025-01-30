import React, { useContext } from 'react';
import { itemContext } from '../context/ItemContext';
import ProductItem from './ProductItem'; 

const ProductPage = () => {
  const { products } = useContext(itemContext);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Product List</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {products.map((product) => (
          <ProductItem key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
