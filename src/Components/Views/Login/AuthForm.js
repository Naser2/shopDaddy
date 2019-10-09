import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView
} from 'react-native';

import Input from '../../../utils/forms/inputs';
import SocialAuthBtns from './SocialAuthBtns';
// import MyButton from '../../../HOCS/HOC_Base_Theme/components/Button';

import ValidationRules from '../../../utils/forms/validationRules';
import LoadTabs from '../Tabs/index';

// import { requestLogin } from '../../store/action';
import {
  getOrientation,
  setOrientationListener,
  removeOrientationListener
} from '../../../utils/misc';

// import { Colors, ImageHeader } from '../../../HocComponents/index.js';
import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';
import Line from '../../../HOCS/HOC_Base_Theme/components/Line';
// import { requestLogin,  } from '../../Store/Action/action';
import { connect } from 'react-redux';
// import { signUp, signIn } from '../../Store/actions/user_actions';
import { bindActionCreators } from 'redux';
// import Line from '../../../HOCS/HOC_Base_Theme/components/Line';

import { setTokens } from '../../../utils/misc';
import Logo from './Logo';

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
    if (!this.props.User.userData.uid) {
      this.setState({ hasErrors: true });
    } else {
      setTokens(this.props.User.userData, () => {
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
        {/* <Logo
          orientation={this.props.orientation}
          showLogin={this.props.showLogin}
        /> */}
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

        <View style={{marginBottom:16}}>
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
      // </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  formInputContainer: {
    // width:360,
    minHeight: 400,
    marginTop: 5,
    marginLeft: '8%',
    marginRight: '8%'
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

// function mapDispatchToProps(dispatch){
// return bindActionCreators({signUp,signIn},dispatch)
// }

// export default connect(mapStateToProps,mapDispatchToProps)(LoginForm)
export default AuthForm;
