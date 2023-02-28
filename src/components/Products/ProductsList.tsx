import { DUMMY_DATA } from '../../dummy-data';

import { useEffect, useState } from 'react';
import './ProductList.scss';

import Product from '../../models/Product';
import ProductItem from './ProductItem';

const ProductsList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setTimeout(() => {
      setProducts(DUMMY_DATA);
    }, 200);
  }, []);

  const addItem = (product: Product) => {
    console.log(product);
  };

  return (
    <>
      <p>16 Product(s) found</p>
      <div className='product-list-container'>
        {products.map((p) => (
          <ProductItem product={p} key={p.id} onAdd={addItem} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
