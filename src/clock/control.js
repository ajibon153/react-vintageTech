import React from "react";
import $ from "jquery";
import { init_auto } from "./utils";
import {
  midnight,
  gaming1,
  dawn,
  morning,
  noon,
  afternoon,
  sunset,
  evening,
  manual,
  ubuntu,
} from "./utilsColor";

const Control = ({
  tombol,
  setTombol,
  gaming,
  setGaming,
  cek,
  auto,
  setCek,
  setAuto,
  setMode,
  mode,
}) => {
  React.useEffect(() => {
    if (mode === "auto") {
      $("#customRadio0").prop("checked", true);
    }
    setInterval(gaming1(), 4000);
  }, []);

  function handleChange(params) {
    console.log("params", params);
    setGaming(false);
    if ($("#customRadio0").prop("checked")) {
      if (!cek) {
        init_auto();
      }
      setAuto(true);
      setMode("auto");
      setCek(true);
    } else {
      setAuto(false);
      setCek(false);
    }
    if ($("#customRadio1").prop("checked")) {
      ubuntu();
      setMode("ubuntu");
    } else if ($("#customRadio2").prop("checked")) {
      dawn();
      setMode("dawn");
    } else if ($("#customRadio3").prop("checked")) {
      morning();
      setMode("morning");
    } else if ($("#customRadio4").prop("checked")) {
      noon();
      setMode("noon");
    } else if ($("#customRadio5").prop("checked")) {
      afternoon();
      setMode("afternoon");
    } else if ($("#customRadio6").prop("checked")) {
      sunset();
      setMode("sunset");
    } else if ($("#customRadio7").prop("checked")) {
      evening();
      setMode("evening");
    } else if ($("#customRadio8").prop("checked")) {
      midnight();
      setMode("midnight");
    } else if ($("#customRadio10").prop("checked")) {
      manual();
      setMode("manual");
    } else if ($("#customRadio9").prop("checked")) {
      gaming1();
      setMode("gaming1");
      gaming = true;
    }
    if (gaming == false) {
      nofill();
    }
  }
  function handlePanah() {
    if (tombol == false) {
      $(".panah").css("transform", "rotate(225deg)");
      $(".kontrol").animate({ left: "0px" });
      tombol = true;
    } else if (tombol == true) {
      $(".panah").css("transform", "rotate(45deg)");
      $(".kontrol").animate({ left: "-220px" });
      tombol = false;
    }
  }

  function onClickWarna() {
    // setMode("manual");
    nofill();
    $(".kontrol input").prop("checked", false);
    $("#customRadio10").prop("checked", true);
    gaming = false;
    manual();
  }

  function nofill() {
    $(".bulat span").css("background", "unset");
  }

  return (
    <div className="kontrol">
      <div className="panah" onClick={() => handlePanah()}></div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio0")}
          type="radio"
          className="custom-control-input"
          id="customRadio0"
          name="example1"
          // checked
        />
        <label className="custom-control-label" htmlFor="customRadio0">
          Time Based
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio1")}
          type="radio"
          className="custom-control-input"
          id="customRadio1"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio1">
          Ubuntu Style
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio10")}
          type="radio"
          className="custom-control-input"
          id="customRadio10"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio10">
          Manual Input
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio2")}
          type="radio"
          className="custom-control-input"
          id="customRadio2"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio2">
          Dawn
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio3")}
          type="radio"
          className="custom-control-input"
          id="customRadio3"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio3">
          Morning
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio4")}
          type="radio"
          className="custom-control-input"
          id="customRadio4"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio4">
          Noon
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio5")}
          type="radio"
          className="custom-control-input"
          id="customRadio5"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio5">
          Afternoon
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio6")}
          type="radio"
          className="custom-control-input"
          id="customRadio6"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio6">
          Sunset
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio7")}
          type="radio"
          className="custom-control-input"
          id="customRadio7"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio7">
          Evening
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio8")}
          type="radio"
          className="custom-control-input"
          id="customRadio8"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio8">
          Midnight
        </label>
      </div>
      <div className="custom-control custom-radio">
        <input
          onChange={() => handleChange("customRadio9")}
          type="radio"
          className="custom-control-input"
          id="customRadio9"
          name="example1"
        />
        <label className="custom-control-label" htmlFor="customRadio9">
          RGB Gaming :v
        </label>
      </div>
      <input
        className="btn mt-3"
        id="color-picker"
        value="#0079FF"
        onClick={() => onClickWarna()}
        onChange={() => onClickWarna()}
      />
    </div>
  );
};
export default Control;
