import "./Header.css";
import image from './assets/загрузка.jpeg';
import logo from './assets/logo.jpeg';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Header = ({ setSidebarVisible, sidebarVisible }) => {
  const handleToggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
  };

  


  return (
    <div className="Header">
      <header className="header-container">
        <div className="left-section">
          <div className="logo-section">
            <img src={logo} alt="logo" />
            <h2>NiceAdmin</h2>
          </div>

          <div className="toggle-search">
            <i
              className="bi bi-list toggle-icon"
              onClick={handleToggleSidebar}
            ></i> {/* MANABU */}
            <div className="search-box">
              <input placeholder="Search" type="text" />
              <i className="bi bi-search"></i>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="icon-group">
            <i className="bi bi-bell"></i>
            <i className="bi bi-chat-left-text"></i>
          </div>

          <div className="profile">
            <img src={image} alt="user" />
            <div className="user-info">
              <h2>T.Mavlonqulov</h2>
              <i className="bi bi-caret-down-fill"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
