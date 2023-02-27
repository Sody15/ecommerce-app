import "./Cart.scss";
import { ReactComponent as CartLogo } from "../../assets/cart.svg";

const Cart = () => {
  return (
    <button className="cart-btn">
      <CartLogo className="cart-btn--logo" />
    </button>
  );
};

export default Cart;
