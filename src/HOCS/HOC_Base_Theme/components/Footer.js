import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const footerTheme = {
       'shopDaddy.Left': {
        'shopDaddy.Button': {
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'shopDaddy.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'shopDaddy.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-start',
      },
      'shopDaddy.Body': {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'center',
        flexDirection: 'row',
        'shopDaddy.Button': {
          alignSelf: 'center',
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          '.full': {
            height: variables.footerHeight,
            flex: 1
          },
          'shopDaddy.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'shopDaddy.IconNB': {
            color: variables.topTabBarActiveTextColor,
          }
        },
      },
      'shopDaddy.Right': {
        'shopDaddy.Button': {
          '.transparent': {
            backgroundColor: 'transparent',
            borderColor: null,
            elevation: 0,
            shadowColor: null,
            shadowOffset: null,
            shadowRadius: null,
            shadowOpacity: null,
          },
          'shopDaddy.Icon': {
            color: variables.topTabBarActiveTextColor,
          },
          'shopDaddy.IconNB': {
            color: variables.topTabBarActiveTextColor,
          },
          alignSelf: null,
        },
        flex: 1,
        alignSelf: 'center',
        alignItems: 'flex-end',
      },
      backgroundColor: variables.footerDefaultBg,
      flexDirection: 'row',
      justifyContent: 'center',
      borderTopWidth: ((platform === 'ios') && (platformStyle!=='material')) ? variables.borderWidth : undefined,
      borderColor: ((platform === 'ios') && (platformStyle!=='material')) ? '#cbcbcb' : undefined,
      height: variables.footerHeight,
      elevation: 3,
      left: 0,
      right: 0,
  };


  return footerTheme;
};
