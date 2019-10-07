import React, { Component } from 'react';
import { Platform } from 'react-native';

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
import Button from '../../../HOCS/HOC_Base_Theme/components/Button';
import View from '../../../HOCS/HOC_Base_Theme/components/View';
import styles from './styles';
// import ValidationRules from '../../../../utils/forms/validationRules';
import commonColor from '../../../HOCS/HOC_Base_Theme/variables/commonColor';

// import { requestLogin } from '../../store/action';

import { Colors } from '../../../HocComponents/index.js';

class SocialAuthBtns extends Component {
  componentDidMount() {
    // console.log('LOGIN FUNC :', requestLogin);
    // console.log('LOGIN FUNC as PROPS :', this.props.requestLogin);
    // console.log('LOGIN PROPS :', this.props);
    // // console.log('LOGIN STATE :', this.state);
    // if (this.props.isAuthenticated) {
    //   console.log('PROPS AUTHENTICATED :', this.props.isAuthenticated);
    //   // this.props.history.push('/profile');
    // }
  }

  componentDidUpdate(prevProps, nextProps) {
    // console.log(this.props.isAuthenticated);
    // if (this.props.isAuthenticated || nextProps.isAuthenticated) {
    //   console.log(
    //     'PROPS AUTHENTICATED :',
    //     this.props.isAuthenticated,
    //     'NXT PROPS AUTHENTICATED :',
    //     nextProps.isAuthenticated
    //   );
    //   // this.props.history.push('/profile');
    // }
  }

