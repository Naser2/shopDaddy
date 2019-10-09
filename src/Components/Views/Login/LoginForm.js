import React, { Component } from 'react';
import { Platform, Button } from 'react-native';

import Input from '../../../utils/forms/inputs';

import Container from '../../../HOCS/HOC_Base_Theme/components/Container';
import Content from '../../../HOCS/HOC_Base_Theme/components/Content';
import Header from '../../../HOCS/HOC_Base_Theme/components/Header';
import Title from '../../../HOCS/HOC_Base_Theme/components/Title';
import Text from '../../../HOCS/HOC_Base_Theme/components/Text';
import Icon from '../../../HOCS/HOC_Base_Theme/components/Icon';
import Body from '../../../HOCS/HOC_Base_Theme/components/Body';
import Left from '../../../HOCS/HOC_Base_Theme/components/Left';
import Right from '../../../HOCS/HOC_Base_Theme/components/Right';
import Item from '../../../HOCS/HOC_Base_Theme/components/Item';
import Button2 from '../../../HOCS/HOC_Base_Theme/components/Button';
import View from '../../../HOCS/HOC_Base_Theme/components/View';
import styles2 from './styles';
// import ValidationRules from '../../../../utils/forms/validationRules';
import commonColor from '../../../HOCS/HOC_Base_Theme/variables/commonColor';
import BackgroundImage from '../../../HOCS/HOC_Base_Theme/components/ImageAdHeader';
import { deviceMeasures } from '../../../utils/misc';

import {
  StyleSheet,
  // Text,
  // View,
  // Button,
  TouchableOpacity
  // ScrollView
} from 'react-native';

import ValidationRules from '../../../utils/forms/validationRules';
import LoadTabs from '../Tabs/index';

import {
  getOrientation,
  setOrientationListener,
  removeOrientationListener
} from '../../../utils/misc';

import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';
import Line from '../../../HOCS/HOC_Base_Theme/components/Line';

import { setTokens } from '../../../utils/misc';
import Image1 from '../../../../assets/images/what_do_you_want_delight_prompt_3.png';
import Image2 from '../../../../assets/images/junko-tabeis-80th-birthday-4915579445051392-law.gif';
import Image3 from '../../../../assets/images/we_madeit_or_404.png';
import Logo from './Logo';

class LoginForm extends Component {
  state = {
    currentImgIndex: 0,
    type: 'Login',
    action: 'Login',
    actionMode: 'Please Login to continue',
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

  images = [Image1, Image2, Image3];

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

  formHasErrors = () =>
    this.state.hasErrors ? (
      <View
        style={([styles.errorContainer], { marginBottom: 0, marginTop: 0 })}
      >
        <Text style={[styles.errorLabel, { paddingLeft: -4 }]}>
          Opps, check your info
        </Text>
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

    const { requestLogin } = this.props;

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
      }
    } else {
      this.setState({
        hasErrors: true
      });
    }
  };

  render() {
    console.log('Device Height: ', deviceMeasures('height'));

    return (
      <View
        style={{ backgroundColor: '#ffff', width: '100%', flex: 1, padding: 0 }}
      >
        <Header
          androidStatusBarColor={commonColor.statusBarLight}
          style={
            Platform.OS === 'ios' ? styles2.iosHeaderNoPadding : styles2.aHeader
          }
        >
          <Body>
            <Title
              style={
                Platform.OS === 'ios'
                  ? [styles2.iosHeaderTitleBoldBlack, styles2.black]
                  : [, styles2.black]
              }
              title={'Sign In'}
            >
              Welcome
            </Title>
          </Body>
        </Header>
        <BackgroundImage
          text={' Welcome to Shop Daddy'}
          textStyle={{
            flexWrap: 'wrap',
            // fontWeight:
            // width: '40%',
            fontSize: 23,
            color: 'rgb(157, 52, 227)',
            marginTop: '30%',
            elevation: 3,
            fontFamily: 'RobotoCondensed-Bold'
          }}
          // textViewStyle={{
          //   // alignItems: 'center',
          //   marginTop: '33%',
          //   // backgroundColor: '#ffffeb',
          //   borderWidth: 1,
          //   // borderRadius: 25,
          //   height: 23,
          //   alignSelf: 'flex-start',
          //   // flexDirection: 'row',
          //   // elevation: 2,
          //   // shadowColor: '#000',
          //   shadowOffset: { width: 0, height: 2 },
          //   shadowOpacity: 0.2,
          //   shadowRadius: 1.2,
          //   alignItems: 'center',
          //   // justifyContent: 'space-between',
          //   borderColor: '#ffffeb'
          // }}
          background={{
            height: deviceMeasures('height') / 2.8,
            width: deviceMeasures('width'),
            marginLeft: -10
          }}
          imgSrc={this.images}
        />
        <Logo showLogin={this.props.showLogin} />
        <View style={{ marginTop: -12 }}>
          <Line
            style={{ backgroundColor: '#5d26de', height: 20, width: ' 120%' }}
          />
          {/* <SocialAuthBtns /> */}
          {/* <Line style={{ backgroundColor: '#5d26de', height: 2 }} /> */}
        </View>
        <View>
          <Title
            style={
              Platform.OS === 'ios'
                ? [
                    styles2.iosHeaderTitleBold,
                    styles2.sucsess,
                    { marginTop: 20 }
                  ]
                : [styles2.aHeaderTitleBold, styles2.sucsess]
            }
            title={'Social Sign In'}
          >
            Login
          </Title>
        </View>

        <View style={styles.formInputContainer}>
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
                alignSelf: 'center',
                marginTop: '6%',
                backgroundColor: 'transparent',
                // backgroundColor: '#007aff',
                backgroundColor: '#007aff',
                width: '70%',
                height: 40,
                borderBottomRightRadius: 20,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
                borderRadius: 23,
                borderWidth: 1,
                borderColor: 'blue',
                alignContent: 'center'
              }}
              title={this.state.action}
              onPress={this.submitUser}
            >
              <Text
                style={{
                  color: '#FFFF',
                  fontFamily: 'Roboto-Medium',
                  textAlign: 'center',
                  fontSize: 20,
                  alignSelf: 'center',
                  padding: 8
                }}
              >
                {this.state.action}
              </Text>
            </TouchableOpacity>
          </View>

          <View>
            <Button
              title="I'll do it later"
              color=" rgba(0,0,0,.54)"
              onPress={() => LoadTabs(false)}
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  formInputContainer: {
    // width:360,
    minHeight: 400,
    marginTop: 0,
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
    color: '#1b8ffe'
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
    fontSize: 20
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

export default LoginForm;
