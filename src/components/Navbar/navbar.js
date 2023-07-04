import "./navbar.scss";
import logomark from "../../assets/logomark.svg";
import mobilemenu from "../../assets/mobile-menu.svg";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="nav">
        <div className="nav__container">
          <div className="nav__left-container">
            <div className="nav__logo-container">
              <NavLink to="/">
                <img className="nav__logo-img" src={logomark} />
              </NavLink>
            </div>
          </div>

          <div className="nav__right-container">
            <div className="nav__links">
              <NavLink to="/">Work</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="">Resume</NavLink>
            </div>
            <div className="nav__mobile-menu">
              <img src={mobilemenu} className="mobile-menu" />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
