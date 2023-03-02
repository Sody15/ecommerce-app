import './ProductList.scss';

import Product from '../../models/Product';
import ProductItem from './ProductItem';

import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { addItem } from '../../store/cartSlice';

const ProductsList = () => {
  const products: Product[] = useAppSelector((state) => state.products.items);
  const filterValue = useAppSelector((state) => state.products.filterValue);
  const filteredProducts = filterValue
    ? products.filter((p) =>
        p.availableSizes.includes(filterValue) ? p : null
      )
    : products;

  const dispatch = useAppDispatch();

  const addToCart = (product: Product) => {
    dispatch(addItem(product));
  };

  return (
    <>
      <p>{filteredProducts.length} Product(s) found</p>
      <div className='product-list-container'>
        {filteredProducts.map((p) => (
          <ProductItem product={p} key={p.id} onAdd={addToCart} />
        ))}
      </div>
    </>
  );
};

export default ProductsList;
