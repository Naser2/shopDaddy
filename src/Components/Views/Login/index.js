import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
import Input from '../../../utils/forms/inputs';
import Logo from './Logo';
import LoginForm from './LoginForm';

import ValidationRules from '../../../utils/forms/validationRules';
import LoadTabs from '../Tabs/index';
import LoginPannel from './LoginPannel';
// import SocialAuthBtns from './SocialAuthBtns';

// import { requestLogin } from '../../Store/Action/action';

import {
  getOrientation,
  setOrientationListener,
  removeOrientationListener
} from '../../../utils/misc';

import { Colors, ImageHeader } from '../../../HocComponents/index.js';
import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';

class LoginIndex extends Component {
  state = {
    orientation: getOrientation(500),
    logoAnimation: false,
    type: 'Login',
    action: 'Login',
    // actionMode: 'I want to register',
    hasErrors: false,
    form: {
      email: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          isEmail: true
        }
      },
      password: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          isRequired: true,
          minLength: 6
        }
      }
    }
  };

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    });
  };

  // updateInput = (name, value) => {
  //   this.setState({
  //     hasErrors: false
  //   });

  //   let formCopy = this.state.form;
  //   formCopy[name].value = value;

  //   ///rules
  //   let rules = formCopy[name].rules;
  //   let valid = ValidationRules(value, rules, formCopy);

  //   formCopy[name].valid = valid;

  //   this.setState({
  //     form: formCopy
  //   });
  // };

  // formHasErrors = () => {
  //   console.log('FORM HAS ERRORS FUNC:', this.state.hasErrors);
  //   if (this.state.hasErrors === true) {
  //     return (
  //       <View style={styles.errorContainer}>
  //         <Text style={styles.errorLabel}>Oops, check your info.</Text>
  //       </View>
  //     );
  //   }
  // };

  // submitUser = () => {
  //   console.log('LOGIN PROPS:', this.props);
  //   const { requestLogin } = this.props;
  //   let isFormValid = true;
  //   let formToSubmit = {};
  //   const formCopy = this.state.form;
  //   console.log('FORM Valid 1:', formCopy);
  //   //LOGIN
  //   isFormValid = isFormValid && formCopy['email'].valid;
  //   isFormValid = isFormValid && formCopy['password'].valid;
  //   formToSubmit['email'] = formCopy['email'].value;
  //   formToSubmit['password'] = formCopy['password'].value;
  //   console.log('FORM Login :', formToSubmit);

  //   console.log('FORM Before IF Valid LOGIN:', isFormValid);

  //   if (isFormValid) {
  //     console.log('inside Valid Statment:', isFormValid);

  //     let email = formToSubmit.email;
  //     let password = formToSubmit.password;

  //     // LoadTabs();
  //     // if(this.state.for){

  //     // }
  //     requestLogin({ email, password }); // Make backend Call
  //     console.log('right after REQUEST MADE:', email, password);
  //     this.setState({
  //       email: '',
  //       password: '',
  //       errors: {},
  //       success: {},
  //       isLoading: true
  //     });
  //   } else {
  //     console.log('FORM HAS ERRORS:', this.state.hasErrors);
  //     this.setState(
  //       {
  //         hasErrors: true
  //       },
  //       () => {
  //         console.log('FORM HAS ERRORS:', this.state.hasErrors);
  //       }
  //     );
  //   }
  // };

  showLogin = () => {
    this.setState({
      logoAnimation: true
    });
  };

  componentDidMount() {
    console.log('LOGIN PROPS:', this.props);
    console.log('FORM HAS ERRORS FUNC:', getOrientation(500));
    // console.log('LOGIN FUNC :', requestLogin);
    // console.log('LOGIN FUNC as PROPS :', this.props.requestLogin);
    // console.log('LOGIN PROPS :', this.props);
    // // console.log('LOGIN STATE :', this.state);
    // if (this.props.isAuthenticated) {
    //   console.log('PROPS AUTHENTICATED :', this.props.isAuthenticated);
    //   // this.props.history.push('/profile');
    // }
  }

  componentWillUnmount() {
    removeOrientationListener();
  }
  componentDidUpdate(prevProps, nextProps) {
    console.log('LOGIN PROPS DID :', this.props);
    console.log(this.props.isAuthenticated);
    if (this.props.isAuthenticated || nextProps.isAuthenticated) {
      console.log(
        'PROPS AUTHENTICATED :',
        this.props.isAuthenticated,
        'NXT PROPS AUTHENTICATED :',
        nextProps.isAuthenticated
      );
      // this.props.history.push('/profile');
    }
  }

  render() {
    console.log('INDEX PROPS Render:', this.props);

    console.log('PROPS INDEX', this.props);
    return (
      <View style={styles.container}>
        {/* <LoginForm requestLogin={this.props.requestLogin}  showLogin={this.showLogin} /> */}
        {this.props.isRegisteredSuccess ? (
          <LoginForm requestLogin={this.props.requestLogin}   showLogin={this.showLogin}/>
        ) : (
          <View>
            <Logo
              orientation={this.state.orientation}
              showLogin={this.showLogin}
            />

            <LoginPannel
              requestLogin={this.props.requestLogin}
              registerUser={this.props.registerUser}
              show={this.state.logoAnimation}
              orientation={this.state.orientation}
              showLogin={this.showLogin}
            />
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center'
    // padding: 15
    // marginTop: 25
  },
  welcome: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
    backgroundColor: 'rgb(181,215,252)',
    padding: 8,
    borderRadius: 10,
    marginBottom: 10
  },
  inputWrapper: {
    marginTop: 8,
    marginBottom: 40
  },
  submitBtnAttr: {
    ...Platform.select({
      ios: {
        marginRight: 10,
        marginLeft: 10,
        backgroundColor: '#1A73E8',
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        borderColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3
      },
      android: {
        marginRight: 40,
        marginLeft: 40,
        marginBottom: 10,
        marginTop: 0,
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: '#1A73E8',
        borderRadius: 3,
        borderWidth: 3,
        borderColor: '#1A73E8'
      }
    })
  },
  regBlueBtn: {
    marginRight: 10,
    marginLeft: 10,
    // marginBottom: 20,
    marginTop: 0,
    paddingTop: 5,
    paddingBottom: 5,
    borderRadius: 3,
    borderWidth: 3,
    borderColor: '#2196F3',
    backgroundColor: '#2196F3',
    fontSize: 20
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  errorContainer: {
    marginBottom: 10,
    marginTop: 30,
    padding: 10,
    backgroundColor: '#f44336'
  },
  errorLabel: {
    color: '#fff',
    textAlignVertical: 'center',
    textAlign: 'center'
  },
  button: {
    ...Platform.select({
      ios: {
        marginBottom: 0
      },
      android: {
        marginBottom: 10,
        marginTop: 10
      }
    })
  },
  imgBackgroundblue: {
    backgroundColor: Colors.lightBlue1
  },
  btnWrap: {
    marginTop: 40,
    // marginTop: 8,
    marginBottom: 40
  }
});
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LogIn);

// Login.propTypes = {
//   requestLogin: PropTypes.func.isRequired
// };
export default LoginIndex;
