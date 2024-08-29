import "./Header.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <div>
      <div className="navbar navbar-expand-md bg-dark navbar-dark cyborg-navbar">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={logo} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainmenu"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="mainmenu">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a href="#hero" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#features" className="nav-link">
                  Browse
                </a>
              </li>
              <li className="nav-item dropdown">
                <a href="/"
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown">
                  Details
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <a href="#learn" className="dropdown-item">
                      Fortnite
                    </a>
                  </li>
                  <li>
                    <a href="#next" className="dropdown-item">
                      Where to go next
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="#faq" className="nav-link">
                  Streams
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
