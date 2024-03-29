import React from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/user';
import { CartContext } from '../context/cart';

export default function LoginLink() {
  const { user, userLogout } = React.useContext(UserContext);
  const { clearCart } = React.useContext(CartContext);
  // console.log(user);
  if (user.token) {
    return (
      <button
        className='login-btn'
        onClick={() => {
          userLogout();
          clearCart();
        }}
      >
        Logout
      </button>
    );
  }
  return (
    <Link to='/login' className='login-btn'>
      Login
    </Link>
  );
}
