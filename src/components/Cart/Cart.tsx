import { useState } from 'react';

import './Cart.scss';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';
import Product from '../../models/Product';
import { DUMMY_DATA } from '../../dummy-data';

const Cart = () => {
  const [cartItems, setCartItems] = useState<Product[]>(DUMMY_DATA);

  return (
    <button className='cart-btn'>
      <CartLogo className='cart-btn__logo' />
      {cartItems.length > 0 && (
        <div className='cart-btn__num'>{cartItems.length}</div>
      )}
    </button>
  );
};

export default Cart;
