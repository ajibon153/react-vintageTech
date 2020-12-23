import React from "react";
import ProductList from "./ProductList";
import Loading from "../Loading";
import { ProductContext } from "../../context/products";
import Featured1 from "../../assets/featured1.jpg";
import Featured2 from "../../assets/featured2.jpg";
import Featured3 from "../../assets/featured3.jpg";

export default function FeaturedProducts() {
  const { loading, products, featured } = React.useContext(ProductContext);
  if (loading) {
    return <Loading />;
  }
  return (
    <section className="section" style={{ marginBottom: "50px" }}>
      <h2 className="section-title"></h2>
      <div className="featured-center">
        <div className="img-featured">
          <div className="info">
            <h1>VIVO iQOO Neo</h1>
            <p>
              VIVO iQOO Neo 855 merupakan tipe ponsel pintar yang lebih
              ditujukan untuk gaming.
            </p>
            <h2>Rp. 4.000.000,-</h2>
          </div>
          <img src={Featured1} />
        </div>
        <div className="img-featured">
          <div className="info">
            <h1>VIVO U3</h1>
            <p>
              VIVO U3 hadir dengan poni waterdrop tempat kamera selfie
              beresolusi 16 MP
            </p>
            <h2>Rp. 2.900.000,-</h2>
          </div>
          <img src={Featured2} />
        </div>
        <div className="img-featured">
          <div className="info">
            <h1>VIVO Z1x</h1>
            <p>
              Vivo Z1x mampu menyajikan visualisasi layar yang jernih berbekal
              teknologi Super AMOLED
            </p>
            <h2>Rp. 3.200.000,-</h2>
          </div>
          <img src={Featured3} />
        </div>
      </div>
      <br />
      <br />
      <br />
    </section>
  );
  // return <ProductList title="featured product" products={featured} />;
}
