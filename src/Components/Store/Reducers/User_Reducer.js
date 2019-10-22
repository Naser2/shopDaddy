import {
  AUTH_LOGIN,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_FAILED,
  AUTH_CHECK,
  AUTH_LOGOUT,
  CLEAR_ERROR,
  AUTH_REGISTER,
  AUTH_REGISTER_FAILED,
  AUTH_REGISTER_SUCCESS,
  GET_USER_POSTS,
  UPDATE_USER_POSTS,
  DELETE_USER_POST,
  AUTH_AUTO_LOGIN,
  AUTH_AUTO_LOGIN_SUCCESS,
  AUTH_AUTO_LOGIN_FAIL
} from '../Action/actionTypes';
import { TOKEN_KEY } from '../../../utils/constants';
import AsyncStorage from '@react-native-community/async-storage';

const initialState = {
  user: {
   data: {
      uid: false,
      token: false,
      refToken: false
    }
  },
  isRegisteredSuccess: false,
  isVerifying: false,
  message: 'No message yet',
  isLoading: false,
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
    isAuthenticated: !!token
  };
}

function isRequest(state) {
  return {
    ...state,
    isLoading: true,
    isVerifying: true
  };
}

// function isRequestSuccess(state, user) {
//   return {
//     ...state,
//     loading: false,
//     loaded: true,
//     error: false,
//     errorMessage: '',
//     user: 'Getting user attributes ...',
//     // isAuthenticated: true,
//     isSuccess: true,
//     isLoading: 'Finishing load'
//   };
// }
function isRequestRegisterSuccess(state, user) {
  return {
    ...state,
    isLoading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    // user,
    user: {
      data: {
        uid: user.localId,
        token: user.idToken,
        expires_in: user.expires_in,
        refToken: user.refreshToken,
        token_type: user.token_type
      }
    },
    isAuthenticated: false,
    isRegisteredSuccess: true,
    message:
      'Congrats! We sent you an mail, please, go click to confirm your email!',
    isVerifying: 'done'
  };
}
function isRequesLogintSuccess(state, user) {
  return {
    ...state,
    isLoading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    user: {
      data: {
        uid: user.localId,
        token: user.idToken,
        refToken: user.refreshToken
      }
    },
    isAuthenticated: true,
    isSuccess: true,
    isVerifying: 'done'
  };
}

function isRequestFailed(state, error) {
  return {
    ...state,
    isLoading: false,
    loaded: false,
    error: true,
    errorMessage: error.message,
    isVerifying: false
  };
}
function isRequesAutoLogin(state) {
  return {
    ...state,
    user: 'Processing request',
    isAuthenticated: 'Checking now',
    isLoading: true,
    loaded: false,
    isVerifying: true,
    error: false,
    errorMessage: '',
    isSuccess: false,
    message: 'Welcome back!'
  };
}
function isRequesAutoLoginSuccess(state, user) {
  return {
    ...state,
    user: {
      data: {
        uid: user.user_id,
        token: user.id_token,
        refToken: user.refresh_token
      }
    },
    isAuthenticated: true,
    message: 'Welcome back!',
    isLoading: false,
    loaded: true,
    error: false,
    errorMessage: '',
    isSuccess: true
  };
}

function isLogout(state) {
  return {
    ...state,
    isAuthenticated: false,
    user: null,
    isLoading: false,
    message: "You're successfuly loged-out"
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
      return isRequesAutoLogin(state);
    case AUTH_AUTO_LOGIN_SUCCESS:
      return isRequesAutoLoginSuccess(state, action.user);
    case AUTH_AUTO_LOGIN_FAIL:
      return isRequesAutoLoginFail(state);
    //AUTH CHECK
    case AUTH_CHECK:
      return checkAuth(state);
    case AUTH_LOGOUT:
      return isLogout(state);
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
