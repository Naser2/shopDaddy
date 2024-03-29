import React, { Component } from 'react';
import { Text, StyleSheet, ImageBackground, View } from 'react-native';
import Colors from '../../../HocComponents/components/Colors';

export default class MakeGif extends Component {
  state = {
    currentImgIndex: 0
  };

  componentDidMount() {
    const { imgSrc } = this.props;
    if (Array.isArray(imgSrc)) {
      setInterval(() => {
        this.setState(prevState => {
          const newIndex = prevState.currentImgIndex + 1;
          const currentImgIndex = imgSrc[newIndex] ? newIndex : 0;
          return { currentImgIndex };
        });
      }, 100);
    }
  }

  // console.log('IMAGE BCKG: ', props.background);
  // // console.log('Text: ', props.text);

  render() {
    const { imgSrc } = this.props; // image
    const { currentImgIndex } = this.state; //index
    const currentImg = Array.isArray(imgSrc) ? imgSrc[currentImgIndex] : imgSrc; // imagesArray ? img=array[stateImgIdx] : img= props.img
    console.log(
      'IMAGE STYLE Props: ',
      this.props.background,
      'LOCAL BACKGROUND: ',
      styles.background
    );
    console.log(
      'IMAGE FINAL STYLE : ',
      this.props.background
        ? [this.props.background, styles.background]
        : styles.background
    );
    return (
      <>
        <ImageBackground
          accessibilityRole={'image'}
          source={currentImg}
          style={
            this.props.background
              ? [styles.background, this.props.background]
              : styles.background
          }
          imageStyle={styles.logo}
        >
          {this.props.text ? (
            <View style={this.props.textViewStyle}>
              <Text
                style={
                  this.props.textStyle
                    ? [styles.text, this.props.textStyle]
                    : styles.text
                }
              >
                {this.props.text}
              </Text>
            </View>
          ) : null}
        </ImageBackground>
        {/* <Text style={ props.textColor ? props.textColor :styles.text}>{props.text} </Text> */}
      </>
    );
  }
}

const styles = StyleSheet.create({
  background: {
    // flex: 1,
    // alignSelf: 'center',
    alignItems: 'center',
    alignItems: 'flex-start',
    // paddingBottom: 40,
    marginTop: 10
    // marginLeft: -60,
    // paddingHorizontal: 32
    // backgroundColor: Colors.lighter,
    // width: 400,
  },
  text: {
    fontSize: 34,
    fontWeight: '800',
    // paddingLeft: 160,
    fontFamily: 'RobotoCondensed-Light',
    marginTop: 25,
    textAlign: 'center',
    color: Colors.orange,
    flexWrap: 'wrap'
  }
});
