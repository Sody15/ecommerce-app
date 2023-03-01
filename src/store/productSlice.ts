import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Product from '../models/Product';

export interface ProductState {
  items: Product[];
  filterValue: string | null;
}

const initalProductsState: ProductState = {
  items: [],
  filterValue: null,
};

export const productsSlice = createSlice({
  name: 'products',
  initialState: initalProductsState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.items = action.payload;
    },
    filterProducts: (state, action: PayloadAction<string>) => {
      state.filterValue = action.payload;
    },
  },
});

export const { setProducts, filterProducts } = productsSlice.actions;

export default productsSlice.reducer;
