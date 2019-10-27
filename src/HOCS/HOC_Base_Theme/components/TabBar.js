import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const tabBarTheme = {
      '.tabIcon': {
        height: undefined,
      },
      '.vertical': {
        height: 60,
      },
      'shopDaddy.Button': {
        '.transparent': {
          'shopDaddy.Text': {
            fontSize: variables.tabFontSize,
            color: variables.sTabBarActiveTextColor,
            fontWeight: '400',
          },
          'shopDaddy.IconNB': {
            color: variables.sTabBarActiveTextColor,
          },
        },
        'shopDaddy.IconNB': {
          color: variables.sTabBarActiveTextColor,
        },
        'shopDaddy.Text': {
          fontSize: variables.tabFontSize,
          color: variables.sTabBarActiveTextColor,
          fontWeight: '400',
        },
        '.isTabActive': {
          'shopDaddy.Text': {
            fontWeight: '900',
          },
        },
        flex: 1,
        alignSelf: 'stretch',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: null,
        borderBottomColor: 'transparent',
        backgroundColor: variables.tabBgColor,
      },
      height: 45,
      flexDirection: 'row',
      justifyContent: 'space-around',
      borderWidth: 1,
      borderTopWidth: 0,
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderBottomColor: '#ccc',
      backgroundColor: variables.tabBgColor,
  };


  return tabBarTheme;
};
