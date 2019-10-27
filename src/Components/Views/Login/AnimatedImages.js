import React from 'react';
import { deviceMeasures } from '../../../utils/misc';
import { StyleSheet } from 'react-native';

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

const images = [
  Image5,
  Image6,

  Image11,
  Image1,
  Image12,
  Image2,
  Image7,
  Image4,
  Image8,
  Image9,

  Image10,
  Image1,
  Image3
];

export const AnimatedImages = props => {
  console.log('ORIENTATION: ', props.orientation);
  return (
    <BackgroundImage
      background={
        props.orientation === 'portrait'
          ? styles.imageStylePortrait
          : styles.imageStyleLandscape
      }
      imgSrc={images}
    />
  );
};

const styles = StyleSheet.create({
  imageStylePortrait: {
    // flex: 1,
    width: 370,
    width: deviceMeasures('width'),
    height: 170
  },
  imageStyleLandscape: {
    width: 370,
    height: 100
  }
});
