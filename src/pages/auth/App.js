import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { ActionTypes, actionCreator } from "app_utils/actions";
import { mdiViewDashboard, mdiAccountGroup, mdiCalendar, mdiChevronUp, mdiChevronDown, mdiAirplane, mdiHumanCapacityDecrease, mdiAccountStarOutline, mdiInboxArrowDown, mdiAccountCog, mdiLogout, mdiAccountTie, mdiFolderMultiple } from "@mdi/js";
import { connect } from "react-redux";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";
import Routes from "./Routes";
function App(props) {
  let history = useHistory();
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  const [current, setCurrent] = useState(history.location.pathname)
  const [_navigation, setnavigation] = useState([
    {
      title: "Dashboard",
      path: "/dashboard",
      icon: mdiViewDashboard,
    },
    {
      title: "Employee Directory",
      route: "/employee",
      icon: mdiAccountGroup,
      collapsed: true, //current.includes("admin/employee"),
      children: [
        {
          title: "Employee Profile",
          path: "/profiles",
          icon: mdiAccountTie,
        },
        {
          title: "Organization Chart",
          path: "/organization",
          icon: mdiHumanCapacityDecrease,
        },
        {
          title: "Performance Reviews",
          path: "/performance",
          icon: mdiAccountStarOutline,
        },
      ]
    },
    {
      title: "Leave Management",
      icon: mdiAirplane,
      collapsed: true, //current.includes("admin/leave"),
      route: "/leave",
      children: [
        {
          title: "Leave Requests",
          path: "/requests",
          icon: mdiInboxArrowDown
        },
        {
          title: "Leave Calendar",
          path: "/calendar",
          icon: mdiCalendar,
        },

      ]
    },

    {
      title: "Company Repository",
      path: "/repository",
      icon: mdiFolderMultiple,
    },
    {
      title: "Account Settings",
      path: "/settings",
      icon: mdiAccountCog,
    },
  ]);

  let handleClick = (isMain = false, item) => {
    let updatedNavigation = _navigation.map((el, id) => {
      if (isMain) {
        if (id === item.id) {
          el.collapsed = item.collapsed;
        }
      }
      return el;
    });
    setCurrent(history.location.pathname);
    setnavigation(updatedNavigation);
  };
  return (
    <>
      <div className="columns is-gapless is-fullheight my-sidebar">
        <Sidebar {...{ redux: props, isOpen, _navigation, current, handleClick }} />
        <div className="column is-main-content">
          <NavBar {...{ toggle: toggleSidebar, isOpen: isOpen, redux: props, _navigation, current }} />
          <div className="container mt-5" >
            <Routes props />
          </div>
        </div>
      </div>
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(App);

