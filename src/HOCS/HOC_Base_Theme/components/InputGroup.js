import { Platform } from 'react-native';
import _ from 'lodash';

import variable from '../variables/platform';

export default (variables = variable) => {
  const inputGroupTheme = {
      'shopDaddy.Icon': {
        fontSize: 24,
        color: variables.sTabBarActiveTextColor,
        paddingHorizontal: 5,
      },
      'shopDaddy.IconNB': {
        fontSize: 24,
        color: variables.sTabBarActiveTextColor,
        paddingHorizontal: 5,
      },
      'shopDaddy.Input': {
        height: variables.inputHeightBase,
        color: variables.inputColor,
        paddingLeft: 5,
        paddingRight: 5,
        flex: 1,
        fontSize: variables.inputFontSize,
        lineHeight: variables.inputLineHeight,
      },
      '.underline': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderLeftWidth: 0,
        borderColor: variables.inputBorderColor,
      },
      '.regular': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderColor: variables.inputBorderColor,
      },
      '.rounded': {
        '.success': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.error': {
          borderColor: variables.inputErrorBorderColor,
        },
        paddingLeft: 5,
        borderWidth: variables.borderWidth,
        borderRadius: variables.inputGroupRoundedBorderRadius,
        borderColor: variables.inputBorderColor,
      },

      '.success': {
        'shopDaddy.Icon': {
          color: variables.inputSuccessBorderColor,
        },
        'shopDaddy.IconNB': {
          color: variables.inputSuccessBorderColor,
        },
        '.rounded': {
          borderRadius: 30,
          borderColor: variables.inputSuccessBorderColor,
        },
        '.regular': {
          borderColor: variables.inputSuccessBorderColor,
        },
        '.underline': {
          borderWidth: variables.borderWidth,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderColor: variables.inputSuccessBorderColor,
        },
        borderColor: variables.inputSuccessBorderColor,
      },

      '.error': {
        'shopDaddy.Icon': {
          color: variables.inputErrorBorderColor,
        },
        'shopDaddy.IconNB': {
          color: variables.inputErrorBorderColor,
        },
        '.rounded': {
          borderRadius: 30,
          borderColor: variables.inputErrorBorderColor,
        },
        '.regular': {
          borderColor: variables.inputErrorBorderColor,
        },
        '.underline': {
          borderWidth: variables.borderWidth,
          borderTopWidth: 0,
          borderRightWidth: 0,
          borderLeftWidth: 0,
          borderColor: variables.inputErrorBorderColor,
        },
        borderColor: variables.inputErrorBorderColor,
      },
      '.disabled': {
        'shopDaddy.Icon': {
          color: '#384850',
        },
        'shopDaddy.IconNB': {
          color: '#384850',
        },
      },

      paddingLeft: 5,
      borderWidth: variables.borderWidth,
      borderTopWidth: 0,
      borderRightWidth: 0,
      borderLeftWidth: 0,
      borderColor: variables.inputBorderColor,
      backgroundColor: 'transparent',
      flexDirection: 'row',
      alignItems: 'center',
  };


  return inputGroupTheme;
};
