import React, { Component } from "react";
import Loader from "components/Loader/index";
import AppRouter from "./AppRoute";
export default class App extends Component {
  constructor(props) {
    super(props);
    props.checkLogin();
  }
  render() {
    const { auth_checked } = this.props.appState.auth;
    if (!auth_checked) {
      return _renderLoader();
    }
    return _renderRootNavigation(this.props.appState);
  }
}
const _renderRootNavigation = appState => {
  return <AppRouter auth={appState} />;
};

const _renderLoader = () => <Loader />;
