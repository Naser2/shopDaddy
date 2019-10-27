import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Platform
} from 'react-native';

import Input from '../../../utils/forms/inputs';
import SocialAuthBtns from './SocialAuthBtns';
import ValidationRules from '../../../utils/forms/validationRules';
import LoadTabs from '../Tabs/index.js';
import {
  getOrientation,
  setOrientationListener,
  removeOrientationListener
} from '../../../utils/misc';
import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';
import Line from '../../../HOCS/HOC_Base_Theme/components/Line';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTokens } from '../../../utils/misc';
import Logo from './Logo';
import styles2 from './styles';
import { deviceMeasures } from '../../../utils/misc';

class AuthForm extends Component {
  state = {
    type: 'Login',
    action: 'Login',
    actionMode: "Don't have an account? Register",
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
      },
      confirmPassword: {
        value: '',
        valid: false,
        type: 'textinput',
        rules: {
          confirmPass: 'password'
        }
      }
    }
  };

  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  };

  confirmPassword = () =>
    this.state.type != 'Login' ? (
      <Input
        style={inputTheme()}
        placeholder="Confirm your password"
        type={this.state.form.confirmPassword.type}
        value={this.state.form.confirmPassword.value}
        onChangeText={value => this.updateInput('confirmPassword', value)}
        secureTextEntry
      />
    ) : null;

  changeFormType = () => {
    const type = this.state.type;
    this.setState({
      type: type === 'Login' ? 'Register' : 'Login',
      action: type === 'Login' ? 'Register' : 'Login',
      actionMode:
        type === 'Login' ? ' Login' : "Don't have an account? Register"
    });
  };

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View style={styles.errorContainer}>
        <Text style={styles.errorLabel}>Opps, check your info</Text>
      </View>
    ) : null;

  manageAccess = () => {
    if (!this.props.user.auth.uid) {
      this.setState({ hasErrors: true });
    } else {
      setTokens(this.props.user.auth, () => {
        this.setState({ hasErrors: false });
        LoadTabs(true);
      });
    }
  };

  submitUser = () => {
    let isFormValid = true;
    let formToSubmit = {};
    const formCopy = this.state.form;

    const { requestLogin, registerUser } = this.props;

    for (let key in formCopy) {
      if (this.state.type === 'Login') {
        if (key !== 'confirmPassword') {
          isFormValid = isFormValid && formCopy[key].valid;
          formToSubmit[key] = formCopy[key].value;
        }
      } else {
        isFormValid = isFormValid && formCopy[key].valid;
        formToSubmit[key] = formCopy[key].value;
      }
    }

    if (isFormValid) {
      if (this.state.type === 'Login') {
        let email = formToSubmit.email;
        let password = formToSubmit.password;

        requestLogin({ email, password });
        // this.props.signIn(formToSubmit).then(()=>{
        //     this.manageAccess()
        // })
      } else {
        let email = formToSubmit.email;
        let password = formToSubmit.password;
        // let  mobile = formToSubmit.password;
        const data = [email, password];
        console.log('ARRAY: ', data, 'Form ToSubmit: ', formToSubmit);
        registerUser(formToSubmit);
        // .then(()=>{
        //     // this.manageAccess()
        // })
      }
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  render() {
    console.log('FUNC PROPS TYPE:', this.props.registerUser);
    console.log('FUNC PROPS :', this.props);
    return (
      // <ScrollView>

      <View style={styles.formInputContainer}>
        <Line
          style={{
            backgroundColor: '#1b8ffe', // deep blue
            // backgroundColor: 'rgb(197,196,140)',
            height: 13,
            width: deviceMeasures('width'),
            marginTop: Platform.OS === 'ios' ? -30 : 0
          }}
        />

        <View
          style={{
            width: deviceMeasures('width'),
            alignSelf: 'center',
            marginTop: Platform.OS === 'ios' ? 0 : 0

            // backgroundColor: 'purple'
          }}
        >
          <View
            style={{
              height: 54,
              width: deviceMeasures('width'),
              alignSelf: 'center',
              // paddinTop: Platform.OS === 'ios' ? 20 : 10,
              // paddinBottom: Platform.OS === 'ios' ?20 : 10
              // backgroundColor: 'rgb(218,219,201)',
              // backgroundColor: '#dff0ff'
              // backgroundColor: 'rgb(227,15,126)'
              backgroundColor: '#609'
            }}
          >
            <Text
              style={
                Platform.OS === 'ios'
                  ? [
                      styles2.iosHeaderTitleBold,
                      styles2.sucsess,
                      {
                        // color: '#FFFF',
                        fontSize: 34,
                        fontFamily: 'RobotoCondensed-Bold',
                        fontWeight: '600',
                        textAlign: 'center',
                        paddingTop: 7,
                        paddingLeft: 7,
                        paddingRight: 7,
                        elevation: 10,
                        shadowColor: '#000',
                        // shadowColor: 'orange',
                        shadowOffset: { width: 5, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.2
                      }
                    ]
                  : [
                      styles2.aHeaderTitleBold,
                      styles2.sucsess,
                      {
                        elevation: 2,
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.2,
                        shadowRadius: 1.2
                      }
                    ]
              }
              title={'Social Sign In'}
            >
              Welcome
            </Text>
            {/* <Line
              style={{
                // marginTop:-2,
                // backgroundColor: '#dff0ff',
                backgroundColor: '#fff',
                height: 0.5,
                width: deviceMeasures('width') / 3
              }}
            /> */}
          </View>
          <View>
            <Line
              style={{
                // backgroundColor: 'green',
                backgroundColor: '#40a1f6',
                height: 20,
                width: deviceMeasures('width')
              }}
            />
            <Line
              style={{
                backgroundColor: '#d7e5f1',
                height: 1,

                width: deviceMeasures('width')
              }}
            />
            <Line
              style={{
                backgroundColor: '#ae93ed',
                height: 10,

                width: deviceMeasures('width')
              }}
            />
          </View>
          <Line
            style={{
              backgroundColor: '#d7e5f1',
              height: 6,

              width: deviceMeasures('width')
            }}
          />
        </View>

        <View style={{ marginTop: 15 }}>
          <Text
            style={[
              styles.changeForm,
              {
                marginBottom: 0,
                marginTop: 0,
                fontFamily: 'RobotoCondensed-Bold',
                fontWeight: '500',
                fontSize: 25,
                color: 'black',
                shadowColor: 'lightblue',

                bottom: 0,
                lineHeight: 0,
                shadowOffset: { width: 0.5, height: 2 },
                shadowOpacity: 0.5
              }
            ]}
          >
            {this.state.action}
          </Text>
        </View>
        <View
          style={{
            // marginTop: deviceMeasures('height') / 22,
            // width: deviceMeasures('width') / 1.2,
            // alignContent: 'center',
            marginLeft: deviceMeasures('width') / 10,
            marginRight: deviceMeasures('width') / 10
          }}
        >
          <Input
            style={inputTheme()}
            placeholder="Enter your email"
            type={this.state.form.email.type}
            value={this.state.form.email.value}
            onChangeText={value => this.updateInput('email', value)}
            autoCapitalize={'none'}
            keyboardType={'email-address'}
          />

          <Input
            style={inputTheme()}
            placeholder="Enter your password"
            type={this.state.form.password.type}
            value={this.state.form.password.value}
            onChangeText={value => this.updateInput('password', value)}
            secureTextEntry
          />

          {this.confirmPassword()}
          {this.formHasErrors()}

          <View
            style={
              this.props.platform === 'android'
                ? styles.buttonStyleAndroid
                : styles.buttonStyleIos
            }
          >
            <TouchableOpacity
              style={{
                // borderWidth: 0.5,
                // borderColor: '#fd9727',
                // borderBottomRightRadius: 10,
                // borderBottomLeftRadius: 10,
                // borderTopLeftRadius: 10,
                // borderTopRightRadius: 10,
                // backgroundColor: '#ffff',
                alignSelf: 'center',
                // width: '40%',
                marginTop: '4%'
              }}
              title={this.state.action}
              onPress={this.submitUser}
            >
              <Text style={styles.orangeText}>{this.state.action}</Text>
            </TouchableOpacity>
          </View>

          <View
            style={
              this.props.platform === 'android'
                ? styles.buttonStyleAndroid
                : styles.buttonStyleIos
            }
          >
            <TouchableOpacity onPress={this.changeFormType}>
              {/* title={'Hello'}
            color="lightgrey" */}

              <Text style={styles.changeForm}>{this.state.actionMode}</Text>
            </TouchableOpacity>
          </View>

          <View style={{ marginBottom: 10 }}>
            <Button
              title="I'll do it later"
              color=" rgba(0,0,0,.54)"
              onPress={() => LoadTabs(false)}
            />
          </View>

          <View style={{ marginTop: 0 }}>
            <Line style={{ backgroundColor: '#1b8ffe', height: 2 }} />
            <SocialAuthBtns />
            <Line style={{ backgroundColor: '#5d26de', height: 2 }} />
          </View>
        </View>
      </View>
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formInputContainer: {
    // width:360,
    minHeight: 400,
    marginLeft: '8%',
    marginRight: '8%',
    marginTop: '0%'
  },
  buttonStyleAndroid: {
    marginBottom: 10,
    marginTop: 10
  },
  buttonStyleIos: {
    marginBottom: 0
  },
  changeForm: {
    textAlign: 'center',
    fontFamily: 'RobotoCondensed-Light',
    // fontFamily: 'Google Sans,sans-serif',
    fontSize: 20,
    lineHeight: 54,
    fontWeight: '400',
    bottom: 2,
    // color: 'purple'
    color: '#1b8ffe',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 1
  },
  transparentOrangeBtn: {
    borderWidth: 2,
    borderColor: '#fd9727',
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    backgroundColor: '#ffff',
    alignSelf: 'center',
    width: '40%',
    marginTop: '2%'
  },
  orangeText: {
    fontFamily: 'Roboto-Medium',
    color: '#fd9727',
    textAlign: 'center',
    fontSize: 20,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
    // lineHeight: 20
  },
  errorContainer: {
    // backgroundColor: '#fd9727',
    marginBottom: 8,
    marginTop: 10
  },
  errorLabel: {
    // color: 'red',
    fontFamily: 'Roboto-Black',
    color: '#ff5252',
    fontSize: 16,
    // lineHeight: 16,
    paddingRight: 20,
    position: 'relative',
    top: 4
  }
});

function mapStateToProps(state) {
  return {
    User: state.User
  };
}

export default AuthForm;
