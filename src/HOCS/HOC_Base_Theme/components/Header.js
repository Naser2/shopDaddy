import { Platform, PixelRatio } from 'react-native';
import _ from 'lodash';
import { View } from 'react-native';
import React, { Component } from 'react';
import { deviceWidth } from '../../../Components/Views/Home/home/styles';

import variable from './../variables/platform';

export default props => {
  // const { Dimensions, Platform } = RN;
  // const deviceWidth = Dimensions.get('window').width;
  // let variable = variable
  const platformStyle = variable.platformStyle;
  const platform = variable.platform;
  console.log('HEADER THEME STYLE : ', props);

  const headerTheme = {
    '.span': {
      height: 128,
      'shopDaddy.Left': {
        alignSelf: 'flex-start'
      },
      'shopDaddy.Body': {
        alignSelf: 'flex-end',
        alignItems: 'flex-start',
        justifyContent: 'center',
        paddingBottom: 26
      },
      'shopDaddy.Right': {
        alignSelf: 'flex-start'
      }
    },
    '.hasSubtitle': {
      'shopDaddy.Body': {
        'shopDaddy.Title': {
          fontSize: variable.titleFontSize - 2,
          fontFamily: variable.titleFontfamily,
          textAlign: 'center'
        },
        'shopDaddy.Subtitle': {
          fontSize: variable.subTitleFontSize,
          fontFamily: variable.titleFontfamily,
          color: variable.subtitleColor,
          textAlign: 'center'
        }
      }
    },
    '.noShadow': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null
    },
    '.hasTabs': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      borderBottomWidth: null
    },
    '.hasSegment': {
      elevation: 0,
      shadowColor: null,
      shadowOffset: null,
      shadowRadius: null,
      shadowOpacity: null,
      borderBottomWidth: null
    },
    'shopDaddy.Button': {
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      '.transparent': {
        'shopDaddy.Text': {
          color: variable.toolbarBtnColor,
          fontWeight: '600'
        },
        'shopDaddy.Icon': {
          color: variable.toolbarBtnColor
        },
        'shopDaddy.IconNB': {
          color: variable.toolbarBtnColor
        },
        paddingHorizontal: variable.buttonPadding
      },
      paddingHorizontal: 15
    },
    '.searchBar': {
      'shopDaddy.Item': {
        'shopDaddy.Icon': {
          backgroundColor: 'transparent',
          color: variable.dropdownLinkColor,
          fontSize: variable.toolbarSearchIconSize,
          alignItems: 'center',
          marginTop: 2,
          paddingRight: 10,
          paddingLeft: 10
        },
        'shopDaddy.IconNB': {
          backgroundColor: 'transparent',
          color: null,
          alignSelf: 'center'
        },
        'shopDaddy.Input': {
          alignSelf: 'center',
          lineHeight: 24,
          height: variable.searchBarHeight
        },
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'flex-start',
        flex: 1,
        height: variable.searchBarHeight,
        borderColor: 'transparent',
        backgroundColor: variable.toolbarInputColor
      },
      'shopDaddy.Button': {
        '.transparent': {
          'shopDaddy.Text': {
            fontWeight: '500'
          },
          paddingHorizontal: null,
          paddingLeft: platform === 'ios' ? 10 : null
        },
        paddingHorizontal: platform === 'ios' ? undefined : null,
        width: platform === 'ios' ? undefined : 0,
        height: platform === 'ios' ? undefined : 0
      }
    },
    '.rounded': {
      'shopDaddy.Item': {
        borderRadius:
          platform === 'ios' && platformStyle !== 'material' ? 25 : 3
      }
    },
    'shopDaddy.Left': {
      'shopDaddy.Button': {
        '.hasText': {
          marginLeft: -10,
          height: 30,
          'shopDaddy.Icon': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          },
          'shopDaddy.Text': {
            color: variable.toolbarBtnColor,
            fontSize: 17,
            marginLeft: 2,
            lineHeight: 21
          },
          'shopDaddy.IconNB': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize,
            marginTop: 2,
            marginRight: 5,
            marginLeft: 2
          }
        },
        '.transparent': {
          marginLeft: -3,
          'shopDaddy.Icon': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2
          },
          'shopDaddy.IconNB': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 2
          },
          'shopDaddy.Text': {
            color: variable.toolbarBtnColor,
            fontSize: 17,
            top: platform === 'ios' ? undefined : -1.5
          },
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        'shopDaddy.Icon': {
          color: variable.toolbarBtnColor
        },
        'shopDaddy.IconNB': {
          color: variable.toolbarBtnColor
        },
        alignSelf: null,
        paddingHorizontal: variable.buttonPadding
      },
      flex: platform === 'ios' && platformStyle !== 'material' ? 1 : 0.5,
      alignSelf: 'center',
      alignItems: 'flex-start'
    },
    'shopDaddy.Body': {
      flex: 1,
      alignItems:
        platform === 'ios' && platformStyle !== 'material'
          ? 'center'
          : 'flex-start',
      alignSelf: 'center',
      'shopDaddy.Segment': {
        borderWidth: 0,
        alignSelf: 'flex-end',
        marginRight: platform === 'ios' ? -40 : -55
      },
      'shopDaddy.Button': {
        alignSelf: 'center',
        '.transparent': {
          backgroundColor: 'transparent'
        },
        'shopDaddy.Icon': {
          color: variable.toolbarBtnColor
        },
        'shopDaddy.IconNB': {
          color: variable.toolbarBtnColor
        },
        'shopDaddy.Text': {
          color: variable.inverseTextColor
        }
      }
    },
    'shopDaddy.Right': {
      'shopDaddy.Button': {
        '.hasText': {
          height: 30,
          'shopDaddy.Icon': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize - 2,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 5
          },
          'shopDaddy.Text': {
            color: variable.toolbarBtnColor,
            fontSize: 17,
            lineHeight: 21
          },
          'shopDaddy.IconNB': {
            color: variable.toolbarBtnColor,
            fontSize: variable.iconHeaderSize - 2,
            marginTop: 2,
            marginRight: 2,
            marginLeft: 5
          }
        },
        '.transparent': {
          marginRight: -8,
          paddingHorizontal: 15,
          borderRadius: 50,
          'shopDaddy.Icon': {
            color: variable.toolbarBtnColor,
            fontSize:
              platform === 'ios'
                ? variable.iconHeaderSize - 6
                : variable.iconHeaderSize - 2,
            marginTop: 2,
            marginLeft: 2,
            marginRight: 2
          },
          'shopDaddy.IconNB': {
            color: variable.toolbarBtnColor,
            fontSize:
              platform === 'ios'
                ? variable.iconHeaderSize - 6
                : variable.iconHeaderSize - 2,
            marginTop: 2,
            marginLeft: 2,
            marginRight: 2
          },
          'shopDaddy.Text': {
            color: variable.toolbarBtnColor,
            fontSize: 17,
            top: platform === 'ios' ? undefined : -1.5
          },
          backgroundColor: 'transparent',
          borderColor: null,
          elevation: 0,
          shadowColor: null,
          shadowOffset: null,
          shadowRadius: null,
          shadowOpacity: null
        },
        'shopDaddy.Icon': {
          color: variable.toolbarBtnColor
        },
        'shopDaddy.IconNB': {
          color: variable.toolbarBtnColor
        },
        alignSelf: null,
        paddingHorizontal: variable.buttonPadding
      },
      flex: 1,
      alignSelf: 'center',
      alignItems: 'flex-end',
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    default: {
      backgroundColor: variable.toolbarDefaultBg,
      // backgroundColor: 'purple',
      flexDirection: 'row',
      paddingHorizontal: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      paddingTop: platform === 'ios' ? 15 : 0,
      borderBottomWidth:
        platform === 'ios' ? 1 / PixelRatio.getPixelSizeForLayoutSize(1) : 0,
      borderBottomColor: variable.toolbarDefaultBorder,
      height: variable.toolbarHeight,
      // width: deviceWidth / 2,
      elevation: 3,
      shadowColor: platformStyle === 'material' ? '#000' : undefined,
      shadowOffset:
        platformStyle === 'material' ? { width: 0, height: 2 } : undefined,
      shadowOpacity: platformStyle === 'material' ? 0.2 : undefined,
      shadowRadius: platformStyle === 'material' ? 1.2 : undefined,
      top: 0,
      left: 0,
      right: 0
    }
  };
  console.log('CHECK HEADER THEME STYLE : ', [
    props.style && props.style,
    headerTheme.default
  ]);

  return (
    <View style={[props.style && props.style, headerTheme.default]}>
      {props.children}
    </View>
  );
};
