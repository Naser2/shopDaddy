import { Navigation } from 'react-native-navigation';
import { Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome.js';
// /Users/techman/shopDaddy/node_modules/react-native-vector-icons/FontAwesome5Pro.js
import BlackPersonIcon from './assets/images/person_icon.png';
import TestIcon from './assets/images/advertise.png';
// import BlackPersonIcon from './assets/images/profile.png';
import SideMenu from './assets/images/side_menu.png';
import Sell from './assets/images/advertise.png';
import userProfile from './assets/images/person_icon.png';
import openDrawer from '../SideDrawer/openDrawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const navStyle = {
  navBarTextFontSize: 20,
  navBarTextColor: '#ffffff',
  navBarTextFontFamily: 'RobotoCondensed-Bold',
  navBarTitleTextCentered: true, // ANDROID ONLY
  navBarBackgroundColor: '#00ADA9'
};

const navLeftButton = iconsArray => {
  console.log('ICON ARRAY in LEFT: ', iconsArray[0]);
  return {
    title: 'Drawer',
    id: 'DrawerButton',
    icon: iconsArray[0]
    // iconColor: 'red',
    // disableIconTint: true,
    // buttonColor: 'red',
    // iconColor: 'red',
    // selectedIconColor: 'blue',
    // backgroundColor: 'green'
  };
};
const tabBarIcon = (focused, tintColor) => {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./assets/images/advertise.png')}
    />
  );
};
const LoadTabs = () => {
  Promise.all([
    MaterialIcons.getImageSource('menu', 25),
    MaterialIcons.getImageSource('person', 25),
    MaterialIcons.getImageSource('dollar', 25),
    MaterialIcons.getImageSource('search', 25)
    // Icon.getImageSource('bars', 20, 'white'),
    // Icon.getImageSource('dollar', 20, 'white'),
    // Icon.getImageSource('search', 20, 'white')
    // Icon.getImageSource('export', 20, 'white')
  ]).then(iconsArray => {
    console.log('ICONS : ', iconsArray);
    Navigation.setRoot({
      root: {
        sideMenu: {
          left: {
            component: {
              name: 'shopDaddy.SideDrawer',
              passProps: {
                text: 'This is a left side menu screen'
              }
            }
          },
          center: {
            bottomTabs: {
              children: [
                {
                  stack: {
                    children: [
                      {
                        component: {
                          name: 'shopDaddy.Home',
                          passProps: {
                            text: 'This is tab 1'
                          },
                          options: {
                            topBar: {
                              barStyle: 'default' | 'black',
                              title: {
                                text: 'Search',
                                color: '#FFF',
                                fontSize: 36,
                                color: '#FFF',
                                fontFamily: 'RobotoCondensed-Medium',
                                fontWeight: 'bold'
                              },

                              leftButtons: [
                                {
                                  id: 'sideMenu', // icon: SideMenu,
                                  // icon: ,
                                  icon: iconsArray[0],
                                  // icon: [navLeftButton(iconsArray)]
                                  color: '#FFF',
                                  fixedWidth: 500,
                                  navigatorStyle: navStyle

                                  // onPress: ()=> openDrawer
                                }
                              ],
                              background: {
                                color: 'purple',
                                translucent: true,
                                blur: false
                              },
                              rightButtons: [
                                {
                                  id: 'userProfile',
                                  icon: iconsArray[1],
                                  width: 40,
                                  // heigth: 10
                                  color: '#FFF',
                                  borderWidth: 2,
                                  borderColor: 'lightblue ',
                                  borderRadius: 20,
                                  backgroundColor: 'red'
                                }
                              ] // searchBar: true
                            } // searchBar: true,
                          }
                        }
                      }
                    ],
                    options: {
                      bottomTab: {
                        // text: 'Tab 2',
                        icon: iconsArray[3],

                        // icon: BlackPersonIcon,
                        iconColor: 'gray',
                        borderWidth: 2,
                        // selectedIconColor: '#3E7BE3',
                        selectedIconColor: 'purple',
                        textColor: 'orange',
                        // selectedTextColor: '#3E7BE3',
                        fontWeight: 'regular',
                        testID: 'SECOND_TAB_BAR_BUTTON',
                        navigatorStyle: navStyle,
                        navigatorButtons: [navLeftButton(iconsArray)],
                        translucent: false
                      }
                    }
                  }
                },
                // {
                //   sideMenu: {
                //     left: {
                //       component: {
                //         name: 'shopDaddy.SideDrawer',
                //         id: 'sideMenu', // icon: SideMenu,
                //         icon: iconsArray[0],
                //         color: '#FFF',
                //         backgroundColor: 'green',
                //         navigatorStyle: navStyle,
                //         navigatorButtons: [navLeftButton(iconsArray)],
                //         onPress: () => openDrawer
                //       }
                //     }
                //   }
                // },
                {
                  component: {
                    name: 'shopDaddy.AddPost',
                    passProps: {
                      text: 'This is tab 2',
                      options: {
                        topBar: {
                          background: {
                            color: 'POST ',
                            translucent: true,
                            blur: false
                          },
                          title: {
                            component: {
                              text: 'Search',
                              color: '#FFF',
                              id: 'shopDaddy.Home',
                              name: 'shopDaddy.Home', // required
                              alignment: 'center', // 'center' or 'fill'
                              passProps: {}
                            }
                          }
                        }
                      }
                    },
                    options: {
                      bottomTab: {
                        text: 'Sell now',
                        // icon: iconsArray[2],
                        icon: TestIcon,
                        // iconColor: 'gray',
                        marginTop: 20,
                        borderColor: 'green',
                        // selectedIconColor: '#3E7BE3',
                        textColor: 'orange',
                        selectedTextColor: 'purple',
                        fontWeight: 'regular',
                        fontSize: 14,
                        testID: 'FIRST_TAB_BAR_BUTTON', // width: 4,
                        translucent: false,
                        // heigth: 10,
                        //  size: 10, //
                        navigatorStyle: navStyle, // iconColor: 'lightblue',

                        navigatorButtons: [navLeftButton(iconsArray)]
                      }
                    }
                  }
                },
                {
                  component: {
                    name: 'shopDaddy.AddPost',
                    passProps: {
                      text: 'This is tab 3'
                    },
                    options: {
                      bottomTab: {
                        // text: 'Tab 3',
                        icon: iconsArray[1],
                        iconColor: 'gray',
                        borderWidth: 2,
                        borderColor: 'lightblue ',
                        borderRadius: 20,
                        selectedIconColor: 'purple',
                        textColor: 'orange',
                        // selectedTextColor: '#3E7BE3', // fontFamily: 'Helvetica',
                        fontWeight: 'regular',
                        testID: 'THIRD_TAB_BAR_BUTTON',
                        navigatorStyle: navStyle,
                        navigatorButtons: [navLeftButton(iconsArray)],
                        translucent: false
                      }
                    }
                  }
                }
              ]
            }
          }

          // right: {
          //   component: {
          //     name: 'shopDaddy.AddPost',
          //     passProps: {
          //       text: 'This is a right side menu screen'
          //     }
          //   }
          // },
        }
      }
    });
  });
};
export default LoadTabs;
