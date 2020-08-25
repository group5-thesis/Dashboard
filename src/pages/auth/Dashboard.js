import React from "react";
import { useHistory } from "react-router-dom";
import { ActionTypes, actionCreator } from "app_utils/actions";
import { connect } from "react-redux";
import Sidebar from "components/Sidebar";
import NavBar from "components/NavBar";

function Dashboard(props) {
  let history = useHistory();
  return (
    <>
      <div className="columns is-gapless is-fullheight my-sidebar">
        <Sidebar />
        <div className="column is-main-content">
          <NavBar/>
            {/* routing */}
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

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
