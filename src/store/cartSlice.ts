import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import CartItem from '../models/CartItem';
import Product from '../models/Product';

export interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalCost: number;
}

const initalCartState: CartState = {
  items: [],
  totalQuantity: 0,
  totalCost: 0,
};

const getTotalQuantity = (items: CartItem[]): number => {
  return items.reduce((accum, curr) => curr.quantity + accum, 0);
};

const getTotalCost = (items: CartItem[]): number => {
  return items.reduce((accum, curr) => curr.price * curr.quantity + accum, 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initalCartState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingIndex = state.items.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );

      if (existingIndex > -1) {
        const existingItem = state.items[existingIndex];
        state.items[existingIndex] = {
          ...existingItem,
          quantity: existingItem.quantity + 1,
        };
      } else {
        const cartItem: CartItem = {
          ...action.payload,
          quantity: 1,
          selectedSize: 'XL',
        };
        state.items.push(cartItem);
      }

      state.totalQuantity = getTotalQuantity(state.items);
      state.totalCost = getTotalCost(state.items);
    },
    removeItem: (state, action: PayloadAction<Product>) => {
      // state.quantity--;

      state.totalQuantity = getTotalQuantity(state.items);
      state.totalCost = getTotalCost(state.items);
    },
    removeAllItemsOfType: (state, action: PayloadAction<Product>) => {
      // let totalQuantity = 0;
      // state.items.reduce(item => {
      //   if (item.id === action.payload.id) {
      //   }
      // })
      // state.quantity - action.payload.
    },
  },
});

export const { addItem, removeItem, removeAllItemsOfType } = cartSlice.actions;

export default cartSlice.reducer;
