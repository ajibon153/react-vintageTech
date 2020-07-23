import React from "react";

// // 3 Vintage tech store
import Vintage from "./3VintageTech/App";
import ProductProvider from "./3VintageTech/context/products";
import { CartProvider } from "./3VintageTech/context/cart";

function App() {
  return (
    <>
      {/* Project 3 Vintage */}
      <ProductProvider>
        <CartProvider>
          <Vintage />
        </CartProvider>
      </ProductProvider>
    </>
  );
}

export default App;
