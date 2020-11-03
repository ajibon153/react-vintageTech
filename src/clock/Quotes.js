import React from "react";
import { quotes } from "./staticData";

const Quotes = ({ startTime, auto, bro }) => {
  React.useEffect(() => {
    bro();
    startTime(auto);
    setInterval(randomQuote(), 60000);
  }, []);

  function randomQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    let quotation = document.getElementById("quotation");
    let source = document.getElementById("source");
    quotation.innerText = `"${random.quote}"`;
    source.innerText = random.source;
  }

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

export default Quotes;
