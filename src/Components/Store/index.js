import { compose } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { requestLogin, registerUser, autoLogin, logOut } from './Action/action';

import LoginIndex from '../Views/Login/index';

import SignupComponent from '../Views/Signup/index.js';
import UserProfileIndex from '../Views/Profile/Profile';
import SideDrawerComponent from '../Views/SideDrawer/index';

// import WelcomeComponent from './Views/Welcome';

function mapStateToProps(state) {
  const { auth } = state;

  return {
    user: auth.user,
    isLoading: auth.isLoading,
    error: auth.error,
    success: auth.success,
    isRegisteredSuccess: auth.isRegisteredSuccess,
    isVerifying: auth.isVerifying,
    message: auth.message,
    isAuthenticated: auth.isAuthenticated
  };
}

export const Auth = compose(
  connect(
    mapStateToProps,
    { registerUser, requestLogin, autoLogin }
  )
)(LoginIndex);

export const Signup = compose(
  connect(
    mapStateToProps,
    { registerUser, requestLogin, autoLogin }
  )
)(SignupComponent);

export const SideDrawer = compose(
  connect(
    mapStateToProps,
    { logOut }
  )
)(SideDrawerComponent);

export const UserProfile = compose(
  connect(
    mapStateToProps,
    {
      yourProps: 'naviguate to post a request, request..., Logout ',
      logOut
    }
  )
)(UserProfileIndex);
