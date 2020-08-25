import Main from "./Main";
import { ActionTypes, actionCreator } from "app_utils/actions";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  appState: state.appState
});

const mapDispatchToProps = (dispatch, _) => ({
  checkLogin: () => {
    let authStateResult = localStorage.getItem("token");
    if (authStateResult != null) {
      dispatch(actionCreator(ActionTypes.LOGIN));
    }
    setTimeout(() => {
      dispatch(actionCreator(ActionTypes.AUTH_CHECKED));
    },1000);
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main);
