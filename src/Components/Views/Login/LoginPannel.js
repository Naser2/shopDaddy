import React, { Component } from 'react';
import { StyleSheet, Text, View, Animated, Image } from 'react-native';

import AuthForm from './AuthForm';
import BackImage from '../../../../assets/images/loginPanel.jpg';

class LoginPanel extends Component {
  state = {
    animFinished: false,
    backImage: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  };

  componentWillReceiveProps(nextProps) {
    console.log('nextPPPPops', nextProps);

    if (nextProps.show && !this.state.animFinished) {
      Animated.parallel([
        Animated.timing(this.state.backImage, {
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
    console.log('Image ukyjfug:', BackImage);
    console.log('Panne animation finished? :', this.state.animFinished);
    return (
      <View>
        <Animated.View
          style={{
            opacity: this.state.backImage
          }}
        >
          <Image
            style={
              this.props.orientation === 'portrait'
                ? styles.imageStylePortrait
                : styles.imageStyleLandscape
            }
            source={BackImage}
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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStylePortrait: {
    width: 370,
    height: 150
  },
  imageStyleLandscape: {
    width: 270,
    height: 0
  }
});

export default LoginPanel;
