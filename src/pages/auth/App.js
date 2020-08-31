import React, { useState} from "react";
import { ActionTypes, actionCreator } from "app_utils/actions";
import { connect } from "react-redux";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";
import Routes from "./Routes";
function App(props) {
  const [isOpen, setIsOpen] = useState(true)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  return (
    <>
      <div className="columns is-gapless is-fullheight my-sidebar">
        <Sidebar {...{ redux: props, isOpen }}  />
        <div className="column is-main-content">
          <NavBar {...{ toggle: toggleSidebar, isOpen: isOpen, redux: props, }} />
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

