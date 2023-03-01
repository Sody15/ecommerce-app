import CartItem from '../../models/CartItem';
import { useAppDispatch } from '../../store/hooks';
import './CartItem.scss';
import {
  addItem,
  removeItem,
  removeAllItemsOfType,
} from '../../store/cartSlice';

const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  const dispatch = useAppDispatch();

  const formattedPrice = `$${item.price.toFixed(2)}`;

  const onRemoveItems = () => {
    dispatch(removeAllItemsOfType(item));
  };

  const onAddQuantity = () => {
    dispatch(addItem(item));
  };

  const onRemoveQuantity = () => {
    dispatch(removeItem(item));
  };

  return (
    <div className='cart-item'>
      <img src={require(`../../assets/${item.sku}.webp`)} alt={item.title} />
      <div className='cart-item__details'>
        <h4>{item.title}</h4>
        <p>
          {item.selectedSize} | {item.style}
        </p>
        <p>Quantity: {item.quantity}</p>
      </div>
      <div className='cart-item__add-remove'>
        <button
          className='cart-item__add-remove__close'
          onClick={onRemoveItems}
        >
          X
        </button>
        <h4 className='cart-item__add-remove__price'>{formattedPrice}</h4>
        <button
          className='cart-item__add-remove__minus'
          onClick={onRemoveQuantity}
        >
          -
        </button>
        <button className='cart-item__add-remove__plus' onClick={onAddQuantity}>
          +
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;
