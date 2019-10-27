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
import StaticLogo from '../../../../assets/StaticLogo/StaticLogo';

import { AnimatedImages } from './AnimatedImages';
import Loading from '../ActivityIndicator/Loading';
import Logo from './Logo';
import LoginForm from './LoginForm';
import LoginPannel from './LoginPannel';
import LoadTabs from '../Tabs/index';

import {
  getOrientation,
  removeOrientationListener,
  setTokens,
  getTokens
} from '../../../utils/misc';

class LoginIndex extends Component {
  state = {
    orientation: getOrientation(500),
    logoAnimation: false,
    type: 'Login',
    action: 'Login',

    loading: true
    // actionMode: 'I want to register'
  };

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
    console.log('MANAGE ACCESS LOGIN INDEX ');
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
  // componentDidUpdate(prevProps, nextProps) {
  //   console.log('LOGIN PROPS DID :', this.props);
  //   console.log(this.props.isAuthenticated);
  //   if (this.props.isAuthenticated || nextProps.isAuthenticated) {
  //     console.log('NXT PROPS AUTHENTICATED :', nextProps.isAuthenticated);
  //     this.manageAccess();
  //   }
  // }

  componentDidMount() {
    console.log('DID MOUN LOGIN INDEX');
    console.log('CHECK PROPS: ', this.props);
    getTokens(values => {
      console.log('CHECK VALUES : ', values);
      if (values[0][1] === null) {
        console.log('VALUES are NULL : ');
        this.setState({ loading: false });
      } else {
        console.log(
          'VALUES are TRUE : ',
          values[1][1],
          'Should call Auto Sign :',
          this.props.autoLogin
        );
        this.props.autoLogin(values[1][1]).then(() => {
          console.log('IS THERE A TOKEN  : ', this.props.user.data.token);
          if (!this.props.user.data.token) {
            this.setState({ loading: false });
            //push to main Auth screen
          } else {
            //push to next default screen
            setTokens(this.props.user.data, () => {
              console.log('LOad Tab SHould Fire!!!');
              LoadTabs();
            });
          }
        });
      }
      console.log('VALUES : ', values);
    });
  }

  render() {
    console.log('INDEX PROPS Render:', this.state.orientation);

    console.log('PROPS INDEX', this.props);

    if (this.state.loading) {
      return Loading();
      // <View style={styles.loading}>
      //   <View
      //     style={{
      //       //  marginTop: deviceMeasures('height') / 9
      //       marginTop: 240
      //     }}
      //   >
      //     {/* <StaticLogo daddyColor={{ color: '#FFF' }} /> */}
      //     <View
      //       style={
      //         {
      //           // marginTop: deviceMeasures('height') / 10.5,
      //           // marginBottom: deviceMeasures('height') / 23
      //         }
      //       }
      //     >
      //       {/* <ImageAdHeader
      //         imgSrc={Loader}
      //         background={
      //           this.state.orientation === 'portrait'
      //             ? styles.imageStylePortrait
      //             : styles.imageStyleLandscape
      //           // marginLeft: -50
      //         }
      //       /> */}
      //       <MakeGif
      //         imgSrc={this.images}
      //         background={
      //           this.state.orientation === 'portrait'
      //             ? {
      //                 resizeMode: 'cover',
      //                 // flex: 1,
      //                 alignSelf: 'center',
      //                 marginTop: 0,
      //                 width: 180,
      //                 // // width: deviceMeasures('width') - 1,
      //                 height: 180
      //               }
      //             : styles.imageStyleLandscape
      //           // marginLeft: -50
      //         }
      //       />
      //     </View>
      //     <Text style={styles.loadingText}> Loading now... ..</Text>
      //     <Text style={styles.loadingText2}> Please wait.</Text>
      //     <View style={styles.WaitView}>
      //       <Text style={styles.Wait}> Getting info </Text>
      //     </View>
      //   </View>
      // </View>
    }

    return (
      <View style={styles.container}>
        <Logo orientation={this.state.orientation} showLogin={this.showLogin} />
        <AnimatedImages orientation={this.state.orientation} />

        {this.props.isRegisteredSuccess ? (
          <>
            <Logo
              orientation={this.state.orientation}
              showLogin={this.showLogin}
            />
            {AnimatedImages(this.state.orientation)}
            <LoginForm
              requestLogin={this.props.requestLogin}
              showLogin={this.showLogin}
            />
          </>
        ) : (
          <View>
            {/* <Logo
              orientation={this.state.orientation}
              showLogin={this.showLogin}
            /> */}

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
    // marginTop: deviceMeasures('height') / 4,
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
    // width: 370,
    width: deviceMeasures('width') - 1,
    height: 170,
    // resizeMode: 'cover',
    // flex: 1
    // alignSelf: 'center',
    // marginTop: 0,
    width: 80
    // // // width: deviceMeasures('width') - 1,
    // height: 80
  },
  loadingText: {
    paddingTop: 20,
    paddingBottom: 6,
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

export default LoginIndex;
