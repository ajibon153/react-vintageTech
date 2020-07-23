// products context
import React from "react";
import axios from "axios"; // npm i axios --save
// import url from "../utils/URL";
import url from "../utils/localProduct";
import { featureProducts } from "../utils/helpers";
// useEffect()
// by default run after every render
// let perfom side effect like= data fetching
// return a cleanup function to avoid memory leaks, so cannot async
// second argument - array of values(depedencies)

export const ProductContext = React.createContext();

export default function ProductProvider({ children }) {
  // console.log(url);

  const [loading, setLoading] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  const [featured, setFeatured] = React.useState([]);

  React.useEffect(() => {
    setLoading(true);
    axios.get(`${url}/products`).then(
      // (storeProduct) => console.log(storeProduct) //tes
      (response) => {
        console.log(`url ${url}`);
        console.log(`response ${response}`);

        const feature = featureProducts(response.data);
        setFeatured(feature);
        setProducts(response.data);
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
