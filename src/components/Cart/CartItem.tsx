import CartItem from '../../models/CartItem';
import './CartItem.scss';

const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  const formattedPrice = `$${item.price.toFixed(2)}`;

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
        <button className='btn cart-item__add-remove__close'>X</button>
        <h4 className='cart-item__add-remove__price'>{formattedPrice}</h4>
        <button className='btn  cart-item__add-remove__minus'>-</button>
        <button className='btn cart-item__add-remove__plus'>+</button>
      </div>
    </div>
  );
};

export default CartItemComponent;
