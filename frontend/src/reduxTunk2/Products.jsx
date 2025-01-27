import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './productSlice';

function Products() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.items);
    const status = useSelector((state) => state.products.status);
    const error = useSelector((state) => state.products.error);

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    if (status === "loading") {
        return <div>loading...</div>;
    }
    if (status === 'rejected') {
        return <div>Error: {error}</div>;
    }
    2
    return (
        <div>
            <h4>Products</h4>
            <div>
                <ul>
                    {products.map((product) => (
                        <li key={product.id}>
                            <h2>{product.title}</h2>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <img
                                src={product.image}
                                alt={product.title}
                                style={{ width: '100px' }}
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Products;