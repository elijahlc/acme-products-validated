import React from 'react';
import { useSelector } from 'react-redux';

const Products = () => {
	const { products } = useSelector((state) => state);
	return (
		<ul>
			{products.map((product) => {
				return (
					<li key={product.id}>
						{product.name} (${product.price})
					</li>
				);
			})}
		</ul>
	);
};

export default Products;
