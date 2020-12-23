import React from "react";
import Products from "../../pages/Products";
import Filter from "../../components/Filter";
import bannerSalah from "../../assets/banerSalah.jpg";
import Product from "./Product";

export default function ProductList({ title, products }) {
  return (
    <section className="section" style={{ backgroundColor: "whitesmoke" }}>
      <div className="header-imitation">
        <h1
          className="section-title"
          style={{ color: "white", paddingTop: "20px" }}
        >
          {title}
          <p style={{ fontSize: "16px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </h1>
      </div>
      <div className="box-product">
        <img src={bannerSalah} />
        <div className="inner">
          <div className="filter-item">
            <h1>Filter Product</h1>
            <Filter />
          </div>
          <div className="products-center">
            {products.map((item) => {
              return <Product key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
