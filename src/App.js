import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './scss/app.scss';

import Layout from './layout';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Cart from './pages/Cart';
import ItemPage from './pages/ItemPage';
import ProductListing from './pages/ProductListing';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Routes>
      <Route Route path="" exact element={<Layout />}>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="profile" element={<Profile />}></Route>
        <Route path="cart" exact element={<Cart />}></Route>
        <Route path=":urlCategory/" exact element={<ProductListing />}></Route>
        <Route path=":urlCategory/:id/" exact element={<ItemPage />}></Route>
        <Route path="not-found" exact element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
