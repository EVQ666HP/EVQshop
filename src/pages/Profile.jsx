import React from 'react';
import OrderItem from '../components/OrderItem';
import { useSelectorOrders } from '../hooks/useSelector';

const Profile = () => {
  const { orders } = useSelectorOrders();
  return (
    <>
      <h1 className="page-title">Profile</h1>
      {orders.length === 0 ? (
        <>
          <p className="empty">Orders Not Found</p>
        </>
      ) : (
        <div className="grid">
          {orders.map((item) => (
            <OrderItem key={item.date} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Profile;
