import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const findItem = state.cart.find(
        (cart) =>
          cart.brand === action.payload.brand &&
          cart.model === action.payload.model &&
          cart.selectedSize === action.payload.selectedSize,
      );
      if (findItem) {
        findItem.value += 1;
      } else state.cart.push({ ...action.payload, value: 1 });
      state.totalPrice += action.payload.price;
      freeShiping(state);
    },
    deleteItemToCart(state, action) {
      const indx = state.cart.findIndex(
        (item) =>
          item.brand === action.payload.brand &&
          item.model === action.payload.model &&
          item.selectedSize === action.payload.selectedSize,
      );
      state.totalPrice -= state.cart[indx].price * state.cart[indx].value;
      freeShiping(state);
      state.cart.splice(indx, 1);
    },
    confirmOrder(state) {
      state.cart = [];
      state.totalPrice = 0;
    },
  },
});

function freeShiping(state) {
  return state.totalPrice >= 500 ? state.totalPrice : (state.totalPrice += 10);
}

export const { addItemToCart, deleteItemToCart, confirmOrder } = cartSlice.actions;
export default cartSlice.reducer;
