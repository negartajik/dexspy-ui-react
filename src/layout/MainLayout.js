import React from "react";
import Sidebar from "../layout/sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-20 h-full bg-gray-200">
        <Sidebar />
      </div>
      <div className="flex flex-col flex-grow">
        <div className=" bg-gray-700">
          <nav className=" h-16" />
        </div>
        <main className="flex-grow bg-gray-100 p-4">{props.children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
