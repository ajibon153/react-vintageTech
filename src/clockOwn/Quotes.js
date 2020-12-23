import React from 'react';
import { quotes } from './staticData/staticQuote';
import $ from 'jquery';

export const Quotes = () => {
  const [timeShow, setTimeShow] = React.useState('');
  const [timeSky, setTimeSky] = React.useState('');
  const [quoteShow, setQuoteShow] = React.useState('');

  let i = 0;
  let speed = 500;

  React.useEffect(() => {
    init_auto();

    typeWriter();
  }, [timeSky]);

  React.useEffect(() => {
    setInterval(() => {
      let now = new Date();
      let formated = formatDate(now);
      setTimeShow(formated);
    }, 1000);
  });
  React.useEffect(() => {
    setInterval(() => {
      randomQuote();
    }, 20000);
  }, [quoteShow]);

  function formatDate(now) {
    let sec = now.getSeconds();
    let minute = now.getMinutes();
    let hours = now.getHours();
    let join = hours + ':' + minute + ':' + sec;
    // console.log(join);
    return join;
  }

  function randomQuote() {
    let random = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log('random', random);
    setQuoteShow(random);
    // return random;
  }

  function init_auto() {
    let H = new Date().getHours();
    if (H > 23 || H < 4) {
      setTimeSky('midnight');
    } else if (H < 6) {
      setTimeSky('dawn');
    } else if (H < 9) {
      setTimeSky('morning');
    } else if (H < 17) {
      setTimeSky('noon');
    } else if (H < 18) {
      setTimeSky('afternoon');
    } else if (H < 19) {
      setTimeSky('sunset');
    } else if (H < 23) {
      setTimeSky('evening');
    } else {
      setTimeSky('midnight');
    }
  }
  function typeWriter() {
    if (i < timeSky.length) {
      var o = (i / timeSky.length) * 2;
      var o = o.toFixed(0);
      var o2 = o - 1;
      if (o2 < 0) o2 = 0;
      console.log('i', i);
      console.log('timeSky', timeSky);
      console.log('o', o);
      console.log('o2', o2);
      var o3 = String(o);
      console.log('o3', o3);
      var p = 'translate(-50%,50%) scale(' + o2 + ')';
      console.log('p', p);
      document.getElementById('sky').innerHTML += timeSky.charAt(i);
      i++;
      // $('.jam').css('opacity', o3);
      // $('.bulat').css('transform', p).css('opacity', o2);
      setTimeout(typeWriter, speed);
    }
  }

  return (
    <div className='container'>
      <div className='quotes'>
        <p id='quotation'></p>
        <p id='source'></p>
      </div>
      <ul className='kotak'>
        {/* <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li> */}
      </ul>
      <div className='bulat'>
        <span></span>
        {/* <span></span>
        <span></span> */}
      </div>
      <div className='jam' id='sky'></div>
      <div className='jam' id='time'>
        {timeShow}
      </div>
      <div className='ucapan' id='quote'>
        {`'${quoteShow.quote}.'`}
        <br />
        {`${quoteShow.source}`}
      </div>
      <div className='note'>ngeng</div>
      <div className='pengembang'>Aji Muhammad Fauji</div>
    </div>
  );
};
