import "./header.css";
import { useAuth } from "../../context";

export const Header = () => {
  const { userName, showHideNavHandler } = useAuth();
  return (
    <header className="header">
      <div className="header-bar">
        <i className="fas fa-bars" onClick={() => showHideNavHandler(true)}></i>
        <h1 className="header-title">Keeper</h1>
        <div className="header-userinfo">
          <i className="fas fa-user-circle nav-icon"></i>
          <span className="nav-icon-name">{userName.firstName}</span>
        </div>
      </div>
    </header>
  );
};
