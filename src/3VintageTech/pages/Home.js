import React from "react";
import Hero from "../components/Hero";
import { Link } from "react-router-dom";
import FeatureProducts from "../components/Products/FeaturedProducts";
import About from "./About";

export default function Home() {
  return (
    <>
      <Hero>
        <Link to="/products" className="btn btn-primary btn-hero">
          Our Product
        </Link>
      </Hero>
      <About />
      <FeatureProducts />
    </>
  );
}
