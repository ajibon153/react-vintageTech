import React from "react";
import $ from "jquery";
import {
  midnight,
  dawn,
  morning,
  noon,
  afternoon,
  sunset,
  evening,
  ubuntu,
  manual,
  gaming1,
} from "./utilsColor";

export function bro() {
  let namaku = $(".pengembang").text();
  var hex, i;

  var result = "";
  for (i = 0; i < namaku.length; i++) {
    hex = namaku.charCodeAt(i).toString(16);
    result += ("000" + hex).slice(-4);
  }
  if (
    result !=
    "0041006a00690020004d007500680061006d006d006100640020004600610075006a0069"
  ) {
    $("#parent").fadeOut();
  }
}

export function readMode(setGaming, mode) {
  if (mode != null) {
  }
  switch (mode) {
    case "ubuntu":
      $(".kontrol input").prop("checked", false);
      $("#customRadio1").prop("checked", true);
      ubuntu();
      break;
    case "dawn":
      $(".kontrol input").prop("checked", false);
      $("#customRadio2").prop("checked", true);
      dawn();
      break;
    case "morning":
      $(".kontrol input").prop("checked", false);
      $("#customRadio3").prop("checked", true);
      morning();
      break;
    case "noon":
      $(".kontrol input").prop("checked", false);
      $("#customRadio4").prop("checked", true);
      noon();
      break;
    case "afternoon":
      $(".kontrol input").prop("checked", false);
      $("#customRadio5").prop("checked", true);
      afternoon();
      break;
    case "sunset":
      $(".kontrol input").prop("checked", false);
      $("#customRadio6").prop("checked", true);
      sunset();
      break;
    case "evening":
      $(".kontrol input").prop("checked", false);
      $("#customRadio7").prop("checked", true);
      evening();
      break;
    case "midnight":
      $(".kontrol input").prop("checked", false);
      $("#customRadio8").prop("checked", true);
      midnight();
      break;
    case "manual":
      $(".kontrol input").prop("checked", false);
      $("#customRadio10").prop("checked", true);
      manual();
      break;
    case "gaming1":
      $(".kontrol input").prop("checked", false);
      $("#customRadio9").prop("checked", true);
      gaming1();
      setGaming(true);
      break;
    default:
  }
}
export function readColor(mode, manual, setManual) {
  if (mode == null || mode === "") {
  } else {
    var color = $(".custom");
    color.css("background", manual);
    $("#color-picker").val(manual);
  }
  let colorpicker = $("#color-picker").spectrum({
    type: "text",
    showInput: "true",
    showAlpha: "false",
    showButtons: "false",
  });
  colorpicker.on("move.spectrum", function (e, tinycolor) {
    var hexVal = tinycolor.toHexString();
    var color = $(".custom");
    color.css("background", hexVal);
    console.log(hexVal);
    // localStorage.setItem("manualColor", hexVal);
    setManual(hexVal);
  });
}
export function init_auto() {
  let today = new Date();
  let H = today.getHours();
  if (H > 23 || H < 4) {
    midnight();
  } else if (H < 6) {
    dawn();
  } else if (H < 9) {
    morning();
  } else if (H < 17) {
    noon();
  } else if (H < 18) {
    afternoon();
  } else if (H < 19) {
    sunset();
  } else if (H < 23) {
    evening();
  } else {
    midnight();
  }
}

export function startTime(auto) {
  let today = new Date();
  let h = today.getHours();
  let m = today.getMinutes();
  let s = today.getSeconds();

  let H = h;
  let M = m;
  let S = s;

  let txt, txt2, starting;
  txt = "Halo simp ku sayang";
  txt2 = "txt";
  //   starting = true;

  if (H < 5) {
    txt = "Have a Good Night:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H < 9) {
    txt = "Good Morning You:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H < 12) {
    txt = "Be Happy Today:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H < 16) {
    txt = "Good Afternoon Dear:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H < 19) {
    txt = "Good Afternoon, Take a Rest:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H < 23) {
    txt = "Good Evening Sweetie:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  } else if (H <= 24) {
    txt = "Time to Sleep, Good Night:)";
    if (txt != txt2 && !starting)
      document.getElementById("quote").innerHTML = txt;
    txt2 = txt;
  }
  //   typeWriter(txt);
  starting = false;

  if (auto && m == 0 && s == 0) {
    if (h > 23 || h < 4) {
      midnight();
    } else if (h < 6) {
      dawn();
    } else if (h < 9) {
      morning();
    } else if (h < 17) {
      noon();
    } else if (h < 18) {
      afternoon();
    } else if (h < 19) {
      sunset();
    } else if (h < 23) {
      evening();
    }
  }

  // add a zero in front of numbers<10
  m = checkTime(m);
  s = checkTime(s);
  document.getElementById("time").innerHTML = h + ":" + m + ":" + s;
  setTimeout(function () {
    startTime();
  }, 500);
}

function checkTime(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}

export function specialEffects(manual, setManual) {
  if (manual == "#4c1130") {
    setTimeout(function () {
      createNote("Mangat Din ngepush course javascriptnya :v", setManual);
    }, 5000);
  } else if (manual == "#000000") {
    setTimeout(function () {
      createNote("Buat belajar bro, bukan buat neko neko :v", setManual);
    }, 5000);
  }
}

function createNote(isi, setManual) {
  $(".jam").css("font-size", "30pt").css("bottom", "calc( 50% - 50px )");
  $(".ucapan").css("opacity", "0");
  $(".quotes").css("opacity", "0");
  $(".quotes").css("opacity", "0");
  $(".bulat").css("opacity", "0");
  $(".kotak li").css("opacity", "0");
  setTimeout(function () {
    writeNote(isi, setManual);
  }, 3000);
}

function writeNote(isi, setManual) {
  $(".note").text(isi).css("opacity", "1");

  //   baffle(".note").reveal(2000).start().set({
  //     characters: "░░█ /<▒▓▒ ▒░▒█/ █/▒ ▒▓/█▒ ▓▒░▓ ██░ ▒░▓░ ▒░▓█",
  //     speed: 150,
  //   });
  setManual("#0079FF");
}

export function typeWriter(txt) {
  //   var txt = "Halo simp ku sayang";

  let i = 0;
  var speed = 50;
  if (i < txt.length) {
    var o = (i / txt.length) * 2;
    var o = o.toFixed(0);
    var o2 = o - 1;
    if (o2 < 0) o2 = 0;
    var o3 = String(o);
    var p = "translate(-50%,50%) scale(" + o2 + ")";
    document.getElementById("quote").innerHTML += txt.charAt(i);
    i++;
    $(".jam").css("opacity", o3);
    $(".bulat").css("transform", p).css("opacity", o2);
    setTimeout(typeWriter, speed);
  }
}
