import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsRequest } from './productSlice';

const Products = () => {
  const dispatch = useDispatch();
  const { items, status, error } = useSelector((state) => state.products);
//   console.log(items)
//   console.log(status)
//   console.log(error)

  useEffect(() => {
    dispatch(fetchProductsRequest()); // Trigger saga to fetch products
  }, [dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Productssaga</h1>
      <ul>
        {items.map((product) => (
          <li key={product.id}>
            <h2>{product.title}</h2>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <img src={product.image} alt={product.title} style={{ width: '100px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
