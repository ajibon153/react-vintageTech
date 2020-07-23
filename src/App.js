import React from "react";

// // Course 1
import "./1BudgetCalculator/App.css";
import BudgetCalculator from "./1BudgetCalculator/Index";

// // Course 2
import CocktailDb from "./2CocktailDb/Index";

// // 3 Vintage tech store
import Vintage from "./3VintageTech/App";
import ProductProvider from "./3VintageTech/context/products";
import { CartProvider } from "./3VintageTech/context/cart";

// // 4 Redux
import Redux from "./4Redux/Index";

// // 5 Javascript ES6
import JavascriptES from "./5JavascriptES6/Index";

function App() {
  return (
    <>
      {/* Project 1 */}
      {/* <BudgetCalculator /> */}
      {/* Project 2 */}
      <CocktailDb />

      {/* Project 3 Vintage */}
      {/* <ProductProvider>
        <CartProvider>
          <Vintage />
        </CartProvider>
      </ProductProvider> */}
      {/* Project 4 Redux */}
      {/* <Redux /> */}
    </>
  );
}

export default App;
