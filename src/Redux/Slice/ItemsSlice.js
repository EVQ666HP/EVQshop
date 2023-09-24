import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchShopItems = createAsyncThunk('items/fetchItems', async (props) => {
  const { category, filter, urlCategory, id, categoryItem } = props;
  const categoryFetch = category
    ? `&specialCategory=${category === 'ALL' ? '' : category.replace('-', ' ')}`
    : '';
  const categoryItemFetch = categoryItem ? `&category=${categoryItem}` : '';
  const filterFetch = filter ? `&sortBy=${filter}` : filter === undefined ? '&sortBy=rating' : '';
  const genderFetch = urlCategory ? `&gender=${urlCategory.toLowerCase()}` : '';
  const idFetch = id ? `&id=${id}` : '';
  const { data } = await axios.get(
    `https://64d8fae75f9bf5b879cec4d6.mockapi.io/Shop/?${categoryFetch}${filterFetch}${genderFetch}${idFetch}${categoryItemFetch}`,
  );
  return data;
});

export const fetchSearch = createAsyncThunk('items/fetchSearch', async (props) => {
  const { data } = await axios.get('https://64d8fae75f9bf5b879cec4d6.mockapi.io/Shop/');
  return data;
});

const initialState = {
  status: 'loading',
  searchStatus: 'loading',
  items: [],
  search: [],
};
export const itemsSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchShopItems.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchShopItems.fulfilled]: (state, actions) => {
      state.items = actions.payload;
      state.status = 'success';
    },
    [fetchShopItems.rejected]: (state) => {
      state.status = 'erorr';
      console.error('Server status: data retrieval error');
    },
    [fetchSearch.pending]: (state) => {
      state.searchStatus = 'loading';
    },
    [fetchSearch.fulfilled]: (state, actions) => {
      state.search = actions.payload;
      state.searchStatus = 'success';
    },
    [fetchSearch.rejected]: (state) => {
      state.searchStatus = 'erorr';
      console.error('Server status: data retrieval error');
    },
  },
});

export default itemsSlice.reducer;