  render() {
    console.log('PROPS: ', this.props);

    return (
      <View style={{ backgroundColor: '#ffff' }}>

        <View>
          <Title
            style={
              Platform.OS === 'ios'
                ? styles.iosHeaderTitle
                : styles.aHeaderTitle
            }
            title={'Social Sign In'}
          >
            Sign in with social medias
          </Title>
        </View>

        <Container
          // style={{ padding: 10 }}
          style={'shopDaddy.Segment'}
          scrollEnabled
          bounces={false}
        >
          {this.props ? (
            // this.props.appConfig.enableGoogle ? (
            // <Button
            //   onPress={
            //     () => console.log('SIGN IN  GOOGLE')
            //     // signInWithGoogleAsync(
            //     //   this.props.socailSignupSuccess,
            //     //   this.props.appConfig.googleAuth,
            //     //   this.props.checkUser,
            //     //   this.props.userLoginRequest
            //     // )
            //   }
            //   block
            //   style={{
            //     paddingLeft: 0,
            //     backgroundColor: 'red',
            //     marginBottom: 15,
            //     borderRadius: 4,
            //     height: 50
            //   }}
            // >
            //   <Left style={styles.googleLeft}>
            <Icon active name="logo-googleplus" style={{ color: '#fff' }} />
          ) : (
            //   </Left>
            //   <Body style={{ flex: 3 }}>
            //     <Text style={{ color: '#fff', fontWeight: 'bold' }}>
            //       Sign in with Google
            //     </Text>
            //   </Body>
            //   <Right />
            // </Button>
            <View />
          )}
          {this.props ? (
            // this.props.appConfig.enableFacebook ? (
            <View style={{ flexDirection: 'row', flex: 1, marginTop: 0 }}>
              <View
                style={{
                  // width: ' 350%',
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Left style={styles.fbLeft}>
                  <Button
                    onPress={
                      () => console.log('SIGN IN FACEBOOK')
                      // requestFbLogin(
                      //   this.props.socailSignupSuccess,
                      //   this.props.appConfig.facebookAuth,
                      //   this.props.checkUser,
                      //   this.props.userLoginRequest
                      // )
                    }
                    // block
                    prop1={{
                      paddingLeft: 0,
                      backgroundColor: '#4e71ba',
                      // borderRadius: 4,
                      // height: 60,
                      // borderWidth: 2,
                      // borderColor: 'blue',
                      borderBottomRightRadius: -40,
                      borderBottomLeftRadius: 42,

                      borderTopLeftRadius: 40,
                      borderTopRightRadius: -40
                    }}
                    // prop1={'.warning'}
                  >
                    <View style={{ flexDirection: 'row' }}>
                      <View>
                        <Text
                          style={{ paddingLeft: 0, alignItems: 'flex-start' }}
                        >
                          Icon
                        </Text>
                      </View>

                      <Text style={{ color: '#fff', fontWeight: 'bold' }}>
                        Facebook
                      </Text>
                    </View>
                  </Button>
                </Left>
              </View>

              <View
                style={{
                  // position: 'absolute',
                  // elevation: 3,

                  height: 60,
                  width: 60,
                  borderRadius: 30,
                  backgroundColor: '#5D81A3',
                  alignItems: 'center',
                  justifyContent: 'center',
                  // marginLeft: '40%',
                  // marginRight: '40%',
                  // marginTop: 20,
                  backgroundColor: '#ddebe9'
                }}
              >
                <Text style={styles.orText}>OR</Text>
              </View>

              <View
                style={{
                  // position: 'relative',
                  // width: ' 40%',
                  // marginTop: 10,
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Right>
                  <Button
                    title={'Google'}
                    prop1={{
                      // width: 50,
                      borderBottomRightRadius: 40,

                      borderBottomLeftRadius: 5,

                      borderTopLeftRadius: 5,
                      borderTopRightRadius: 40
                    }}
                    // style={{
                    //   paddingLeft: 0,
                    //   backgroundColor: '#3B579D',
                    //   // backgroundColor: '#ddebe9',
                    //   borderRadius: 4,
                    //   height: 20
                    // }}
                  >
                    <Text>with Google</Text>
                  </Button>
                </Right>
              </View>
            </View>
          ) : (
            <View />
          )}
          <View style={{ padding: 10 }}>
            {this.props && (
              // {this.props.appConfig.enableFacebook ||
              // this.props.appConfig.enableGoogle ? (
              <View style={{ marginBottom: 30, marginTop: 20 }}>
                {/* <View
                  style={{
                    marginTop: 20,
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <View
                    style={{
                      height: 60,
                      width: 60,
                      borderRadius: 30,
                      backgroundColor: '#5D81A3',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  >
                    <Text style={styles.orText}>OR</Text>
                  </View>
                </View> */}
                {/* <Item
                  style={{
                    flex: 1,
                    height: 1,
                    borderColor: '#5D81A3',
                    marginTop: -40,
                    zIndex: -1
                  }}
                /> */}
              </View>
            )
            //  : null
            }
            {/* {this.state.socialLogin && (
              <RegisterFormFb socialLogin={this.state.socialLogin} />
            )} */}
            {/* {!this.state.socialLogin && (
              <LoginForm isFetching={this.props.isFetching} />
            )} */}
            {/* {this.state.showError &&
              Toast.show({
                text: this.props.errormsg,
                position: 'bottom',
                duration: 1500
              })} */}
          </View>
        </Container>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 15
//   },
//   welcome: {
//     textAlign: 'center',
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//     backgroundColor: 'rgb(181,215,252)',
//     padding: 8,
//     borderRadius: 10,
//     marginBottom: 10
//   },
//   inputWrapper: {
//     marginTop: 8,
//     marginBottom: 40
//   },
//   submitBtnAttr: {
//     ...Platform.select({
//       ios: {
//         marginRight: 10,
//         marginLeft: 10,
//         backgroundColor: '#1A73E8',
//         marginBottom: 10,
//         marginTop: 0,
//         paddingTop: 7,
//         paddingBottom: 7,
//         borderColor: '#1A73E8',
//         borderRadius: 3,
//         borderWidth: 3
//       },
//       android: {
//         marginRight: 40,
//         marginLeft: 40,
//         marginBottom: 10,
//         marginTop: 0,
//         paddingTop: 7,
//         paddingBottom: 7,
//         backgroundColor: '#1A73E8',
//         borderRadius: 3,
//         borderWidth: 3,
//         borderColor: '#1A73E8'
//       }
//     })
//   },
//   regBlueBtn: {
//     marginRight: 10,
//     marginLeft: 10,
//     // marginBottom: 20,
//     marginTop: 0,
//     paddingTop: 5,
//     paddingBottom: 5,
//     borderRadius: 3,
//     borderWidth: 3,
//     borderColor: '#2196F3',
//     backgroundColor: '#2196F3',
//     fontSize: 20
//   },
//   loginText: {
//     color: '#fff',
//     textAlign: 'center',
//     paddingLeft: 10,
//     paddingRight: 10,
//     fontSize: 18
//   },
//   errorContainer: {
//     marginBottom: 10,
//     marginTop: 30,
//     padding: 10,
//     backgroundColor: '#f44336'
//   },
//   errorLabel: {
//     color: '#fff',
//     textAlignVertical: 'center',
//     textAlign: 'center'
//   },
//   button: {
//     ...Platform.select({
//       ios: {
//         marginBottom: 0
//       },
//       android: {
//         marginBottom: 10,
//         marginTop: 10
//       }
//     })
//   },
//   imgBackgroundblue: {
//     backgroundColor: Colors.lightBlue1
//   },
//   btnWrap: {
//     marginTop: 40,
//     // marginTop: 8,
//     marginBottom: 40
//   }
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LogIn);

// Login.propTypes = {
//   requestLogin: PropTypes.func.isRequired
// };
export default SocialAuthBtns;
