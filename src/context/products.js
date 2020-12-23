// products context
import React from "react";
import axios from "axios"; // npm i axios --save
import url from "../utils/URL";
// import url from "../utils/localProduct";
import Product from "../components/Products/Product";
// useEffect()
// by default run after every render
// let perfom side effect like= data fetching
// return a cleanup function to avoid memory leaks, so cannot async
// second argument - array of values(depedencies)
import { featureProducts, flattenProducts } from "../utils/helpers";

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  // console.log(url + "/products");

  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(
      // (storeProduct) => console.log(storeProduct) //tes
      (response) => {
        const product = flattenProducts(response.data);
        const feature = featureProducts(product);
        // console.log("product" + product);
        setProducts(product);
        setFeatured(feature);
        setLoading(false);
      }
    );

    // return () => {};
  }, []); // second argument, agar tidak looping terus ngfetch data ke tiap render response

  return (
    <ProductContext.Provider value={{ products, loading, featured }}>
      {children}
    </ProductContext.Provider>
  );
}
