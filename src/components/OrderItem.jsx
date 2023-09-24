import React from 'react';

const OrderItem = ({ item }) => {
  const dateParts = item.date.split(' ');
  const date = `${dateParts[1]} ${dateParts[2]} ${dateParts[3]} ${dateParts[4]}`;
  const orderBox = [...new Array(4)].map((_, index) => {
    return item.items[index];
  });
  return (
    <div className="order-box">
      <div className="order-box__column flex-column">
        <div className="order-box__row">
          {orderBox.slice(0, 2).map((e) => {
            return (
              <img
                className={e ? 'order-box__img' : 'order-box__img empty-box'}
                src={e !== undefined ? e.picture : 'https://imgur.com/rrWKR0f.png'}
                alt=""
              />
            );
          })}
        </div>

        <div className="order-box__row">
          {orderBox.slice(2, 4).map((e) => {
            return (
              <img
                className={e ? 'order-box__img' : 'order-box__img empty-box'}
                src={e !== undefined ? e.picture : 'https://imgur.com/rrWKR0f.png'}
                alt=""
              />
            );
          })}
        </div>
      </div>
      <div className="order-box__info">
        <div className="order-box__date">
          Date: <span>{date}</span>
        </div>
        <div className="order-box__price">
          Price: <span>{item.price}$</span>
        </div>
      </div>
    </div>
  );
};

export default OrderItem;
