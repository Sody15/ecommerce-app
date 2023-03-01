import './Cart.scss';
import { ReactComponent as CartLogo } from '../../assets/cart.svg';
import { useAppSelector } from '../../store/hooks';
import { useState } from 'react';
import CartItemComponent from './CartItem';

const Cart = () => {
  const numItems = useAppSelector((state) => state.cart.totalQuantity);
  const itemsInCart = useAppSelector((state) => state.cart.items);
  const subtotal = useAppSelector(
    (state) => `$${state.cart.totalCost.toFixed(2)}`
  );

  const [showCart, setShowCart] = useState(false);

  const cartLogo = (
    <>
      <CartLogo className='cart-btn__logo' />
      <div className='cart-btn__num'>{numItems}</div>
    </>
  );

  return (
    <>
      <button className='cart-btn' onClick={() => setShowCart(true)}>
        {cartLogo}
      </button>
      {showCart && (
        <div className='cart'>
          <button className=' cart__close' onClick={() => setShowCart(false)}>
            X
          </button>
          <div className='cart__header'>
            <div className='cart__header__logo'>{cartLogo}</div>
            <h3>Cart</h3>
          </div>
          <div className='cart__items'>
            {itemsInCart.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}
          </div>
          <div className='cart__footer'>
            <div className='cart__footer__subtotal'>
              <p>Subtotal</p>
              <h3>{subtotal}</h3>
            </div>
            <button>Checkout</button>
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
