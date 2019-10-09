import React, { Component } from 'react';
import {
  View,
  Text,
  Animated,
  Easing,
  StyleSheet,
  Platform,
  TouchableOpacity,
  ScrollView,
  TextInput
} from 'react-native';
// import styles from '../Home/home/styles';

export default class Logo extends Component {
  state = {
    sellAnim: new Animated.Value(0),
    itAnim: new Animated.Value(0)
  };

  componentDidMount() {
    Animated.sequence([
      Animated.timing(this.state.sellAnim, {
        toValue: 1,
        duration: 1000,
        easing: Easing.easeOutCubic
      }),
      Animated.timing(this.state.itAnim, {
        toValue: 1,
        duration: 500,
        easing: Easing.easeOutCubic
      })
    ]).start(() => {
      console.log('Animation DOne!');
      this.props.showLogin();
    });
  }
  render() {
    return (
      <View>
        <View
          style={
            this.props.orientation === 'portrait'
              ? styles.logoStylesPortrait
              : styles.logoStylesLandscape
          }
        >
          <Animated.View
            style={{
              opacity: this.state.sellAnim,
              top: this.state.sellAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0]
              })
            }}
          >
            <Text style={styles.shop}>Shop</Text>
          </Animated.View>
          <Animated.View
            style={{
              opacity: this.state.itAnim
            }}
          >
            <Text style={styles.daddy}>Daddy</Text>
          </Animated.View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  logoStylesPortrait: {
    marginTop: 50,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 100,
    alignSelf: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 1.2
  },
  logoStylesLandscape: {
    marginTop: 20,
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    alignSelf: 'center'
  },
  logoStyle: {
    marginTop: 50,

    flex: 1,
    maxHeight: 100,
    // backgroundColor: '#FFF',
    // flexDirection: 'row',
    // alignItems: 'center'
    padding: 15
  },
  shop: {
    fontSize: 40,
    // fontFamily: 'RobotoCondensed-Regular',
    fontFamily: 'RobotoCondensed-Bold',
    // color: '#555555',
    color: 'rgb(199,146,234)',
    color: 'rgb(178, 101, 230)',
    color: 'rgb(157, 52, 227)'
  },
  daddy: {
    fontSize: 40,
    // fontFamily: 'RobotoCondensed-Regular',
    fontFamily: 'RobotoCondensed-Bold',
    color: '#00ADA9'
  }
});
