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
  AUTH_REGISTER_FAILED,
  AUTH_AUTO_LOGIN,
  AUTH_AUTO_LOGIN_FAIL,
  AUTH_AUTO_LOGIN_SUCCESS
} from './actionTypes';

import { TOKEN_KEY } from '../../../utils/constants';

import axios from 'axios';

import { SIGNUP, LOGIN, REFRESH } from '../../../utils/misc';

function authCheck() {
  return dispatch => dispatch({ type: AUTH_CHECK });
}

// function loadUser() {
//   console.log('in LOAD USER - I was called from SetUserToken');
//   return async (dispatch, getState) => {
//     try {
//       const { user } = await Api.getUser();

//       // If App is unable to load user. we want to destroy the current session and force a reload.
//       if (!user) {
//         return dispatch({
//           type: LOGOUT_USER
//         });
//       }

//       // load user
//       dispatch({ type: AUTH_LOGIN_SUCCESS, user });
//     } catch (e) {
//       dispatch({
//         type: AUTH_LOGIN_FAILED,
//         message: 'Could not get user'
//       });

//       return dispatch({
//         type: LOGOUT_USER
//       });
//     }
//   };
// }

function registerUser(credentials) {
  console.log('Got Here Register Dispatch: ', credentials);
  return dispatch => {
    dispatch({ type: AUTH_REGISTER });
    // return Api.registerUser(credentials)
    return (request = axios({
      method: 'POST',
      url: SIGNUP,
      data: {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('REGISTER RESPONSE: ', res);
        let user = res.data;
        dispatch({ type: AUTH_REGISTER_SUCCESS, user });
      })
      .catch(err => {
        console.log('err during registration', err, err.response);
        dispatch({
          type: AUTH_REGISTER_FAILED,
          message: err.body ? err.body.message : 'Could Not Register'
        });
      }));
  };
}
function requestLogin(credentials) {
  console.log('Got Here Register Dispatch: ', credentials);
  return dispatch => {
    dispatch({ type: AUTH_LOGIN });
    // return Api.registerUser(credentials)
    return (request = axios({
      method: 'POST',
      url: LOGIN,
      data: {
        email: credentials.email,
        password: credentials.password,
        returnSecureToken: true
      },
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log('REGISTER RESPONSE: ', res);
        let user = res.data;
        dispatch({ type: AUTH_LOGIN_SUCCESS, user });
      })
      .catch(err => {
        console.log('err during registration', err, err.response);
        dispatch({
          type: AUTH_LOGIN_FAILED,
          message: err.body ? err.body.message : 'Could Not Register'
        });
      }));
  };
}

// function loginUser(token) {
//   console.log('Set User Token Func Called  ', token);
//   setToken(token);
//   return dispatch => dispatch(loadUser());
// }

function autoLogin(refToken) {
  return dispatch => {
    dispatch({ type: AUTH_AUTO_LOGIN });

    return (request = axios({
      method: 'POST',
      url: REFRESH,
      data: 'grant_type=refresh_token&refresh_token=' + refToken,
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    }))
      .then(response => {
        console.log('REGISTER RESPONSE: ', response);
        let user = response.data;
        dispatch({ type: AUTH_AUTO_LOGIN_SUCCESS, user });
        // return response.data;
      })
      .catch(err => {
        console.log('err during registration', err, err.response);
        dispatch({
          type: AUTH_AUTO_LOGIN_FAIL,
          message: err.body ? err.body.message : 'Could not match Reshesh Token'
        });
      });
  };
}
function logOut(response) {
  return dispatch => {
    console.log('RESPONSE LOGOUT: ', response);
    let res = response.data;
    dispatch({ type: AUTH_LOGOUT, res });
  };
}
function clearError() {
  return dispatch => dispatch({ type: CLEAR_ERROR });
}

export {
  // authCheck,
  requestLogin,
  registerUser,
  autoLogin,
  // loadUser,
  clearError,
  logOut
};
