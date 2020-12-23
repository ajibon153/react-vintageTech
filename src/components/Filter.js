import React from "react";
import { Link } from "react-router-dom";
import NumberFormat from "react-number-format";

export default function Product({ image, Title, id, Price }) {
  // console.log("image" + image);
  return (
    <>
      <div className="filter-div categories">
        <h1>categories</h1>
        <ul>
          <li>
            Handphone <span className="count">15</span>
          </li>
          <li>
            Laptop<span className="count">9</span>
          </li>
          <li>
            Tablet<span className="count">7</span>
          </li>
          <li>
            Console<span className="count">6</span>
          </li>
        </ul>
      </div>
      <div className="filter-div price">
        <h1>Price</h1>
        <input className="minPrice" type="number" name="minPrice" value="0" />
        <input className="maxPrice" type="number" name="maxPrice" />
        <input
          type="range"
          min="1"
          max="100"
          value="50"
          className="priceRange"
          min="0"
          max="10000000"
          value="0"
        />
      </div>
      <div className="filter-div brand">
        <h1>Brand</h1>
        <ul>
          <li>
            Samsung
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Samsung"
            ></input>
          </li>
          <li>
            ASUS
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="ASUS"
            ></input>
          </li>
          <li>
            Iphone
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Iphone"
            ></input>
          </li>
          <li>
            Xiaomi
            <input
              type="checkbox"
              id="vehicle1"
              name="vehicle1"
              value="Xiaomi"
            ></input>
          </li>
        </ul>
      </div>
      <div className="filter-div color">
        <h1>Color</h1>
        <ul>
          <li>
            <div className="colorList white"></div>
          </li>
          <li>
            <div className="colorList red"></div>
          </li>
          <li>
            <div className="colorList blue"></div>
          </li>
          <li>
            <div className="colorList yellow"></div>
          </li>
          <li>
            <div className="colorList purple"></div>
          </li>
          <li>
            <div className="colorList black"></div>
          </li>
        </ul>
      </div>
    </>
  );
}
