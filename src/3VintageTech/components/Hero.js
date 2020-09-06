import React from "react";
import HeroImage from "../assets/banner1.jpg";
import BuletImage from "../assets/buletan.png";
import PhoneImage from "../assets/phoneIconic.png";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <img src={HeroImage} className="bannerImg" />
      {/* <div className="banner">
        <h1>Think, code, deploy</h1>
        <p>embrace your choice - we do</p>
        {children}
      </div> */}
      <div className="buletan">
        <img src={BuletImage} className="bg-bulet" />
        <img src={PhoneImage} className="handphone" />
        <div className="buletin">
          <p>PRODUK UTAMA</p>
          <h3>
            I'm baby mustache jianbing lumbersexual Selvage glossier iPhone
            prism fingerstache.
          </h3>
        </div>
      </div>
    </div>
  );
}
