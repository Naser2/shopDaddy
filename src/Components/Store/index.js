import { compose } from 'redux';
import { connect } from 'react-redux';
import React from 'react';
import { Navigation } from 'react-native-navigation';
import { requestLogin, registerUser, checkAuth } from './Action/action';

import LoginIndex from '../Views/Login/index'
import SignupComponent from '../Views/Signup/index.js';

// import WelcomeComponent from './Views/Welcome';

function mapStateToProps(state) {
  const { auth } = state;

  return {
    isLoading: auth.loading,
    error: auth.error,
    success: auth.success,
    isRegisteredSuccess: auth.isRegisteredSuccess,
    isVerifying: auth.isVerifying,
    isAuthenticated: auth.isAuthenticated
  };
}

export const Auth = compose(
  connect(
    mapStateToProps,
    {
      requestLogin,
      registerUser
    }
  )
)(LoginIndex);

export const Signup = compose(
  connect(
    mapStateToProps,
    {
      registerUser
    }
  )
)(SignupComponent);


// export const Welcome = compose(
//   connect(
//     mapStateToProps,
//     { 
//       authCheck
   
//     }
//   )
// )(WelcomeComponent);
