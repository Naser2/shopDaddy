// import variable from './../variables/platform';

import React, { Fragment, Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { Platform } from 'react-native';

import variable from './../variables/platform';

export const ButtonTheme = (props, prop1, prop2 )=> {
  console.log("PROP 1 JUST ARRIVED  : ",  prop1)
  const variables = variable;
  const platformStyle = variables.platformStyle;
  const platform = variables.platform;

              const buttonTheme = {
                '.disabled': {
                  backgroundColor: variables.btnDisabledBg
                },
                '.bordered': {
                  '.dark': {
                    'shopDaddy.Text': {
                      color: '#000'
                    },
                    'shopDaddy.Icon': {
                      color: '#000'
                    },
                    'shopDaddy.IconNB': {
                      color: '#000'
                    },
                    backgroundColor: 'transparent',
                    borderColor: '#000',
                    borderWidth: variables.borderWidth * 2
                  },
                  '.light': {
                    'shopDaddy.Text': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.Icon': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.IconNB': {
                      color: '#f4f4f4'
                    },
                    backgroundColor: 'transparent',
                    borderColor: '#f4f4f4',
                    borderWidth: variables.borderWidth * 2
                  },
                  '.primary': {
                    'shopDaddy.Text': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnPrimaryBg
                    },
                    backgroundColor: 'transparent',
                    borderColor: variables.btnPrimaryBg,
                    borderWidth: variables.borderWidth * 2
                  },
                  '.success': {
                    'shopDaddy.Text': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnSuccessBg
                    },
                    backgroundColor: 'transparent',
                    borderColor: variables.btnSuccessBg,
                    borderWidth: variables.borderWidth * 2
                  },
                  '.info': {
                    'shopDaddy.Text': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnInfoBg
                    },
                    backgroundColor: 'transparent',
                    borderColor: variables.btnInfoBg,
                    borderWidth: variables.borderWidth * 2
                  },
                  '.warning': {
                    'shopDaddy.Text': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnWarningBg
                    },
                    backgroundColor: 'transparent',
                    borderColor: variables.btnWarningBg,
                    borderWidth: variables.borderWidth * 2
                  },
                  '.danger': {
                    'shopDaddy.Text': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnDangerBg
                    },
                    backgroundColor: 'transparent',
                    borderColor: variables.btnDangerBg,
                    borderWidth: variables.borderWidth * 2
                  },
                  '.disabled': {
                    backgroundColor: null,
                    borderColor: variables.btnDisabledBg,
                    borderWidth: variables.borderWidth * 2,
                    'shopDaddy.Text': {
                      color: variables.btnDisabledBg
                    }
                  },
                  'shopDaddy.Text': {
                    color: variables.btnPrimaryBg
                  },
                  'shopDaddy.Icon': {
                    color: variables.btnPrimaryBg
                  },
                  'shopDaddy.IconNB': {
                    color: variables.btnPrimaryBg
                  },
                  borderWidth: variables.borderWidth * 2,
                  elevation: null,
                  shadowColor: null,
                  shadowOffset: null,
                  shadowOpacity: null,
                  shadowRadius: null,
                  backgroundColor: 'transparent'
                },

                '.dark': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: '#000'
                    },
                    'shopDaddy.Icon': {
                      color: '#000'
                    },
                    'shopDaddy.IconNB': {
                      color: '#000'
                    }
                  },
                  backgroundColor: '#000'
                },
                '.light': {
                  '.transparent': {
                    'shopDaddy.Text': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.Icon': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.IconNB': {
                      color: '#f4f4f4'
                    },
                    backgroundColor: null
                  },
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.Icon': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.IconNB': {
                      color: '#f4f4f4'
                    }
                  },
                  'shopDaddy.Text': {
                    color: '#000'
                  },
                  'shopDaddy.Icon': {
                    color: '#000'
                  },
                  'shopDaddy.IconNB': {
                    color: '#000'
                  },
                  backgroundColor: '#f4f4f4'
                },

                '.primary': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnPrimaryBg
                    }
                  },
                  backgroundColor: variables.btnPrimaryBg
                },

                '.success': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnSuccessBg
                    }
                  },
                  backgroundColor: variables.btnSuccessBg
                },

                '.info': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnInfoBg
                    }
                  },
                  backgroundColor: variables.btnInfoBg
                },

                '.warning': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnWarningBg
                    }
                  },
                  backgroundColor: variables.btnWarningBg
                },

                '.danger': {
                  '.bordered': {
                    'shopDaddy.Text': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnDangerBg
                    }
                  },
                  backgroundColor: variables.btnDangerBg
                },

                '.block': {
                  justifyContent: 'center',
                  alignSelf: 'stretch'
                },

                '.full': {
                  justifyContent: 'center',
                  alignSelf: 'stretch',
                  borderRadius: 0
                },

                '.rounded': {
                  paddingHorizontal: variables.buttonPadding + 20,
                  borderRadius: variables.borderRadiusLarge
                },

                '.transparent': {
                  backgroundColor: 'transparent',
                  elevation: 0,
                  shadowColor: null,
                  shadowOffset: null,
                  shadowRadius: null,
                  shadowOpacity: null,

                  'shopDaddy.Text': {
                    color: variables.btnPrimaryBg
                  },
                  'shopDaddy.Icon': {
                    color: variables.btnPrimaryBg
                  },
                  'shopDaddy.IconNB': {
                    color: variables.btnPrimaryBg
                  },
                  '.dark': {
                    'shopDaddy.Text': {
                      color: '#000'
                    },
                    'shopDaddy.IconNB': {
                      color: '#000'
                    },
                    'shopDaddy.Icon': {
                      color: '#000'
                    },
                    backgroundColor: null
                  },
                  '.danger': {
                    'shopDaddy.Text': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnDangerBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnDangerBg
                    },
                    backgroundColor: null
                  },
                  '.warning': {
                    'shopDaddy.Text': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnWarningBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnWarningBg
                    },
                    backgroundColor: null
                  },
                  '.info': {
                    'shopDaddy.Text': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnInfoBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnInfoBg
                    },
                    backgroundColor: null
                  },
                  '.primary': {
                    'shopDaddy.Text': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnPrimaryBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnPrimaryBg
                    },
                    backgroundColor: null
                  },
                  '.success': {
                    'shopDaddy.Text': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.IconNB': {
                      color: variables.btnSuccessBg
                    },
                    'shopDaddy.Icon': {
                      color: variables.btnSuccessBg
                    },
                    backgroundColor: null
                  },
                  '.light': {
                    'shopDaddy.Text': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.IconNB': {
                      color: '#f4f4f4'
                    },
                    'shopDaddy.Icon': {
                      color: '#f4f4f4'
                    },
                    backgroundColor: null
                  }
                },

                '.small': {
                  height: 30,
                  'shopDaddy.Text': {
                    fontSize: 14
                  }
                },

                '.large': {
                  height: 60,
                  'shopDaddy.Text': {
                    fontSize: 22,
                    lineHeight: 32
                  }
                },

                '.iconRight': {
                  'shopDaddy.Text': {
                    marginRight: variables.buttonPadding
                  }
                },
                '.iconLeft': {
                  'shopDaddy.Text': {
                    marginLeft: variables.buttonPadding
                  }
                },

                '.capitalize': {},

                '.vertical': {
                  flexDirection: 'column',
                  height: null
                },

                'shopDaddy.Text': {
                  fontFamily: variables.btnFontFamily,
                  marginLeft: 0,
                  marginRight: 0,
                  color: variables.inverseTextColor,
                  fontSize: variables.btnTextSize,
                  lineHeight: variables.btnLineHeight
                },

                'shopDaddy.Icon': {
                  color: variables.inverseTextColor,
                  fontSize: 24,
                  marginHorizontal: 5,
                  paddingTop: platform === 'ios' ? 2 : undefined
                },
                'shopDaddy.IconNB': {
                  color: variables.inverseTextColor,
                  fontSize: 24,
                  marginHorizontal: 5,
                  paddingTop: platform === 'ios' ? 2 : undefined
                },
                '.iconLeft': {
                  'shopDaddy.IconNB': {
                    marginRight: 10,
                    marginLeft: 0
                  },
                  'shopDaddy.Icon': {
                    marginRight: 10,
                    marginLeft: 0
                  }
                },
                '.iconRight': {
                  'shopDaddy.IconNB': {
                    marginLeft: 10,
                    marginRight: 0
                  },
                  'shopDaddy.Icon': {
                    marginLeft: 10,
                    marginRight: 0
                  }
                },
                '.picker': {
                  'shopDaddy.Text': {
                    '.note': {
                      fontSize: 16,
                      lineHeight: null
                    }
                  }
                },

                default: {
                  paddingVertical: variables.buttonPadding,
                  paddingHorizontal: variables.buttonPadding + 10,
                  backgroundColor: variables.btnPrimaryBg,
                  // backgroundColor: 'red',
                  borderRadius: variables.borderRadiusBase,
                  borderColor: variables.btnPrimaryBg,
                  borderWidth: null,
                  height: 45,
                  alignSelf: 'flex-start',
                  flexDirection: 'row',
                  elevation: 2,
                  shadowColor: '#000',
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.2,
                  shadowRadius: 1.2,
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }
              };

  let CssifiedStyle = [];
  const styleDefault = buttonTheme.default;
  CssifiedStyle.push(styleDefault);
  console.log("PROP 1 before ITTER   : ",  prop1)

  const iterate = (buttonTheme, prop1, prop2, CssifiedStyle) => {
     console.log("BEGINNNN Default   : ",  CssifiedStyle)
    if (typeof prop1 !== 'object' && typeof prop2 === 'object') {
      CssifiedStyle.push(prop2);
    } 
    else if (prop1 && typeof prop1 === 'object') {
      console.log("PROP 1   : ",  prop1)
      console.log(' Prop1 is an OBJ -- Can NOT accept prop2: ', prop1),
        CssifiedStyle.push(prop1);
    } 
    else if (prop1 && typeof prop1 !== 'object') {
      console.log('IS there a prop:', prop1);
      let neededStyle;

      Object.keys(obj).forEach(key => {
        console.log('KEY', key);
        console.log(' EACH KEY : ', key);
        if (key === prop1) {
          console.log('GOT HERE KEY', key);
          console.log('Found Prop', key);
          var keyOfP1 = obj[key];
          console.log('KeyOfP1', key);

          if (keyOfP1 === prop2) {
            var neededStyle = keyOfP1[i];
            CssifiedStyle.push(neededStyle);
            console.log('Done Here', prop2);
          } else {
            console.log('CHECK SUCCCESS KEY', keyOfP1);
            Object.keys(keyOfP1).forEach(i => {
              console.log('ITTERATION I  ', i);
              console.log(' Prop 2  ', prop2);
              console.log(i === prop2);
              if (i === prop2) {
                console.log('@F Found Prop 2 ', i);
                var neededStyle = keyOfP1[i];
                console.log('HELLO WORLD :', neededStyle);
              }
              if (i !== prop2) {
                console.log('AGAIN Iterate :', keyOfP1[i]);
                Object.keys(keyOfP1[i]).forEach(x => {
                  console.log('AGAIN Iterate INside :', x);
                  if (x === prop2) {
                    console.log('AGAIN Iterate  FOUND :', keyOfP1[i][x]);
                    var neededStyle = keyOfP1[i][x];
                    console.log('AGAIN STYLE :', neededStyle);
                    CssifiedStyle.push(neededStyle);
                    return CssifiedStyle;
                  }
                });

                console.log('RESSSSS: ', iterate(keyOfP1[i], prop1, prop2));
              }
              console.log('HELLO WORLD 2 SCOPE  :', neededStyle);
              CssifiedStyle.push(neededStyle);
              console.log('SEEE FINAL   : ', CssifiedStyle);
            });
          }
        } else if (key ===prop1 && typeof obj[key] !== 'object') {
          iterate(obj[key], prop1, prop2);
        }
        return CssifiedStyle;
      });
      
    }
   
    console.log('LEAVING FUNC', CssifiedStyle);
  };
  iterate(buttonTheme, prop1, prop2, CssifiedStyle)
  console.log('CONCAT', props, "PROP-1:", prop1, "PROP2:", prop2);
  console.log('PROCEEDED', CssifiedStyle);
  return (
    
    <TouchableOpacity style={CssifiedStyle}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ButtonTheme;
