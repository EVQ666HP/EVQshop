import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteItemToCart } from '../../Redux/Slice/cartSlice';

const ItemCart = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <div className="cart-box__item">
      <div className="cart-box__img">
        <img src={item.picture} alt="" />
      </div>
      <div className="cart-box__information custom-link">
        <h3>
          {item.brand} {item.model}
        </h3>
        <p>Size: {item.selectedSize}</p>
        <p>Color: {item.color}</p>
        <p>Count: {item.value}</p>
        <div className="cart-box__price">{item.value * item.price}$</div>
      </div>
      <div
        onClick={() => {
          dispatch(deleteItemToCart({ ...item }));
        }}
        className="cart-box__delete"
      >
        <svg
          className="cart-box__delete"
          xmlns="http://www.w3.org/2000/svg"
          height="22"
          viewBox="0 -960 960 960"
          width="22"
        >
          <path d="M261-120q-24.75 0-42.375-17.625T201-180v-570h-41v-60h188v-30h264v30h188v60h-41v570q0 24-18 42t-42 18H261Zm438-630H261v570h438v-570ZM367-266h60v-399h-60v399Zm166 0h60v-399h-60v399ZM261-750v570-570Z" />
        </svg>
      </div>
    </div>
  );
};

export default ItemCart;
