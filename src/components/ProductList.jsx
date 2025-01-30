
import React, { useContext, useEffect, useState } from 'react';
import ProductItem from './ProductItem';
import { itemContext } from '../context/ItemContext';

const ProductList = () => {
	const { products } = useContext(itemContext);
	const [sortedProducts, setSortedProducts] = useState([...products]);
	const [selectedType, setSelectedType] = useState('all');

	useEffect(() => {
		setSortedProducts([...products]);
	}, [products]);

	

	const handleFilterByType = () => {
		if (selectedType === 'all') {
			
			setSortedProducts([...products]);
		} else {
			const filtered = products.filter((product) => product.type === selectedType);
			setSortedProducts(filtered);
		}
	};

	return (
		<div className='list'>
		<div className='prdt-list'>
			<h2 className='product-list'>Product List</h2>
			<div className='filter-btn'>
		<label className='fil'>
					<div className="menu-bar-container ">
  <select
    className="menu-bar-select"
    value={selectedType}
    onChange={(e) => setSelectedType(e.target.value)}
  >
    <option value="all">All</option>
    <option value="Fruit">Fruit</option>
    <option value="Vegetable">Vegetable</option>
    <option value="Flower">Flower</option>
    <option value="Seeds">Seeds</option>
  </select>
</div>

				</label>
				<button className='filter by id' onClick={handleFilterByType}>Search
				</button>
			</div>
			</div>

			<ul className="item-card">
  {sortedProducts.map((product) => (
    <li key={product._id} className="item-item">
      <ProductItem product={product} />
    </li>
  ))}
</ul>

		</div>
	);
};

export default ProductList;
