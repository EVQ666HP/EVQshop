import React from 'react';
import { Link } from 'react-router-dom';

const ItemCard = (item) => {
  return (
    <>
      <div className="item">
        <img className="item__IMG" src={item.picture[0]} alt="" />
        <div className="item__overlay">
          <Link to={`/${item.gender}/${item.id}`} className="custom-link" state={item}>
            <p className="item__show-more">Show more</p>
          </Link>
        </div>
        <div className="item__characterisation flex-column">
          <div className="item__title">{<h1>{`${item.brand} ${item.model}`}</h1>}</div>
          <div className="item__price">
            {item.oldPrice > 0 ? <p className="old-price">{`${item.oldPrice}$`}</p> : ''}
            <p>{item.price}$</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemCard;
