import React, { Component } from 'react';
import { deviceMeasures } from '../../../utils/misc';
import {
  View,
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ActivityIndicator
} from 'react-native';
import Loader from '../../../../assets/images/colorful_loader.gif';
import Coffee from '../../../../assets/images/holding_coffee_profile_bnice.png';
import StaticLogo from '../../../../assets/StaticLogo/StaticLogo';

import Image1 from '../../../../assets/images/dancing_old_man/dacing_old_man1.png';
import Image2 from '../../../../assets/images/dancing_old_man/dacing_old_man2.png';
import Image3 from '../../../../assets/images/dancing_old_man/dacing_old_man3.png';
import Image4 from '../../../../assets/images/dancing_old_man/dacing_old_man4.png';
import Image5 from '../../../../assets/images/dancing_old_man/dacing_old_man5.png';
import Image6 from '../../../../assets/images/dancing_old_man/dacing_old_man6.png';
import Image7 from '../../../../assets/images/dancing_old_man/dacing_old_man7.png';
import Image8 from '../../../../assets/images/dancing_old_man/dacing_old_man8.png';
import Image9 from '../../../../assets/images/dancing_old_man/dacing_old_man9.png';
import Image10 from '../../../../assets/images/dancing_old_man/dacing_old_man10.png';
import Image11 from '../../../../assets/images/dancing_old_man/dacing_old_man11.png';
import Image12 from '../../../../assets/images/dancing_old_man/dacing_old_man12.png';
import Image13 from '../../../../assets/images/dancing_old_man/dacing_old_man13.png';
import Image14 from '../../../../assets/images/dancing_old_man/dacing_old_man14.png';
import Image15 from '../../../../assets/images/dancing_old_man/dacing_old_man15.png';
import Image16 from '../../../../assets/images/dancing_old_man/dacing_old_man16.png';
import Image17 from '../../../../assets/images/dancing_old_man/dacing_old_man17.png';
import Image18 from '../../../../assets/images/dancing_old_man/dacing_old_man18.png';
import Image19 from '../../../../assets/images/dancing_old_man/dacing_old_man19.png';
import Image20 from '../../../../assets/images/dancing_old_man/dacing_old_man20.png';
import Image21 from '../../../../assets/images/dancing_old_man/dacing_old_man21.png';
import Image22 from '../../../../assets/images/dancing_old_man/dacing_old_man22.png';
import Image23 from '../../../../assets/images/dancing_old_man/dacing_old_man23.png';
import Image24 from '../../../../assets/images/dancing_old_man/dacing_old_man24.png';
import Image25 from '../../../../assets/images/dancing_old_man/dacing_old_man25.png';
import Image26 from '../../../../assets/images/dancing_old_man/dacing_old_man26.png';
import Image27 from '../../../../assets/images/dancing_old_man/dacing_old_man27.png';

import ImageAdHeader from '../../../HOCS/HOC_Base_Theme/components/ImageAdHeader';
import MakeGif from '../../../HOCS/HOC_Base_Theme/components/MakeGif';
import Input from '../../../utils/forms/inputs';
import Logo from './Logo';
import LoginForm from './LoginForm';
import LoginPannel from './LoginPannel';

import {
  getOrientation,
  removeOrientationListener,
  setTokens,
  getTokens
} from '../../../utils/misc';

import { Colors, ImageHeader } from '../../../HocComponents/index.js';
import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';
import LoadTabs from '../Tabs/index';

