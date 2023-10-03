import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching product details from an API
    const getProductDetails = async () => {
      // Replace with actual API call to fetch product details by ID
      const response = await fetch(`/api/products/${id}`);
      const data = await response.json();
      setProduct(data);
    };

    getProductDetails();
  }, [id]);

  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Product Details</h2>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description || 'No description available.'}</p>
    </div>
  );
}

export default ProductDetails;
