import { configureStore } from '@reduxjs/toolkit';
import itemsSlice from './Slice/ItemsSlice';
import cartSlice from './Slice/cartSlice';
import ordersHistory from './Slice/ordersHistorySlice';
export const store = configureStore({
  reducer: {
    itemsSlice,
    cartSlice,
    ordersHistory,
  },
});
