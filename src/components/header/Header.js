import "./header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header-bar">
        <h1 className="header-title">Keeper</h1>
        <div className="header-userinfo">
          <i className="fas fa-user-circle nav-icon"></i>
          <span className="nav-icon-name">Login</span>
        </div>
      </div>
    </header>
  );
};
