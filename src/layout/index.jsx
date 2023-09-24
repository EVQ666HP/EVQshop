import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import HeaderSpecialOffer from '../components/Header/HeaderSpecialOffer';

const MainLoyout = () => {
  return (
    <>
      <HeaderSpecialOffer />
      <div className="wrapper">
        <Header />
        <Outlet />
      </div>
    </>
  );
};

export default MainLoyout;
