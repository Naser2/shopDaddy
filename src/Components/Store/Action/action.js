import Api from '../../../utils/Api';
import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_CHECK,
  LOGOUT_USER,
  CLEAR_ERROR,
  AUTH_REGISTER,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_FAILED
} from './actionTypes';
import { TOKEN_KEY } from '../../../utils/constants';

import { setToken } from '../../../utils/misc';
import { Navigation } from 'react-native-navigation/lib/dist/Navigation';

function authCheck() {
  return dispatch => dispatch({ type: AUTH_CHECK });
}

function loadUser() {
  console.log('in LOAD USER - I was called from SetUserToken');
  return async (dispatch, getState) => {
    try {
      const { user } = await Api.getUser();

      // If App is unable to load user. we want to destroy the current session and force a reload.
      if (!user) {
        return dispatch({
          type: LOGOUT_USER
        });
      }

      // load user
      dispatch({ type: AUTH_LOGIN_SUCCESS, user });
    } catch (e) {
      dispatch({
        type: AUTH_LOGIN_FAILED,
        message: 'Could not get user'
      });

      return dispatch({
        type: LOGOUT_USER
      });
    }
  };
}

function loginUser(token) {
  console.log('Set User Token Func Called  ', token);
  setToken(token);
  return dispatch => dispatch(loadUser());
}

function logoutUser() {
  return dispatch => {
    localStorage.removeItem(TOKEN_KEY);
    this.props.history.push('/');
    return dispatch({ type: LOGOUT_USER });
  };
}

function requestLogin(credentials) {
  console.log('Got Here Login Dispatch: ', credentials);

  return dispatch => {
    console.log('Inside Dispatch: ');
    dispatch({ type: AUTH_LOGIN });
    return Api.loginUser(credentials)
      .then(({ jwt }) => dispatch(loginUser(jwt)))
      .catch(err => {
        console.log('error on login', err);
        dispatch({
          type: AUTH_LOGIN_FAILED,
          message:
            err.body && err.body.message
              ? err.body.message
              : 'Incorrect username or password'
        });
      });
  };
}

function registerUser(credentials) {
  // const email = credentials[0];
  // const password = credentials[1];
  console.log('Got Here Register Dispatch: ', credentials);
  return dispatch => {
    dispatch({ type: AUTH_REGISTER });
    return Api.registerUser(credentials)
      .then(res => {
        console.log('REGISTER RESPONSE: ', res);
        console.log('RESPONSE USER ID: ', res.user_id);
        let user = res.user_id;
        // dispatch(loginUser(res.token));
        dispatch({ type: AUTH_REGISTER_SUCCESS, user });
        // navigation.push({
        //   name: 'Login'
        // });
      })
      .catch(err => {
        console.log('err during registration', err, err.response);
        // DO SOMETHING IF WE GET THIS err during registration SyntaxError: Unexpected token < in JSON at position 0
        dispatch({
          type: AUTH_REGISTER_FAILED,
          message: err.body ? err.body.message : 'Could Not Register'
        });
      });
  };
}

function clearError() {
  return dispatch => dispatch({ type: CLEAR_ERROR });
}

export {
  authCheck,
  requestLogin,
  loadUser,
  logoutUser,
  registerUser,
  clearError
};
