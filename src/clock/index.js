import React from "react";
import "./clock.css";
import Control from "./control";
import Background from "./background";
import Quotes from "./Quotes";
import {
  startTime,
  bro,
  init_auto,
  readColor,
  readMode,
  specialEffects,
  typeWriter,
} from "./utils";
import { ChoicestContext } from "./context";

const Clock = () => {
  const [gaming, setGaming] = React.useState(false);
  const [tombol, setTombol] = React.useState(false);
  const [cek, setCek] = React.useState(false);
  const { mode, setMode, manual, setManual } = React.useContext(
    ChoicestContext
  );
  const [auto, setAuto] = React.useState(true);
  function init() {
    init_auto();
    readMode(setGaming, mode);
    // readColor(mode, manual, setManual);
    // specialEffects(manual, setManual); //
  }
  console.log("mode", mode);

  return (
    <div id="parent" onLoad={init()}>
      <Control
        tombol={tombol}
        setTombol={setTombol}
        gaming={gaming}
        setGaming={setGaming}
        cek={cek}
        auto={auto}
        setCek={setCek}
        setAuto={setAuto}
        setMode={setMode}
        mode={mode}
      />
      <Background />
      <Quotes
        startTime={startTime}
        auto={auto}
        bro={bro}
        typeWriter={typeWriter}
      />
    </div>
  );
};

export default Clock;
