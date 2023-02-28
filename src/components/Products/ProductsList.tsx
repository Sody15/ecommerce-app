import { DUMMY_DATA } from '../../dummy-data';

import { useEffect } from 'react';
import './ProductList.scss';

import Product from '../../models/Product';
import ProductItem from './ProductItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItem } from '../../store/cartSlice';
import { setProducts } from '../../store/productSlice';

const ProductsList = () => {
  const products: Product[] = useAppSelector((state) => state.products.items);
  const dispatch = useAppDispatch();

  // Initialize Dummy Data
  useEffect(() => {
    setTimeout(() => {
      dispatch(setProducts(DUMMY_DATA));
    }, 200);
  }, [dispatch]);

  const addToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <p>16 Product(s) found</p>
      <div className='product-list-container'>
        {products.map((p) => (
          <ProductItem product={p} key={p.id} onAdd={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
