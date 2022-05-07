import "./sidebar.css";
import { useAuth } from "../../context";

export const Sidebar = () => {
  const { showNav, showHideNavHandler } = useAuth();
  return (
    <aside className={showNav ? "sidebar" : "hide-sidebar"}>
      <i
        className="fas fa-times close-nav"
        onClick={() => showHideNavHandler(false)}
      ></i>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <i className="fas fa-home"></i>
        </div>
        <div className="sidebar-name">Home</div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <i className="fas fa-archive"></i>
        </div>
        <div className="sidebar-name">Archive</div>
      </div>
      <div className="sidebar-menu">
        ,
        <div className="sidebar-icon">
          <i className="fas fa-trash"></i>
        </div>
        <div className="sidebar-name">Trash</div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <i className="fas fa-tag"></i>
        </div>
        <div className="sidebar-name">Labels</div>
      </div>
      <div className="sidebar-menu">
        <div className="sidebar-icon">
          <i className="fas fa-plus"></i>
        </div>
        <div className="sidebar-name">Add Note</div>
      </div>
    </aside>
  );
};
