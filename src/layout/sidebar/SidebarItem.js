import { Link } from "react-router-dom";
import "./SidebarItem.css";
const SidebarItem = (props) => {
  const { status, itemData, toggleSidebar } = props;
  console.log("status", status);
  const mouseEnter = () => {
    //toggleSidebar(true);
  };
  const mouseLeave = () => {
    //toggleSidebar(true);
  };
  return (
    <div className={`sidebar-item-${status}`}>
      <Link
        to={itemData.path}
        className="sidebar-item-icon"
        onClick={() => toggleSidebar(false)}
      >
        <div className={`sidebar-item-icon-${status}`}>{itemData.icon}</div>
        <span className={`sidebar-item-title-${status}  ml-2`}>
          {itemData.name}
        </span>
      </Link>
    </div>
  );
};

export default SidebarItem;