class LoginIndex extends Component {
  state = {
    orientation: getOrientation(500),
    logoAnimation: false,
    type: 'Login',
    action: 'Login',

    loading: true
    // actionMode: 'I want to register'
  };
  images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27
    // Coffee
  ];

  changeOrientation = () => {
    this.setState({
      orientation: getOrientation(500)
    });
  };

  showLogin = () => {
    this.setState({
      logoAnimation: true
    });
  };

  manageAccess = () => {
    if (!this.props.isAuthenticated && this.props.user.uid) {
      redirectTo(this.props.componentId, 'Auth'); // push back to AUTH
    } else {
      setTokens(this.props.user, () => {
        this.setState({ hasErrors: false });
        LoadTabs();
      });
    }
  };

  componentWillUnmount() {
    removeOrientationListener();
  }
  componentDidUpdate(prevProps, nextProps) {
    console.log('LOGIN PROPS DID :', this.props);
    console.log(this.props.isAuthenticated);
    if (this.props.isAuthenticated || nextProps.isAuthenticated) {
      console.log('NXT PROPS AUTHENTICATED :', nextProps.isAuthenticated);
      this.manageAccess();
    }
  }

  componentDidMount() {
    getTokens(values => {
      console.log('VALUES : ', values);
    });
  }

  render() {
    console.log('INDEX PROPS Render:', this.state.orientation);

    console.log('PROPS INDEX', this.props);

    if (this.state.loading) {
      return (
        <View style={styles.loading}>
          <View style={{ marginTop: deviceMeasures('height') / 9 }}>
            <StaticLogo daddyColor={{ color: '#FFF' }} />
            <View
              style={{
                marginTop: deviceMeasures('height') / 10.5,
                marginBottom: deviceMeasures('height') / 23
              }}
            >
              <ImageAdHeader
                imgSrc={Loader}
                background={
                  this.state.orientation === 'portrait'
                    ? styles.imageStylePortrait
                    : styles.imageStyleLandscape
                  // marginLeft: -50
                }
              />
              <MakeGif
                imgSrc={this.images}
                background={
                  this.state.orientation === 'portrait'
                    ? {
                        resizeMode: 'cover',
                        // flex: 1,
                        alignSelf: 'center',
                        marginTop: 0,
                        width: 180,
                        // // width: deviceMeasures('width') - 1,
                        height: 180
                      }
                    : styles.imageStyleLandscape
                  // marginLeft: -50
                }
              />
            </View>
            <Text style={styles.loadingText}> Loading your stuff... ..</Text>
            <Text style={styles.loadingText2}> Please wait.</Text>
            <View style={styles.WaitView}>
              <Text style={styles.Wait}> Getting info </Text>
            </View>
          </View>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        {this.props.isRegisteredSuccess ? (
          <LoginForm
            requestLogin={this.props.requestLogin}
            showLogin={this.showLogin}
          />
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
    marginTop: '45%',
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center'
  },
  loading: {
    flex: 1,
    backgroundColor: '#039be5',
    alignItems: 'center',

    // justifyContent: 'center',
    color: '#FFFF'
  },
  imageStylePortrait: {
    resizeMode: 'cover',
    // flex: 1,
    alignSelf: 'center',
    marginTop: 0,
    width: 80,
    // // width: deviceMeasures('width') - 1,
    height: 80
  },
  loadingText: {
    paddingBottom: 12,
    flexWrap: 'wrap',
    fontSize: 35,
    color: '#FFF',
    // marginTop: '25%',
    elevation: 2,
    fontFamily: 'RobotoCondensed-Bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  loadingText2: {
    paddingBottom: 25,
    flexWrap: 'wrap',
    fontSize: 35,
    color: '#FFF',
    // marginTop: '25%',
    elevation: 2,
    fontFamily: 'RobotoCondensed-Bold',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },

  WaitView: {
    borderWidth: 1,
    width: deviceMeasures('width') / 2.5,
    height: 50,
    borderRadius: 8,
    borderColor: '#FFF',
    backgroundColor: '#FFF',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  Wait: {
    padding: 10,

    color: '#039be5',
    flexWrap: 'wrap',
    fontSize: 20,
    // color: 'rgb(181,215,252)',
    // marginTop: '25%',
    // elevation: 2,
    fontFamily: 'RobotoCondensed-Bold'
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
