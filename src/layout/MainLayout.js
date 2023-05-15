import React, { useState } from "react";
import { Header, Sidebar } from "../layout";
import { menuItems } from "./sidebar/MenuItems";
import "./MainLayout.css";

const MainLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = (open) => {
    console.log("sidebar");
    setIsOpen(open);
  };
  return (
    <div className="flex flex-row h-screen">
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        show={true}
        items={menuItems}
        mobileScreenMaxSize={1000}
      />
      <div className={` ${isOpen ? "max-xl:hidden" : ""} header-and-contents`}>
        <Header isOpen={isOpen} clicked={toggleSidebar} />

        <main className="flex-grow bg-gray-100">
          <div className="px-4 sm:px-6 lg:px-8 3xl:px-10">{props.children}</div>
        </main>
      </div>
    </div>
  );
};

export default MainLayout;
