import React, { useState } from "react";
import "./navbar.css";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreator, ActionTypes } from "app_utils/actions";
import { Icon } from "@mdi/react";
import { mdiMenu, mdiBell, mdiMail, mdiFaceProfile, mdiLogout } from "@mdi/js";
function NavBar(props) {
  let history = useHistory();
  const [isActive, setIsActive] = useState(false);

  let menuItems = [
    {
      title: "My Profile",
      path: "#",
      icon: mdiFaceProfile
    },
    {
      title: "Messages",
      path: "#",
      icon: mdiMail
    },
    {
      title: "Notifications",
      path: "#",
      icon: mdiBell
    },
    {
      title: "Logout",
      hasDivider: true,
      onClick: () => {
        props.redux.doLogout()
      },
      icon: mdiLogout
    },
  ]
  function renderMenuItem(item) {
    console.log(item);
    return (
      <div key={`menu.${item.title}`}>
        {function () {
          if (item.hasDivider) {
            return <hr className="navbar-divider" key={`divider.${item.title}`} />
          }
        }()}
        <p  onClick={item.onClick} className="navbar-item" style={{ cursor: "pointer" }}>
          <span className="icon">
            <Icon path={item.icon} size={0.6} />
          </span>
          <span>{item.title}</span>
        </p>
      </div>
    )
  }
  function toggleMenu() {
    setIsActive(!isActive)
  }
  return (
    <>
      <nav id="navbar-main " className="navbar has-shadow is-fixed-top" style={{ left: props.isOpen ? "260px" : "0" }}>
        <div className="navbar-brand">
          <a className="navbar-item brand-text" style={{ fontWeight: "bold" }}>
            <Icon onClick={props.toggle} path={mdiMenu} size={1} className="is-hidden-mobile" />
            <img
              className=" image "
              style={{ width: "30%" }}
              src={require("assets/img/Softype-clogo.png")}
            />
          </a>
        </div>
        <div className={`navbar-menu fadeIn animated faster ${isActive ? "is-active" : ""}`} id="navbar-menu">
          <div className="navbar-end">
            <div className="navbar-item has-dropdown has-dropdown-with-icons has-user-avatar is-hoverable">
              <a className="navbar-link is-arrowless">
                <div className="is-user-avatar">
                  <img src="https://avatars.dicebear.com/v2/initials/yol-torres.svg" alt="John Doe" />
                </div>
                <div className="is-user-name"><span>Yol Torres</span></div>
                <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
              </a>
              <div className="navbar-dropdown">
                {
                  menuItems.map((item, id) => {
                    item["id"] = id;
                    if (!item.onClick) {
                      item["onClick"] = () => {
                        history.pushState(item.path)
                      }
                    }
                    return renderMenuItem(item)
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="navbar-end is-hidden-desktop">
            <div className="navbar-item">
              <Icon onClick={toggleMenu} path={mdiMenu} size={1} className="is-hidden-desktop" />
            </div>
          </div>
        </div>
      </nav >
    </>
  );
}
export default NavBar;

