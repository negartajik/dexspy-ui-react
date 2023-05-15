import SidebarItem from "./SidebarItem";
import Logo from "../topbar/Logo";
import { Burger, LogoIcon } from "../index";
import "./Sidebar.css";

const Sidebar = (props) => {
  const { isOpen, toggleSidebar, show, items, mobileScreenMaxSize } = props;
  console.log(isOpen);

  const getStatus = () => {
    return isOpen ? "open" : "close";
  };

  return (
    <div
      className={`sidebar-${getStatus()} h-full`}
      onMouseEnter={() => toggleSidebar(true)}
      onMouseLeave={() => toggleSidebar(false)}
    >
      {/* <div
        className={`${
          isOpen ? "flex-start" : "justify-center"
        } relative flex h-24 items-center  overflow-hidden px-2 py-4 pt-0 2xl:px-2 3xl:pt-6`}
      >*/}
      <div className="sidebar-item-parts-margin">
        <div className="sidebar-item-icon-margin">
          <div className="flex flex-row justify-between m-2">
            <div
              onClick={() => toggleSidebar(!isOpen)}
              className={`sidebar-item-${getStatus()}`}
            >
              {!isOpen ? <LogoIcon /> : <Logo />}
            </div>
            <div className="burger-logo">
              <Burger
                isOpen={true}
                onClick={() => toggleSidebar(false)}
              />
            </div>
          </div>
          {items.map((item) => (
            <SidebarItem
              key={item.name}
              status={getStatus()}
              itemData={item}
              toggleSidebar={toggleSidebar}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
