import {
  LOGIN,
  LOGOUT,
  AUTH_CHECKED
} from "../constants/action-types";

const ActionTypes = {
  LOGOUT: LOGOUT,
  AUTH_CHECKED: AUTH_CHECKED,
  LOGIN: LOGIN
};

const actionCreator = (type, payload = null) => ({ type, payload });
export { ActionTypes, actionCreator };
