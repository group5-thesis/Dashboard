import React from "react";
// import { useHistory } from "react-router-dom";
// import { ActionTypes, actionCreator } from "app_utils/actions";
// import { connect } from "react-redux";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";
import Routes from "./Routes";
function App(props) {
  return (
    <>
      <div className="columns is-gapless is-fullheight my-sidebar">
        <Sidebar />
        <div className="column is-main-content">
          <NavBar />
          {/* content reder below */}
          <div className="container is-fluid px-5 py-5" >
            <Routes props />
          </div>
        </div>
      </div>
    </>
  );
}
export default App;
