import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { getProducts } from "./Actions";

const Product = ({ loading, products, getProducts }) => {
  React.useEffect(() => {
    getProducts();
  }, [getProducts]);
  if (loading) {
    return <h2 className="section-title">Loading....</h2>;
  }
  return (
    <section className="section">
      <h2 className="section-title">Our Product</h2>
      <ul className="products">
        {products.map((item) => {
          return (
            <li key={item.id} className="product">
              <img src={item.image.url} alt={item.title}></img>
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Product.propTypes = {
  loading: PropTypes.bool.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  getProducts: PropTypes.func.isRequired,
};

function mapStateToProps({ productState }) {
  return { ...productState };
}

export default connect(mapStateToProps, { getProducts })(Product);
