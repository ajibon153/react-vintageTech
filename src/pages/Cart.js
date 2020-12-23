import React from 'react';
import { CartContext } from '../context/cart';
import { UserContext } from '../context/user';
import EmptyCart from '../components/Cart/EmptyCart';
import CartItem from '../components/Cart/CartItem';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';

export default function Cart() {
  // let user = false;

  const { cart, total } = React.useContext(CartContext);
  const { user } = React.useContext(UserContext);

  if (cart.length === 0) {
    return <EmptyCart />;
  }
  console.log(cart);
  return (
    <section className='cart-items section'>
      <div>
        <h2>your cart</h2>
        {cart.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
        <h2>
          total :
          <NumberFormat
            value={total}
            displayType={'text'}
            thousandSeparator={true}
            prefix={'Rp '}
          />
        </h2>
        {/* {user.token ? (
        ) : (
          <Link to="/login" className="btn btn-primary btn-block">
            login
          </Link>
        )} */}

        <Link to='/checkout' className='btn btn-primary btn-block'>
          checkout
        </Link>
      </div>
    </section>
  );
}
