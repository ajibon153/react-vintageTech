import React from "react";

export default function Hero({ children }) {
  return (
    <div className="hero">
      <div className="banner">
        <h1>Think, code, deploy</h1>
        <p>embrace your choice - we do</p>
        {children}
      </div>
    </div>
  );
}
