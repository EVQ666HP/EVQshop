import React from 'react';
import { useSelectorCart } from '../hooks/useSelector';
// components
import ItemCart from '../components/Cart/ItemCart';
import ShippingAddress from '../components/Cart/ShippingAddress';

const Cart = () => {
  const { totalPrice, cart } = useSelectorCart();
  React.useEffect(() => window.scrollTo({ top: 0 }), []);
  return (
    <>
      <h1 className="page-title">Cart</h1>
      {(cart.length === 0 && <p className="empty">Cart is empty</p>) || (
        <div className="container">
          <div className="cart-box">
            {cart.map((item, indx) => (
              <ItemCart key={indx} item={item} />
            ))}
          </div>

          <div className="delivery">
            <h2>Order summary</h2>
            <div className="delivery-container">
              <p className="delivery-container__title">Subtotal</p>
              <p className="delivery-container__price">
                {totalPrice > 500 || totalPrice === 0 ? totalPrice : totalPrice - 10}$
              </p>
            </div>
            <div className="delivery-container">
              <p className="delivery-container__title">Shipping</p>
              <p className="delivery-container__price">
                {totalPrice > 500 || totalPrice === 0 ? '0$' : '10$'}
              </p>
            </div>
            <div className="delivery-container">
              <p className="delivery-container__title">Total price</p>
              <p className="delivery-container__price total-price">{totalPrice}$</p>
            </div>
            <ShippingAddress cart={cart} totalPrice={totalPrice} />
          </div>
        </div>
      )}
    </>
  );
};

export default Cart;
