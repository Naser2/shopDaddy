import React, { Component } from 'react';
import { deviceMeasures, destroyTokens } from '../../../utils/misc';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import StaticLogo from '../../../../assets/StaticLogo/StaticLogo';

import {
  getOrientation,
  removeOrientationListener,
  setTokens,
  getTokens
} from '../../../utils/misc';

// import { Colors, ImageHeader } from '../../../HocComponents/index.js';
// import inputTheme from '../../../HOCS/HOC_Base_Theme/components/Input';

class SideDrawer extends Component {
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
  logUserOut = () => {
    destroyTokens(this.props.logOut());
  };
  componentWillUnmount() {
    removeOrientationListener();
  }

  componentDidMount() {
    console.log('CHECK PROPS: ', this.props);

    // console.log('IS THERE A TOKEN  : ', this.props.user.auth.token);
  }

  render() {
    console.log('PROPS SideDrawer', this.props.user.data.uid );

    return (
      <View style={styles.container}>
        <View style={styles.buttonsContainer}>
          <Text>{this.props.user.data.uid} </Text>
        </View>
        <Text style={styles.loadingText}>SIDE DRAWER</Text>
        <TouchableOpacity style={styles.WaitView} onPress={this.logUserOut}>
          <Text style={styles.Wait}>Logout</Text>
        </TouchableOpacity>

        <Text style={styles.Wait}> Getting info </Text>
        <View>
          <Text> some more stuff hger</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '45%',
    backgroundColor: '#474143'
    // alignItems: 'center',
    // justifyContent: 'center',
    // alignContent: 'center',
    // alignSelf: 'center'
  },

  buttonsContainer: {
    padding: 10,
    paddingTop: 20
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
    padding: 5,

    color: '#039be5',
    flexWrap: 'wrap',
    fontSize: 10,
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

export default SideDrawer;
