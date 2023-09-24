import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  orders: [],
  totalOrder: 0,
};
export const orderHistory = createSlice({
  name: 'order',
  initialState,
  reducers: {
    addOrderToHistory(state, action) {
      state.orders.push(action.payload);
    },
  },
});

export const { addOrderToHistory } = orderHistory.actions;
export default orderHistory.reducer;
