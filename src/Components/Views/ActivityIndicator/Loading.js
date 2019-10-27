import React, { Component } from 'react';
import { deviceMeasures } from '../../../utils/misc';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

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
import MakeGif from '../../../HOCS/HOC_Base_Theme/components/MakeGif';

const loaderImages = [
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

export default Loading = () => {
  return (
    <View style={styles.loading}>
      <View
        style={{
          //  marginTop: deviceMeasures('height') / 9
          marginTop: 240
        }}
      >
        {/* <View style={
            {
              // marginTop: deviceMeasures('height') / 10.5,
              // marginBottom: deviceMeasures('height') / 23
            }
          }
        > */}
        <MakeGif source={loaderImages} />
        {/* </View> */}
        <Text style={styles.loadingText}> Loading now... ..</Text>
        <Text style={styles.loadingText2}> Please wait.</Text>
        <View style={styles.WaitView}>
          <Text style={styles.Wait}> Getting info </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    backgroundColor: '#039be5',
    alignItems: 'center',
    color: '#FFFF'
  },
  imageStylePortrait: {
    width: deviceMeasures('width') - 1,
    height: 170
  },
  loadingText: {
    paddingTop: 20,
    paddingBottom: 6,
    flexWrap: 'wrap',
    fontSize: 35,
    color: '#FFF',
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
