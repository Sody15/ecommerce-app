import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../models/Product';

export interface ProductState {
  items: Product[];
}

const initalProductsState: ProductState = {
  items: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initalProductsState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productsSlice.actions;

export default productsSlice.reducer;
