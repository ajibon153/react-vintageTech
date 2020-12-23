import React from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/cart";

export default function CartLink() {
  let ada = 0;
  const { cartItems } = React.useContext(CartContext);
  // console.log({ cartItems });
  if (cartItems < 1) {
    ada = 0;
  } else {
    ada = 1;
  }

  return (
    <div className="cart-link-container">
      <Link to="/cart">Cart</Link>
      {ada === 1 ? (
        <span className="cart-link-total">{cartItems}</span>
      ) : (
        <span></span>
      )}
      {/* <span className="cart-link-total">{cartItems}</span> */}
    </div>
  );
}
