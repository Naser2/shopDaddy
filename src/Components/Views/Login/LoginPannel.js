import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Image,
  ScrollView
} from 'react-native';
import { deviceMeasures } from '../../../utils/misc';
import AuthForm from './AuthForm';
// import Image1 from '../../../../assets/images/sprite-13328f1cb7510cbc9233336a481d01ff9647841b19438cc121cd46efedd2e762.svg';
import Image1 from '../../../../assets/images/hey_life_is_good.png';
import Image2 from '../../../../assets/images/junko-tabeis-80th-birthday-4915579445051392-law.gif';

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
import BackgroundImage from '../../../HOCS/HOC_Base_Theme/components/ImageAdHeader';

class LoginPanel extends Component {
  state = {
    animFinished: false,
    Image1: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  };

  images = [     Image5,  Image6, 
  
    Image11 ,
    Image1,
    Image12,
    Image2,
    Image7,
    Image4,
    Image8,
    Image9,
  
    Image10,
    Image1,
      Image3,
  ];
  componentWillReceiveProps(nextProps) {
    console.log('nextPPPPops', nextProps);

    if (nextProps.show && !this.state.animFinished) {
      Animated.parallel([
        Animated.timing(this.state.Image1, {
          toValue: 1,
          duration: 1000
        }),
        Animated.timing(this.state.inputForm, {
          toValue: 1,
          duration: 1500
        })
      ]).start(this.setState({ animFinished: true }));
    }
  }

  render() {
    console.log(
      ' PROPS  PANNEL isRegisteredSuccess::',
      this.props.isRegisteredSuccess
    );
    console.log('Image 1:', Image1);
    console.log('Panne animation finished? :', this.state.animFinished);
    return (
      <ScrollView style={{ marginTop: '-6%' }}>
        {this.state.animFinished ? (
          <>
            <BackgroundImage
              // text={' Welcome to Shop Daddy'}
              // textStyle={{
              //   flexWrap: 'wrap',
              //   fontSize: 18,
              //   color: 'rgb(157, 52, 227)',
              //   marginTop: '0%',
              //   elevation: 2,
              //   fontFamily: 'RobotoCondensed-Bold',
              //   justifyContent: 'flex-start'
              // }}
              background={
                this.props.orientation === 'portrait'
                  ? styles.imageStylePortrait
                  : styles.imageStyleLandscape
                // marginLeft: -50
              }
              // background={{
              //   height: deviceMeasures('height') / 2.8,
              //   width: deviceMeasures('width'),

              //   // marginLeft: -50
              // }}
              imgSrc={this.images}
            />
            <View style={{ marginTop: '4%' }}>
              <Text style={{ color: 'purple' }}>WELCOME TO SHOPDDY</Text>
            </View>
            <AuthForm
              registerUser={this.props.registerUser}
              requestLogin={this.props.requestLogin}
              platform={this.props.platform}
              showLogin={this.props.showLogin}
            />
          </>
        ) : (
          <>
            <Animated.View style={{ opacity: this.state.Image1 }}>
              <Image
                BackgroundImage
                text={' Welcome to Shop Daddy'}
                textStyle={{
                  flexWrap: 'wrap',
                  fontSize: 18,
                  color: 'rgb(157, 52, 227)',
                  marginTop: '0%',
                  elevation: 2,
                  fontFamily: 'RobotoCondensed-Bold',
                  justifyContent: 'flex-start'
                }}
                background={
                  this.props.orientation === 'portrait'
                    ? styles.imageStylePortrait
                    : styles.imageStyleLandscape
                  // marginLeft: -50
                }
                // style={
                //   this.props.orientation === 'portrait'
                //     ? styles.imageStylePortrait
                //     : styles.imageStyleLandscape
                // }
                source={Image1}
                resizeMode={'contain'}
              />
            </Animated.View>
            <Animated.View
              style={{
                opacity: this.state.inputForm,
                top: this.state.inputForm.interpolate({
                  inputRange: [0, 1],
                  outputRange: [100, 30]
                })
              }}
            >
              <AuthForm
                registerUser={this.props.registerUser}
                requestLogin={this.props.requestLogin}
                platform={this.props.platform}
                showLogin={this.props.showLogin}
                // orientation={this.props.orientation}
              />
            </Animated.View>
          </>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  imageStylePortrait: {
    width: 370,
    width: deviceMeasures('width') - 1,
    height: 150
  },
  imageStyleLandscape: {
    width: 370,
    height: 100
  }
});

export default LoginPanel;
