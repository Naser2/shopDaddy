import React, { Component } from 'react';
import {

  TouchableOpacity,
} from 'react-native';
import { Platform } from 'react-native';

import variable from './../variables/platform';

export default class ButtonTheme  extends Component {

   ButtonThemeFunc = (props)=> {
    // console.log("CCCCCC :" ,s1,)
   
  

    // console.log("PROPs  : ", props)
    // console.log("PROP 1 JUST ARRIVED  :" ,props.prop1,)
    // console.log("PROP 2 JUST ARRIVED  : ",props.prop2)
 
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
                      default:{backgroundColor: 'transparent',
                      borderColor: '#f4f4f4',
                      borderWidth: variables.borderWidth * 2}
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
                      default:{backgroundColor: 'transparent',
                      borderColor: variables.btnSuccessBg,
                      borderWidth: variables.borderWidth * 2}
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
                   
                    default: { 
                      backgroundColor: variables.btnDangerBg,
                      borderColor: variables.btnDangerBg,
                      borderWidth: variables.borderWidth * 2}
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
                    default:{borderWidth: variables.borderWidth * 2,
                    elevation: null,
                    shadowColor: null,
                    shadowOffset: null,
                    shadowOpacity: null,
                    shadowRadius: null,
                    backgroundColor: 'transparent'}
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
                   default: {backgroundColor: '#f4f4f4'}
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
                   default: {backgroundColor: variables.btnSuccessBg}
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
                    // '.bordered': {
                    //   'shopDaddy.Text': {
                    //     color: variables.btnDangerBg
                    //   },
                    //   'shopDaddy.Icon': {
                    //     color: variables.btnDangerBg
                    //   },
                    //   'shopDaddy.IconNB': {
                    //     color: variables.btnDangerBg
                    //   }
                    // },
                    default:{backgroundColor: variables.btnDangerBg}
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
                      // 'shopDaddy.Text': {
                      //   color: variables.btnDangerBg
                      // },
                      // 'shopDaddy.IconNB': {
                      //   color: variables.btnDangerBg
                      // },
                      // 'shopDaddy.Icon': {
                      //   color: variables.btnDangerBg
                      // },
                     default:{ backgroundColor: null}
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

    // const props = s; 
    // const prop1 = props.prop1; 
    // const prop2 =props.prop2

    // console.log("PROP 1 Before LOOP  : ", prop1)
    // console.log("PROP 2 Before LOOP  : ", prop2)



    const iterate = (buttonTheme, prop1, prop2, CssifiedStyle) => {
      console.log("PROP 1   : ",  prop1)
       console.log("BEGINNNN Default   : ",  CssifiedStyle)
      // if (typeof prop1 !== 'object' && typeof prop2 === 'object') {
      //   CssifiedStyle.push(prop2);
      // } 
      if (prop1 && typeof prop1 === 'object') {
        console.log("PROP 1   : ",  prop1)
        console.log(' Prop1 is an OBJ -- Can NOT accept prop2: ', prop1)

          var needed = CssifiedStyle.push(prop1);
          // CssifiedStyle =  [...CssifiedStyle, needed ]
          
          // newStyle = new Set( CssifiedStyle.concat(needed))
          CssifiedStyle = {... CssifiedStyle, prop1}
          console.log('MERGED : ',  CssifiedStyle)
      } 
      else if (prop1 && typeof prop1 !== 'object') {
        console.log('IS there a prop:', prop1);
        let neededStyle;
  
        Object.keys(buttonTheme).forEach(key => {
          console.log('KEY', key);
          console.log(' EACH KEY : ', key);
          if (key === prop1) {
            console.log(' THEME KEY : ', buttonTheme[key].default);
            if( buttonTheme[key] === 'default' ||  buttonTheme[key].default){
              console.log("Has Default-- ", buttonTheme[key].default) 
              CssifiedStyle.push(buttonTheme[key].default)
              return  CssifiedStyle
            } 
            else if(buttonTheme[key][-1] === 'default'){
              console.log("No Default -- ", buttonTheme[key][-1]) 
              CssifiedStyle.push(buttonTheme[key][-1])
              return  CssifiedStyle
            }
             else{
              console.log("No Default -- ", buttonTheme[key]) 
              CssifiedStyle.push(buttonTheme[key])
              return  CssifiedStyle
            }
            
            // var found = key 
            // console.log('GOT HERE KEY', key);
            // console.log('Found Prop', key);
            // var keyOfP1 = buttonTheme[found];
            // console.log('KeyOfP1 --1', buttonTheme[found]);
            // console.log('KeyOfP1', key);
  
            // if (keyOfP1[0] === prop2) {
            //   var neededStyle = keyOfP1[i];
            //   CssifiedStyle.push(neededStyle);
            //   console.log('Done Here', prop2);
            // } else {
            //   console.log('CHECK  KEY', keyOfP1);
            //   Object.keys(keyOfP1).forEach(i => {
            //     console.log('ITTERATION of i  ', i);
            //     console.log(' Prop 2  ', prop2);
            //     console.log("IS i", i, "=== " ,prop2);
            //     if (i === prop2) {
            //       console.log("WHAT ARE YOU" , keyOfP1[i])
            //       var  newObj = keyOfP1[i]
            //       var stringified = JSON.stringify(keyOfP1[i])
            //       var index = stringified.indexOf(':')-1
            //       console.log("THE WORD ?" , stringified.slice(2,index))
            //       var word = stringified.slice(2,index)
                    

            //       console.log("STRINGINFIED TYPE ?" , typeof stringified)
            //       console.log("EXIST IN CSSIFIED ?" , word in CssifiedStyle)
            //       console.log("ETYPE OF word ?" , word , typeof  word )
            //       console.log("TYPE OF CSS ?" , typeof CssifiedStyle, CssifiedStyle)
            //       console.log("TYPE OF CSS ARRAY?" , typeof CssifiedStyle, CssifiedStyle[0])
            //       Object.keys(CssifiedStyle[0]).forEach((x,i )=> {
            //         console.log("WORD IN CSS ?: " , x)
            //         if ( word == x){
            //       console.log(word, "OBJECT IS IN CSSFY: ", "NEW OBJ is: ",  newObj, "CssifiedStyle Equivalent: ",CssifiedStyle[0],':', CssifiedStyle[0][x] , "ITS INDEX IS ", i)
            //       CssifiedStyle[0][word] = newObj[word]

            //       console.log("NEW CSSFIED: " ,CssifiedStyle )
            //       }
            //       else{
            //         console.log('@F Found Prop 2 ', i);
            //       var neededStyle = keyOfP1[i];
            //       console.log('HELLO WORLD :', neededStyle); 
            //       }

            //       }
                  
            //       )
                  
                 
            //     }
            //     if (i !== prop2) {
            //       console.log('AGAIN Iterate :', keyOfP1[i]);
            //       Object.keys(keyOfP1[i]).forEach(x => {
            //         console.log('AGAIN Iterate INside :', x);
            //         if (x === prop2) {
            //           console.log('AGAIN Iterate  FOUND :', keyOfP1[i][x]);
            //           var neededStyle = keyOfP1[i][x];
            //           console.log('AGAIN STYLE :', neededStyle);
            //           CssifiedStyle.push(neededStyle);
            //           CssifiedStyle;
            //         }
            //       });
  
            //       // console.log('RESSSSS: ',  prop1, prop2);
            //     }
          
            //     console.log('SEEE FINAL   : ', CssifiedStyle);
            //   });
            // }
          } 
          
          // else if (key ===prop1 && typeof buttonTheme[key] !== 'object') {
          //   iterate(obj[key], this.prop1, this.prop2);
          // }
          return CssifiedStyle;
        });
        return CssifiedStyle;
        console.log('LEAVING FUNC', CssifiedStyle);
      }
      
      console.log('NOT SEEE  CssifiedStyle? --1', CssifiedStyle);
    };
     console.log('SEEE  CssifiedStyle? --2', CssifiedStyle);
      console.log('BTN THEAM', buttonTheme);
    
      const prop1 = this.props.prop1; 
      const prop2 =this.props.prop2
  
      console.log("PROP 1 Before LOOP  : ", prop1)
      console.log("PROP 2 Before LOOP  : ", prop2)
    iterate(buttonTheme, prop1, prop2, CssifiedStyle)
    console.log('SEEE  CssifiedStyle? --3', CssifiedStyle);
    return (
    
      <TouchableOpacity style={CssifiedStyle}>
        {this.props.children}
      </TouchableOpacity>
    );
  }
  render(){
    console.log('CONCAT', this.props, "PROP-1:", this.props.prop1, "PROP2:", this.props.prop2);
    return(
      this.ButtonThemeFunc(this.props, this.prop1, this.prop2)
    )
  }
  

}
