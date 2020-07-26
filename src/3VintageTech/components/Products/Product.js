import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

export default function Product({ image, Title, id, Price }) {
  // console.log("image" + image);
  return (
    <article className="product">
      <div className="img-container">
        <img src={image} title={Title} />
        <Link to={`products/${id}`} className="btn btn-primary product-link">
          details
        </Link>
      </div>
      <div className="product-footer">
        <p className="product-title">{Title}</p>
        <p className="product-price">
          <NumberFormat
            value={Price}
            displayType={"text"}
            thousandSeparator={true}
            prefix={"Rp "}
          />
        </p>
      </div>
    </article>
  );
}
