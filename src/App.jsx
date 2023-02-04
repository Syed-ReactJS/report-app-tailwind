import React, { useState } from "react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  const [side, setSide] = useState(false);
  const showSideBar = () => {
    const elem = document.getElementById("side-bar");
    if (side) {
      elem.classList.add("hidden");
    } else {
      elem.classList.remove("hidden");
    }
    setSide(!side);
  };
  return <Dashboard />;
};

export default App;
