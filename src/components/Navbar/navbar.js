import "./navbar.scss";
import logomark from "../../assets/logomark.svg";
import mobilemenu from "../../assets/mobile-menu.svg";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__left-container">
          <div className="nav__logo-container">
            <img className="nav__logo-img" src={logomark} />
          </div>
        </div>

        <div className="nav__right-container">
          <div className="nav__links">
            <a href="/">Work</a>
            <a href="/">About</a>
            <a href="/">Resume</a>
          </div>
          <div className="nav__mobile-menu">
            <img src={mobilemenu} className="mobile-menu" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
