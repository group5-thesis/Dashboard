import React, { useState } from "react";
import "./navbar.css";
function NavBar(props) {
  const [isActive, setIsActive] = useState(false);
  function toggle() {
    let nav = document.getElementById("navMenu");
    if (isActive) {
      nav.classList.remove("is-active");
    } else {
      nav.classList.add("is-active");
    }
    setIsActive(!isActive);
  }
  return (
    <>
      <nav className="navbar is-white is-hidden-desktop">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item brand-text" href="#">
              Softype PH
            </a>
            <div className="navbar-burger burger" onClick={toggle}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div id="navMenu" className="navbar-menu">
            <div className="navbar-start">
              {["Home", "Orders", "Payments", "Reports"].map((el, id) => {
                return (
                  <a className="navbar-item" key={id} href="#">
                    {el}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
