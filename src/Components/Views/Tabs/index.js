import { Navigation } from 'react-native-navigation';
import FalseIcon from '../assets/images/circle.png';

const LoadTabs = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'shopDaddy.Home',
                    options: {
                      topBar: {
                        title: { text: 'Home' }
                      }}
                    // passProps: {
                    //   text: 'This is tab 1'
                    // }
                  },
                  // component: {
                  //   name: 'shopDaddy.AddPost',
                  //   // passProps: {
                  //   //   text: 'This is tab 2'
                  //   // },
                  //   options: {
                  //     topBar: {
                  //       title: { text: 'Post' }
                  //     },
                  //     // bottomTab: {
                  //     //   text: 'Tab 2',
                  //     //   icon: FalseIcon,
                  //     //   testID: 'SECOND_TAB_BAR_BUTTON'
                  //     // }
                  //   }
                  // }
                }
              ],
              options: {
                topBar: {
                  title: { text: 'Post' }
                },
                bottomTab: {
                  text: 'Tab 2',
                  icon: FalseIcon,
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              },
              options: {
                topBar: {
                  title: { text: 'Home' }
                },
                bottomTab: {
                  text: 'Tab 1',
                  icon: FalseIcon,
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          },
          {
            component: {
              name: 'shopDaddy.AddPost',
              // passProps: {
              //   text: 'This is tab 2'
              // },
              options: {
                topBar: {
                  title: { text: 'Post' }
                },
                bottomTab: {
                  text: 'Tab 2',
                  icon: FalseIcon,
                  testID: 'SECOND_TAB_BAR_BUTTON'
                }
              }
            }
          }
        ]
      }
    }
  });
};

export default LoadTabs;
