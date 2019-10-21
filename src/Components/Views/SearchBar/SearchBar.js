import React, { Fragment, Component } from 'react';
import {
  View,
  Text,
  TextInput,
  TextField,
  StatusBar,
  Button,
  TouchableOpacity,
  Keyboard,
  KeyboardAvoidingView,
  StyleSheet,
  TouchableWithoutFeedback
} from 'react-native';
import { Navigation } from 'react-native-navigation';
import { Colors } from '../../../HocComponents/index';

import Icon from 'react-native-vector-icons/Ionicons';
import * as Animatable from 'react-native-animatable';
import { deviceMeasures } from '../../../utils/misc';

class SearchBar extends Component {
  state = {
    searchTerm: '',
    searchBarFocused: false
  };

  clearSearch = () => {
    this.setState({
      searchTerm: ''
    });
  };

  submitSearch = () => {
    alert('POSTING SEARCH ');
  };
  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    });
  };

  updateInput = (name, value) => {
    this.setState({
      searchTerm: value
    });
  };
  keyboardWillShow = props => {
    this.setState({ searchBarFocused: true });
    console.log('--SEARCHHH WILL  Show Fired', props);
  };

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
    console.log('-- KeyboardDidShow Fired');
  };

  keyboardWillHide = () => {
    console.log('--SEARCHHHHHHH  Keyboard WILL HIDE Fired');
    this.setState({ searchBarFocused: false });
    console.log('-- Keyboard Will Hide Fired');
  };

  componentDidMount() {
    console.log('MOUNTED:', this.props);
    this.setState({ searchBarFocused: this.props.focused });

    this.keyboardDidShow = Keyboard.addListener(
      'keyboardDidShow',
      this.keyboardDidShow()
    );
    console.log('MOUNTED:', this.props, 'STATE : --- ', this.state);
    this.keyboardWillShow = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow()
    );
    console.log('MOUNTED:', this.props);
    this.keyboardWillHide = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide()
    );
    // console.log('MOUNTED:', this.props);
  }

  render() {
    console.log('SEARCH PROPS:', this.props, 'STATE : ', this.state);
    return (
      <Fragment>
        <View style={styles.searchBarBoxContainer}>
          <KeyboardAvoidingView
            style={styles.searchBarViewBackround}
            behavior="padding"
          >
            {/* <Text style={styles.yellowText}>Chercher un lieu</Text> */}

            <View style={{ flexDirection: 'row', backgroundColor: 'purple' }}>
              <Animatable.View
                animation="slideInLeft"
                duration={400}
                style={styles.searchBarBox}
              >
                <View>
                  <View
                    style={
                      this.state.searchBarFocused
                        ? styles.searchIconArrow
                        : styles.searchBtnStyle
                    }
                  >
                    {/* <TouchableWithoutFeedback> */}
                    <Animatable.View
                      animation={
                        this.state.searchBarFocused
                          ? 'fadeInLeft'
                          : 'fadeInRight'
                      }
                    >
                      <Icon
                        name={
                          this.state.searchBarFocused
                            ? 'md-arrow-back'
                            : 'ios-search'
                        }
                        // style={{ fontSize: 24 }}
                        onPress={this.submitSearch}
                        style={styles.searchIconStyle}
                      />
                    </Animatable.View>
                    {/* </TouchableWithoutFeedback> */}
                  </View>
                </View>

                <TouchableWithoutFeedback>
                  <TextInput
                    onFocus={this.props.onFocus}
                    type="textinput"
                    value={this.state.searchTerm}
                    onChangeText={value =>
                      this.updateInput('searchTerm', value)
                    }
                    placeholder="Seacrh .."
                    style={
                      this.state.searchBarFocused
                        ? styles.focus
                        : styles.searchIconTextInputPlaceHoderStyle
                    }
                  />
                </TouchableWithoutFeedback>

                {this.state.searchTerm.length >= 1 ? (
                  <TouchableOpacity onPress={this.clearSearch}>
                    <View style={styles.searchCancelStyle}>
                      <Text style={styles.cancelIconStyle}>
                        X{/* </TouchableWithoutFeedback> */}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
                {this.state.searchTerm.length >= 1 ? (
                  <TouchableOpacity onPress={this.clearSearch}>
                    <View style={styles.searchCancelBTnStyle}>
                      <Text style={styles.cancelBtnTextStyle}>
                        Cancel{/* </TouchableWithoutFeedback> */}
                      </Text>
                    </View>
                  </TouchableOpacity>
                ) : null}
              </Animatable.View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Fragment>
    );
  }
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white
  },
  searchBarBoxContainer: {
    // flex: 1,
    width: deviceMeasures('width'),
    height: deviceMeasures('height') / 10,
    backgroundColor: 'purple',
    alignSelf: 'center',

    // flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    // alignContent: 'center',
    // marginBottom: 40,
    // marginTop: 40
    paddingRight: 2,
    paddingLeft: 4
  },
  body: {
    // flexDirection: 'column'
  },
  focus: {
    flex: 1,
    backgroundColor: 'powderblue'
  },
  searchBarWrapper: {
    flex: 1,
    backgroundColor: 'rgb(244,243,249)'
    // marginTop: 1
  },

  searchBarViewBackround: {
    backgroundColor: 'lightblue',
    justifyContent: 'center'
    // paddingHorizontal: 5,
    // flexDirection: 'row'
    // height: 20'
  },

  searchBarBox: {
    flex: 1,
    backgroundColor: 'purple',
    width: deviceMeasures('width') - 8,
    alignItems: 'center',
    flexDirection: 'row',
    // borderBottomWidth: 1,

    borderColor: Colors.borderGrayLine
  },

  searchBtnStyle: {
    // padding: -5,
    alignItems: 'center',
    width: 45,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,

    backgroundColor: Colors.blueGBtn,
    borderWidth: 3,
    borderColor: Colors.blueGBtn
  },
  searchCancelStyle: {
    position: 'absolute',
    // left: 20,
    right: 9,
    // top: 0,
    bottom: -12,
    justifyContent: 'center',
    alignItems: 'center',

    padding: 2,
    // padding: -5,
    width: 26,
    height: 26,
    alignSelf: 'flex-end',
    // alignItems: 'center',
    // width: 45,
    backgroundColor: 'lightgray',
    color: 'black',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: 'black'
  },
  searchCancelBTnStyle: {
    textAlign: 'center',
    flex: 1,
    paddingLeft: 2,
    // padding: -5,
    // width: 26,
    // height: 26,
    alignSelf: 'flex-end',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    // backgroundColor: 'purple',
    // backgroundColor: 'rgb(221,160,221)',
    borderColor: 'purple'
  },
  searchIconArrow: {
    // padding: 5,
    alignItems: 'center',
    width: 45,
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: 'purple',
    // backgroundColor: Colors.white,
    // borderWidth: 3,
    borderColor: Colors.white
  },
  searchIconStyle: {
    padding: 5,
    fontSize: 20,
    fontWeight: 'bold'
  },
  cancelIconStyle: {
    padding: 2,
    fontSize: 14
  },
  cancelBtnTextStyle: {
    textAlign: 'center',
    padding: 2,
    fontSize: 16,
    color: Colors.blueGooBtn,
    fontSize: 18
  },
  searchIconTextInputPlaceHoderStyle: {
    // flex: 1,
    width: deviceMeasures('width') / 1.43,
    borderWidth: 1,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    height: 38,
    paddingLeft: 2,
    fontSize: 20,
    // borderColor: 'purple',
    borderTopColor: 'purple',
    borderBottomColor: 'purple',
    borderLeftColor: 'gray',
    backgroundColor: '#FFF'
  },
  headerNote: {
    flexDirection: 'row'
  },
  sectionAppName: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.blue1,
    backgroundColor: Colors.lightBlue1,
    paddingLeft: 4,
    paddingRight: 4,
    width: 100,
    // alignItems: 'center',
    marginBottom: 2
  },
  appNameWrapper: {
    paddingLeft: 4,
    paddingRight: 4,
    // width: 100,
    alignItems: 'center',
    marginBottom: 2,
    marginTop: 50
  },
  appNamePlain: {
    padding: 4,
    fontSize: 24,
    fontWeight: '600',
    // color: Colors.blue1,
    color: 'black',
    backgroundColor: Colors.lightBlue1
  },

  sectionDescription: {
    marginTop: 2,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark
  },
  highlight: {
    fontWeight: '700'
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right'
  },

  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 18
  },
  sideBySideBTN: {
    flexDirection: 'row',
    marginStart: '5%',
    marginEnd: '5%',
    marginBottom: 20
  },
  yellowText: {
    color: 'rgb(135,95,0)',
    paddingLeft: 4,
    paddingRight: 4,
    paddingTop: 4,
    paddingBottom: 4,
    textAlign: 'center'
  },
  yellowLabel: {
    backgroundColor: 'rgb(255,227,160)',
    borderBottomRightRadius: 4,
    borderTopRightRadius: 4,
    marginTop: 8,
    marginLeft: 4,
    width: 160
  },
  sectionYellow: {
    backgroundColor: Colors.orange,
    height: 40
  },
  basicAnouncement: {
    color: Colors.white,
    fontWeight: '700',
    fontSize: 20,
    textAlign: 'center',
    margin: 5
  },
  scrollView: {
    backgroundColor: Colors.lighter
  }
});

export default SearchBar;
