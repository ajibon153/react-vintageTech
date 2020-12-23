import React from 'react';

// // 3 Vintage tech store
import Clock from './clockOwn/Index';
import Vintage from './3VintageTech/App';
import ProductProvider from './3VintageTech/context/products';
import { CartProvider } from './3VintageTech/context/cart';
import { UserProvider } from './3VintageTech/context/user';
function App() {
  return (
    <>
      {/* Project 3 Vintage */}
      <UserProvider>
        <ProductProvider>
          <CartProvider>
            {/* <Vintage /> */}
            <Clock />
          </CartProvider>
        </ProductProvider>
      </UserProvider>
    </>
  );
}

export default App;
