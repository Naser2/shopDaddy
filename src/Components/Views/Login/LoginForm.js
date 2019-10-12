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

import Image2 from '../../../../assets/images/junko-tabeis-80th-birthday-4915579445051392-law.gif';

import Image1 from '../../../../assets/images/hey_life_is_good.png';
import Image3 from '../../../../assets/images/gold_fish_printing_receipts_beautifull.gif';
import Image12 from '../../../../assets/images/take_payments_like_pro.gif';
import Image9 from '../../../../assets/images/junko-tabeis-80th-birthday-4915579445051392-law.gif';
import Image4 from '../../../../assets/images/happy_delivery_guy_found.png';
import Image5 from '../../../../assets/images/make_money_from_home.gif';
import Image6 from '../../../../assets/images/street_vendor_beautiful.gif';
import Image7 from '../../../../assets/images/money_fish.gif';
import Image8 from '../../../../assets/images/what_do_you_want_delight_prompt_3.png';
import Image11 from '../../../../assets/images/welcome.gif';

import Image10 from '../../../../assets/images/we_madeit_or_404.png';
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

  images = [
    Image1,
    Image2,
    Image3,
    Image6,
    Image5,

    Image11,
    // Image1,
    Image12,

    Image7,
    Image4,
    Image8,
    Image9,

    Image10,
    Image1
    // Image3,
  ];

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
              Login
            </Title>
          </Body>
        </Header>
        <Logo showLogin={this.props.showLogin} />
        <BackgroundImage
          background={
            this.props.orientation === 'portrait'
              ? styles.imageStylePortrait
              : styles.imageStyleLandscape
            // marginLeft: -50
          }
          imgSrc={this.images}
        />
        <Line style={{ backgroundColor: '#dff0ff' }} />
        <View style={{ marginTop: '0%', width: deviceMeasures('width') }}>
          <Text
            style={{
              color: ' rgb(53, 120, 229)',
              backgroundColor: 'rgb(236, 243, 255)',
              fontSize: 16,
              fontWeight: 400,
              fontFamily: 'RobotoCondensed-Bold',
              padding: 10
            }}
          >
            Loging and shop like a shop daddy!
          </Text>
        </View>
        <View style={{ marginTop: -20 }}>
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
                    { marginTop: 10 }
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
  imageStylePortrait: {
    width: 370,
    width: deviceMeasures('width') ,
    // height: 300
    height: deviceMeasures('height'),
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  imageStyleLandscape: {
    width: 370,
    height: 100
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
