import React from 'react';
import { Link } from 'react-router-dom';

const FoundItem = ({ brand, model, price, gender, id }) => {
  const link = `/${gender}/${id}`;
  return (
    <Link to={link} className="custom-link">
      <div className="found-item">
        <div className="found-item__title">
          {brand} {model}
        </div>
        <div className="found-item__price">{price}$</div>
      </div>
    </Link>
  );
};

export default FoundItem;
