import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { inputAddress } from '../../constants';
//redux
import { useDispatch } from 'react-redux';
import { addOrderToHistory } from '../../Redux/Slice/ordersHistorySlice';
import { confirmOrder } from '../../Redux/Slice/cartSlice';

const ShippingAddress = ({ cart, totalPrice }) => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({ mode: 'onBlur' });

  const foundErrors = (error, data) => {
    return Object.keys(error).find((obj) => obj === data.name);
  };

  const onSubmit = (data) => {
    if (cart.length === 0) {
      alert('Cart empty');
      return;
    } else {
      dispatch(
        addOrderToHistory({
          ...data,
          date: new Date().toString(),
          items: cart,
          price: totalPrice,
        }),
      );
      dispatch(confirmOrder());
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="delivery-info">
        <h3>Shipping address</h3>
        {inputAddress.map((e, indx) => (
          <Controller
            key={e.name}
            name={e.name}
            control={control}
            defaultValue={''}
            render={({ field }) => (
              <div className="delivery-info_margin-b" key={e.name}>
                {indx === 2 && (
                  <select className="delivery-info_margin-b" {...register('country')}>
                    <option value="Ukraine">Ukraine</option>
                    <option value="Poland">Poland</option>
                    <option value="Germany">Germany</option>
                  </select>
                )}
                <input
                  {...field}
                  {...register(
                    `${e.name}`,
                    e.name !== 'streetAddress2' ? { required: true } : { required: false },
                  )}
                  placeholder={e.placeholder}
                />
                {foundErrors(errors, e) && (
                  <div className="delivery-info__error">
                    Please enter your {e.placeholder.toLowerCase()}
                  </div>
                )}
              </div>
            )}
          />
        ))}
      </div>
      <button type="submit" className="confirm-order">
        Confirm order
      </button>
    </form>
  );
};

export default ShippingAddress;
