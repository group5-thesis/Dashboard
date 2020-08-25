import React from "react";
import ReactDOM from "react-dom";
import "assets/css/index.css";
import "assets/sass/app.sass";
import App from "./AppContainer";
import * as serviceWorker from "./serviceWorker";
import store from "app_utils/store";
import { Provider } from "react-redux";
import "@mdi/font/css/materialdesignicons.css";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
