import React from "react";
import { Burger, LogoIcon } from "../index";
import "./Header.css";
import Search from "./Search";

const Header = (props) => {
  console.log(props);
  return (
    <nav className="header">
      <div className="burger-logo">
        <Burger
          isOpen={props.isOpen}
          onClick={props.clicked}
        />
      </div>
      <div className="header-logo">
        <LogoIcon />
      </div>
      <div className="search-logo">
        <Search />
      </div>
    </nav>
  );
};

export default Header;
