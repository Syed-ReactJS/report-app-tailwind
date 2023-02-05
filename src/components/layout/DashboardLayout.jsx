import React, { useState } from "react";
import SideBard from "../shared/SideBard";

const DashboardLayout = ({ children }) => {
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
  return (
    <div className="flex">
      <SideBard />
      <div className="grow ml-6 mt-2 mb-6">
        <header className="flex items-center  ">
          <div className="w-5 h-5 mr-3" onClick={showSideBar}>
            <img
              src={
                side
                  ? "./static/icons/xmark-solid.svg"
                  : "./static/icons/bars-solid.svg"
              }
              color="white"
              alt="bar"
            />
          </div>
          <h1 className="font-bold text-xl">Dashboard</h1>
        </header>
        {children}
        {/* <footer className="mt-2 bg-gray-900 text-gray-100 h-10">
          <h1>Footer</h1>
        </footer> */}
      </div>
    </div>
  );
};

export default DashboardLayout;
