import { useSelector } from 'react-redux';

export function useSelectorSearch() {
  const data = useSelector((state) => state.itemsSlice);
  return data;
}

export function useSelectorItems() {
  const data = useSelector((state) => state.itemsSlice);
  return data;
}

export function useSelectorCart() {
  const data = useSelector((state) => state.cartSlice);
  return data;
}

export function useSelectorOrders() {
  const data = useSelector((state) => state.ordersHistory);
  return data;
}
