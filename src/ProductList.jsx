import React, { useState } from 'react';

function ProductList() {
  const [products] = useState([
    { id: 1, name: 'Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 5.99 },
    { id: 4, name: 'Product 4', price: 14.99 },
  ]);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <a href={`/product/${product.id}`}>{product.name}</a> - ${product.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
