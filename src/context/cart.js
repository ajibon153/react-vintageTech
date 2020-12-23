// cart context
import React from "react";
import localCart from "../utils/localCart";
// import {UserContext} from "../context/user"

function getItemFromLocalStorage() {
  return localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [];
}
const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = React.useState(getItemFromLocalStorage);
  const [total, setTotal] = React.useState(0); // total tagihan dengan harga
  const [cartItems, setCartItem] = React.useState(0); // jumlah banyak barang

  React.useEffect(() => {
    //   local storage
    localStorage.setItem("cart", JSON.stringify(cart));
    let newCartItems = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount);
    }, 0);
    setCartItem(newCartItems); //total barang
    let newTotal = cart.reduce((total, cartItem) => {
      return (total += cartItem.amount * cartItem.Price);
    }, 0);
    newTotal = parseFloat(newTotal.toFixed(2));
    setTotal(newTotal);
  }, [cart]);
  const removeItem = (id) => {
    console.log("remove func");
    let newCart = [...cart].filter((item) => item.id !== id);
    setCart(newCart);
  };
  const increaseAmount = (id) => {
    let newAmount = [...cart].map((item) => {
      return item.id === id
        ? { ...item, amount: item.amount + 1 }
        : { ...item };
    });
    setCart(newAmount);
  };
  const decreaseAmount = (id) => {
    let if_zero;
    let newAmount = [...cart].map((item) => {
      if (item.id === id) {
        let amount = item.amount - 1;
        if (amount > 0) {
          return { ...item, amount: item.amount - 1 };
        }
        // wanna show allert
        if_zero = true;
        return { ...item };
      }
      return { ...item };
    });
    if (if_zero) {
      let item_zero = [...cart].filter((item) => item.id !== id);
      setCart(item_zero);
    } else {
      setCart(newAmount);
    }
  };
  const addToCart = (product) => {
    // console.log([cart]);
    const { id, image, Title, Price, amount } = product;
    const item = [...cart].find((item) => item.id === id);

    if (item) {
      increaseAmount(id);
      //   return;
    } else {
      const newItem = { id, Title, image, Price, amount: 1 };
      const newCart = [...cart, newItem];
      setCart(newCart);
    }
  };
  const clearCart = () => {
    setCart([]);
  };
  return (
    <CartContext.Provider
      value={{
        cart,
        total,
        cartItems,
        removeItem,
        increaseAmount,
        decreaseAmount,
        clearCart,
        addToCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartContext, CartProvider };
