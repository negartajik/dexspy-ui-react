import React from "react";
import Sidebar from "../layout/sidebar/Sidebar";

const MainLayout = (props) => {
  return (
    <div className="flex flex-col h-screen bg-gray-200">
        <Sidebar />
      <div className="flex-1 flex flex-col">
        {/* Navbar */}
        <nav className="bg-gray-700 h-16">
          {/* Your navbar content goes here */}
        </nav>
        <main className="flex-1 overflow-y-auto bg-gray-100">
          {props.children}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
