import React from 'react';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';
import { CartContext } from '../../context/cart';
import NumberFormat from 'react-number-format';

export default function CartItem({ data }) {
  const { removeItem, increaseAmount, decreaseAmount } = React.useContext(
    CartContext
  );
  console.log('data', data);

  return (
    <article className='cart-item'>
      <img src={data.image} alt={data.data.title} />
      <div>
        <h4>{data.data.title}</h4>
        <h5>
          <NumberFormat
            value={data.data.price * data.amount}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
        </h5>
        <button
          type='button'
          className='card-btn remove-btn'
          onClick={() => {
            removeItem(data.data.id);
          }}
        >
          remove
        </button>
      </div>
      <div>
        <button
          type='button'
          className='cart-btn amount-btn'
          onClick={() => increaseAmount(data.data.id)}
        >
          <FaAngleUp />
        </button>
        <p className='item-amount'>{data.amount}</p>
        <button
          type='button'
          className='cart-btn amount-btn'
          onClick={() => {
            decreaseAmount(data.data.id);
          }}
        >
          <FaAngleDown />
        </button>
      </div>
    </article>
  );
}
