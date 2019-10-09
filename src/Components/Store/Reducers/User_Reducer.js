import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_CHECK,
  LOGOUT_USER,
  CLEAR_ERROR,
  AUTH_REGISTER,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_SUCCESS,
  GET_USER_POSTS,
  UPDATE_USER_POSTS,
  DELETE_USER_POST,
  AUTH_AUTO_LOGIN,
  AUTH_AUTO_LOGIN_SUCCESS,
  AUTH_AUTO_LOGIN_FAIL,
} from '../Action/actionTypes';
import { TOKEN_KEY } from '../../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  user: {},
  loading: false,
  isAuthenticated: false,
  loaded: false,
  error: false,
  errorMessage: '',
  success: false,
  successMessage: ''
};

function checkAuth(state) {
  let token = AsyncStorage.getItem(TOKEN_KEY);
  console.log('RETRIVED TOKEN REDUCER : ', token);
  console.log('RETRIVED TRUE : ', !!AsyncStorage.getItem(TOKEN_KEY));
  return {
    ...state,
    isAuthenticated: !!AsyncStorage.getItem(TOKEN_KEY)
  };
}

function isRequest(state) {
  return {
    ...state,
    loading: true
  };
}

function isRequestSuccess(state, user) {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    user,
    // isAuthenticated: true,
    isSuccess: true
  };
}
function isRequestRegisterSuccess(state, user) {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    user: {
      uid: action.payload.localId || false,
      token: action.payload.idToken || false,
      refToken: action.payload.refreshToken || false
    },
    isAuthenticated: false,
    isRegisteredSuccess: true
  };
}
function isRequesLogintSuccess(state, user) {
  return {
    ...state,
    loading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    user: {
      uid: action.payload.localId || false,
      token: action.payload.idToken || false,
      refToken: action.payload.refreshToken || false
    },
    isAuthenticated: true,
    isSuccess: true
  };
}

function isRequestFailed(state, payload) {
  return {
    ...state,
    loading: false,
    loaded: false,
    error: true,
    errorMessage: payload.message
  };
}
function isRequesAutoLoginSuccess(state, payload) {
  return {
    ...state,
    user: {
      uid: action.payload.user_id || false,
      token: action.payload.id_token || false,
      refToken: action.payload.refresh_token || false
    },
    loading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    isAuthenticated: true,
    isSuccess: true
  };
}

function logout(state) {
  AsyncStorage.removeItem(TOKEN_KEY);
  return {
    ...state,
    isAuthenticated: false,
    user: null
  };
}

function authReducer(state = initialState, action) {
  // console.log('REDUCER - Action type: ', action && action.type);
  switch (action.type) {
//LOGIN
    case AUTH_LOGIN:
      return isRequest(state);
    case AUTH_LOGIN_SUCCESS:
      return isRequesLogintSuccess(state, action.user);
    case AUTH_LOGIN_FAILED:
      return isRequestFailed(state, action);
//REGISTER
    case AUTH_REGISTER:
      return isRequest(state);
    case AUTH_REGISTER_SUCCESS:
      return isRequestRegisterSuccess(state, action.user);
    case AUTH_REGISTER_FAILED:
      return isRequestFailed(state, action);
//LOGIN
    case AUTH_AUTO_LOGIN:
      return isRequesAutoLogin(state, action);
    case AUTH_AUTO_LOGIN_SUCCESS:
      return isRequesAutoLoginSuccess(state, action);
    case AUTH_AUTO_LOGIN_FAIL:
      return isRequesAutoLoginFail(state, action);
//AUTH CHECK
    case AUTH_CHECK:
      return checkAuth(state);
    case LOGOUT_USER:
      return logout(state);
    case CLEAR_ERROR:
      return { ...state, error: false, errorMessage: '' };

    //ARTICLES
    case GET_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case UPDATE_USER_POSTS:
      return { ...state, userPosts: action.payload };
    case DELETE_USER_POST:
      return { ...state, ...action.payload };

    default:
      return { ...state };
  }
}

export default authReducer;
