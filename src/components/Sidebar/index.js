import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { actionCreator, ActionTypes } from "app_utils/actions";
import { mdiViewDashboard, mdiAccountGroup, mdiCalendar } from "@mdi/js";
import Icon from "@mdi/react";
function Sidebar(props) {
  let history = useHistory();
  const [_navigation, setnavigation] = useState([
    // { title: "", path: "", isActive: false }
    {
      title: "Dashboard",
      path: "/dashboard",
      isActive: true,
      icon: mdiViewDashboard,
    },
    {
      title: "Employee Directory",
      path: "/employee",
      isActive: false,
      icon: mdiAccountGroup,
    },
    {
      title: "Organization Chart",
      path: "/organization",
      isActive: false,
      icon: mdiAccountGroup,
    },
    {
      title: "Leave Management",
      path: "/leave-management",
      isActive: false,
      icon: mdiAccountGroup,
    },
    {
      title: "Leave Calendar",
      path: "/calendar",
      isActive: false,
      icon: mdiCalendar,
    },
    {
      title: "Performance Reviews",
      path: "/performance",
      isActive: false,
      icon: mdiAccountGroup,
    },
    {
      title: "Others",
      path: "/otheFrs",
      isActive: false,
      icon: mdiAccountGroup,
    },
  ]);
  // Employee , Leave Management , Others
  let handleClick = (idx) => {
    let updatedNavigation = _navigation.map((el, id) => {
      el.isActive = id === idx;
      return el;
    });
    setnavigation(updatedNavigation);
  };
  return (
      <div className="column sidebar is-sidebar-menu is-hidden-mobile">
        <aside className="menu mx-3 my-3 ">
          <img
            className="my-4 image "
            style={{ width: "80%" }}
            src={require("assets/img/Softype-clogo.png")}
          />
          <hr />
          <p className="menu-label">General</p>
          <ul className="menu-list">
            {_navigation.map((item, idx) => {
              return (
                <li
                  className="is-right"
                  key={idx}
                  onClick={() => {
                    handleClick(idx);
                  }}
                >
                  <a className={`mb-2 	${item.isActive ? "is-active" : ""}`}>
                    <Icon path={item.icon} size={0.8}></Icon>{" "}
                    <span className="has-text-centered">{item.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </aside>
      </div>
  );
}

const mapStateToProps = (state) => ({
  appState: state.appState,
});
const mapDispatchToProps = (dispatch, _) => ({
  async doLogout() {
    dispatch(actionCreator(ActionTypes.LOGOUT));
    localStorage.removeItem("token");
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
