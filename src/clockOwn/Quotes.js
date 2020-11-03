import React from "react";

export const Quotes = () => {
  return (
    <div className="container">
      <div className="quotes">
        <p id="quotation"></p>
        <p id="source"></p>
      </div>
      <ul className="kotak">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <div className="bulat">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="jam" id="time">
        00:00:00
      </div>
      <div className="ucapan" id="quote"></div>
      <div className="note">ngeng</div>
      <div className="pengembang">Aji Muhammad Fauji</div>
    </div>
  );
};
