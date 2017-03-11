import * as SessionAPIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const signup = (user) => (dispatch) => (
  SessionAPIUtil.signup(user).then(user => {
    dispatch(receiveCurrentUser(user));
  })
);

export const login = (user) => (dispatch) => {
  return(
    SessionAPIUtil.login(user).then(user => {
      dispatch(receiveCurrentUser(user));
    })
  );
};
export const logout = () => (dispatch) => (
  SessionAPIUtil.logout().then(() => {
    dispatch(receiveCurrentUser(null));
  })
);
