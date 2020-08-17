import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import CartLink from "../components/Cart/CartLink";
import { UserContext } from "../context/user";
import { CartContext } from "../context/cart";
import LoginLink from "./LoginLink";

export default function Header() {
  const { user } = React.useContext(UserContext);
  const { cart } = React.useContext(CartContext);
  return (
    <header className="header">
      <img src={logo} alt="vintage tech logo" className="logo" />
      <nav>
        <ul>
          <div>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">about</Link>
            </li>
            <li>
              <Link to="/products">products</Link>
            </li>
            {/* {user.token && ( )}*/}
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          </div>
          <div>
            <LoginLink />
            <CartLink />
          </div>
        </ul>
      </nav>
    </header>
  );
}
