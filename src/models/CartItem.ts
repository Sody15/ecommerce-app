import Product from './Product';

export default interface CartItem extends Product {
  selectedSize: string;
  quantity: number;
}
