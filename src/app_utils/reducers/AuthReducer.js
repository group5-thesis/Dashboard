import { ActionTypes } from "app_utils/actions";

const initial_state = {
  auth_checked: false,
  already_logged: false
};

export default function AppReducer(state = initial_state, action) {
  switch (action.type) {
    case ActionTypes.LOGOUT:
      return { ...state, already_logged: false };
    case ActionTypes.LOGIN:
      return { ...state, already_logged: true };
    case ActionTypes.AUTH_CHECKED:
      return { ...state, auth_checked: true };
    default:
      return state;
  }
}
