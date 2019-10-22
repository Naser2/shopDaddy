import { Platform } from 'react-native';
import _ from 'lodash';

import variable from './../variables/platform';

export default (variables = variable) => {
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

  const tabHeadingTheme = {
    flexDirection: 'row',
    backgroundColor: variables.tabDefaultBg,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    'shopDaddy.Text': {
      color: variables.topTabBarTextColor,
      marginHorizontal: 7
    },
    'shopDaddy.Icon': {
      color: variables.topTabBarTextColor,
      fontSize: (platform==='ios') ? 26 : undefined
    },
    '.active': {
      'shopDaddy.Text': {
        color: variables.topTabBarActiveTextColor,
        fontWeight: '600'
      },
      'shopDaddy.Icon': {
        color: variables.topTabBarActiveTextColor
      },
    }
  };


  return tabHeadingTheme;
};
