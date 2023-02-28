import { useState } from 'react';

import Product from '../../models/Product';
import './ProductItem.scss';

const ProductItem: React.FC<{
  product: Product;
  onAdd: (product: Product) => void;
}> = (props) => {
  const { product } = props;
  const [showDescription, setShowDescription] = useState(false);

  // Format Price
  const formattedPrice: string = product.price.toFixed(2);
  const [dollars, cents] = formattedPrice.split('.');

  const clickHandler = () => {
    props.onAdd(product);
  };

  return (
    <div className='product-card'>
      <div
        className='product-card__img-container'
        onMouseEnter={() => setShowDescription(true)}
        onMouseLeave={() => setShowDescription(false)}
      >
        {showDescription && (
          <p className='product-card__img-description'>{product.description}</p>
        )}
        <img src={require(`../../assets/${product.sku}.webp`)} alt='product' />
      </div>

      <div className='product-card__content'>
        <h3 className='product-card__content-title'>{product.title}</h3>
        <div className='product-card__content-separator'></div>
        <div className='product-card__content-price'>
          <span>$</span>
          <span className='product-card__content-price--dollars'>
            {dollars}
          </span>
          <span>.{cents}</span>
        </div>
      </div>
      <div className='product-card__actions'>
        <button
          className='btn product-card__actions_add'
          onClick={clickHandler}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
