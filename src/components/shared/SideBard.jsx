import React from "react";

const SideBar = () => {
  return (
    <div
      className="flex flex-col items-start bg-gray-900 w-36 h-screen p-2 hidden md:block "
      id="side-bar"
    >
      <div className="flex px-1 align-middle items-center mb-3  p-1 rounded cursor-pointer hover:bg-gray-700">
        <img src="./static/icons/home.png" alt="home" className="h-5 w-5" />
        <h1 className=" text-gray-200 text-lg font-bold ml-2">Home</h1>
      </div>
      <div className="flex px-1 align-middle items-center mb-3 p-1 rounded cursor-pointer hover:bg-gray-700">
        <img src="./static/icons/upload.png" alt="home" className="h-5 w-5" />
        <h1 className=" text-gray-200 text-lg font-bold ml-2">Upload</h1>
      </div>
      <div className="flex px-1 align-middle items-center mb-3 p-1 rounded cursor-pointer hover:bg-gray-700">
        <img src="./static/icons/report.png" alt="home" className="h-5 w-5" />
        <h1 className=" text-gray-200 text-lg font-bold ml-2">Reports</h1>
      </div>
      <div className="flex px-1 align-middle items-center mb-3 p-1 rounded cursor-pointer hover:bg-gray-700">
        <img src="./static/icons/customer.png" alt="home" className="h-5 w-5" />
        <h1 className=" text-gray-200 text-lg font-bold ml-2">Users</h1>
      </div>
      <hr />
      <br />
      <div className="flex px-1 align-middle items-center p-1 rounded cursor-pointer hover:bg-gray-700">
        <img
          src="./static/icons/on-off-button.png"
          alt="home"
          className="h-5 w-5"
        />
        <h1 className=" text-gray-200 text-lg font-bold ml-2">Logout</h1>
      </div>
    </div>
  );
};

export default SideBar;
