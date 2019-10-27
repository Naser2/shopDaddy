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

class LoginPanel extends Component {
  state = {
    animFinished: false,
    Image1: new Animated.Value(0),
    inputForm: new Animated.Value(0)
  };

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
    console.log('DEVICE WIDTH :', deviceMeasures('width') - 1);
    console.log('Panne animation finished? :', this.state.animFinished);
    return (
      <View
        style={
          this.props.orientation === 'portrait'
            ? { marginTop: '0%' }
            : { marginTop: 0 }
        }
      >
        {this.state.animFinished ? (
          <>
            <AuthForm
              registerUser={this.props.registerUser}
              requestLogin={this.props.requestLogin}
              platform={this.props.platform}
              showLogin={this.props.showLogin}
            />
          </>
        ) : (
          <>
            <Animated.View
              style={{ opacity: this.state.Image1 }}
            ></Animated.View>
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
              />
            </Animated.View>
          </>
        )}
      </View>
    );
  }
}

export default LoginPanel;
