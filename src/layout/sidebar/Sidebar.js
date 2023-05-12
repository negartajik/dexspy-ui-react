import { useState } from "react";
import { Logo, LogoIcon } from "../../components";
import { menuItems } from "./MenuItems";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={`${
        isMenuOpen ? "sidebar-open" : "sidebar-close"
      } `}
      onFocus={() => setIsMenuOpen(true)}
      onBlur={() => setIsMenuOpen(false)}
    >
      <div
        className={`${
          isMenuOpen ? "flex-start" : "justify-center"
        } relative flex h-24 items-center  overflow-hidden px-2 py-4 pt-0 2xl:px-2 3xl:pt-6`}
      >
        <div onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {!isMenuOpen ? <LogoIcon /> : <Logo />}
        </div>
      </div>
      <div className="px-3 pb-5 2xl:px-3">
        <div className="mb-2 min-h-[48px] list-none last:mb-0">
        {menuItems.map((item) => (
            <Link
              to={item.path}
              key={item.name}
              className="relative flex h-12 items-center whitespace-nowrap rounded-lg px-4 text-sm text-gray-500"
            >
              <div>{item.icon}</div>
              <span className={`${isMenuOpen ? "" : "hidden"} ml-2`}>
                {item.name}
              </span>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
