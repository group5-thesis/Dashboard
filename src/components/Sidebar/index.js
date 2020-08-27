import React, { useState } from "react";
import { connect } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import { actionCreator, ActionTypes } from "app_utils/actions";
import { mdiViewDashboard, mdiAccountGroup, mdiCalendar } from "@mdi/js";
import "./sidebar.css";
import Icon from "@mdi/react";
function Sidebar(props) {
  let history = useHistory();
  let current = history.location.pathname;
  const [_navigation, setnavigation] = useState([
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: mdiViewDashboard,
    },
    {
      title: "Employee Directory",
      path: "/employee",
      icon: mdiAccountGroup,
    },
    {
      title: "Organization Chart",
      path: "/organization",
      icon: mdiAccountGroup,
    },
    {
      title: "Leave Management",
      path: "/test",
      icon: mdiAccountGroup,
    },
    {
      title: "Leave Calendar",
      path: "/calendar",
      icon: mdiCalendar,
    },
    {
      title: "Performance Reviews",
      path: "/performance",
      icon: mdiAccountGroup,
    },
    {
      title: "Others",
      path: "/others",
      icon: mdiAccountGroup,
    },
  ]);
  let badgeStyle = {
    height: "12px",
    minWidth: "12px",
    marginLeft: "25px",
    marginBottom: "7px",
  };
  let handleClick = (idx) => {
    let updatedNavigation = _navigation.map((el, id) => {
      return el;
    });
    setnavigation(updatedNavigation);
  };
  return (
    <div className="column sidebar is-sidebar-menu is-hidden-mobile">
      <aside className="menu mx-3 my-3 ">
        <img
          className="mt-3 mb-5 image "
          style={{ width: "40%" }}
          src={require("assets/img/Softype-clogo.png")}
        />
        <center>
          <figure className="image is-96x96">
            <img
              className="is-rounded"
              src="https://bulma.io/images/placeholders/128x128.png"
              style={{ border: "white 2px solid" }}
            />
            <span
              title="Badge top right"
              style={badgeStyle}
              className="badge is-bottom is-success"
            ></span>
          </figure>
          {/* <p style={{ color: "white" }}>Yol Torres</p> */}
        </center>

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
                <Link
                  className={`mb-2 	${
                    current === "/admin" + item.path ? "is-active" : ""
                  }`}
                  to={"/admin" + item.path}
                >
                  <Icon path={item.icon} size={0.8}></Icon>{" "}
                  <span className="has-text-centered">{item.title}</span>
                </Link>
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
