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

const getExistingIndex = (id: number, items: CartItem[]): number => {
  return items.findIndex((cartItem) => cartItem.id === id);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState: initalCartState,
  reducers: {
    addItem: (state, action: PayloadAction<Product>) => {
      const existingIndex = getExistingIndex(action.payload.id, state.items);

      if (existingIndex !== -1) {
        // Update Quantity
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
    removeItem: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items
        .map((cartItem) => {
          if (cartItem.id === action.payload.id) {
            return { ...cartItem, quantity: cartItem.quantity - 1 };
          }
          return cartItem;
        })
        .filter((i) => i.quantity !== 0);

      state.totalQuantity = getTotalQuantity(state.items);
      state.totalCost = getTotalCost(state.items);
    },
    removeAllItemsOfType: (state, action: PayloadAction<CartItem>) => {
      state.items = state.items.filter(
        (cartItem) => cartItem.id !== action.payload.id
      );

      state.totalQuantity = getTotalQuantity(state.items);
      state.totalCost = getTotalCost(state.items);
    },
  },
});

export const { addItem, removeItem, removeAllItemsOfType } = cartSlice.actions;

export default cartSlice.reducer;
