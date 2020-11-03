import React from "react";

const ChoicestContext = React.createContext();

function getLocalStorage() {
  return localStorage.getItem("mode")
    ? JSON.parse(localStorage.getItem("mode"))
    : "";
}
function getLocalStorage2() {
  return localStorage.getItem("manualColor")
    ? JSON.parse(localStorage.getItem("manualColor"))
    : "";
}
function ChoicesProvider({ children }) {
  const [mode, setMode] = React.useState(getLocalStorage);
  const [manual, setManual] = React.useState(getLocalStorage2);

  React.useEffect(() => {
    localStorage.setItem("mode", JSON.stringify(mode));
    localStorage.setItem("manualColor", JSON.stringify(manual));
    setMode("auto");
  }, []);

  return (
    <ChoicestContext.Provider value={{ mode, setMode, manual, setManual }}>
      {children}
    </ChoicestContext.Provider>
  );
}

export { ChoicesProvider, ChoicestContext };
