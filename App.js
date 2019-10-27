import React from 'react';
import { Provider } from 'react-redux';
// import Login from './src/Components/Store/index';
// import {Login} from './src/Components/Store/index';
// import SignUp from './src/Components/Views/Signup';
import { Auth, UserProfile } from './src/Components/Store/index';

import Home from './src/Components/Views/Home';
import { SideDrawer } from './src/Components/Store/index';
import AddPost from './src/Components/Views/Admin/AddPost';
// import { Navigation } from 'react-native-navigation';
// import LoadTabs from './src/Components/Views/Tabs/index';
import ConfigedStored from './src/Components/Store/Config';
import { Navigation } from 'react-native-navigation';
// Navigation.registerComponent('shopDaddy.Home', () => Home);
// Navigation.registerComponent('shopDaddy.Login', () => LogIn);
// Navigation.registerComponent('shopDaddy.SignUp', () => SignUp);
// Navigation.registerComponent('shopDaddy.AddPost', () => AddPost);
const store = ConfigedStored();

Navigation.registerComponent(
  'shopDaddy.Home',
  () => props => (
    <Provider store={store}>
      <Home {...props} hello={'props to see if somethig shows'} />
    </Provider>
  ),
  () => Home
);
Navigation.registerComponent(
  'shopDaddy.Auth',
  () => props => (
    <Provider store={store}>
      <Auth />
    </Provider>
  ),
  () => Auth
);

Navigation.registerComponent(
  'shopDaddy.SignUp',
  () => props => (
    <Provider store={store}>
      <SignUp />
    </Provider>
  ),
  () => SignUp
);
// Navigation.registerComponent(
//   'shopDaddy.UserProfile',
//   () => props => (
//     <Provider store={store}>
//       <UserProfile />
//     </Provider>
//   ),
//   () => UserProfile
// );
Navigation.registerComponent(
  'shopDaddy.SideDrawer',
  () => props => (
    <Provider store={store}>
      <SideDrawer />
    </Provider>
  ),
  () => SideDrawer
);
Navigation.registerComponent(
  'shopDaddy.AddPost',
  () => props => (
    <Provider store={store}>
      <AddPost />
    </Provider>
  ),
  () => AddPost
);

// export default () => Navigation.events().registerAppLaunchedListener(() => {
//   Navigation.setRoot({
//     root: {
//        stack: {
//         id: 'AppStack2',
//         children: [
//           {
//             component: {
//               name: 'shopDaddy.AddPost',
//               options: {
//                 topBar: {
//                   title: { text: 'Search' }
//                 }
//               }
//             },
//             component: {
//               name: 'CreateAddress',
//               options: {
//                 topBar: {
//                   title: { text:"Créeation d'Adresse" }
//                 }
//               }
//             }
//           }
//         ]
//       },
//       stack: {
//         id: 'AppStack',
//         children: [
//           {
//             // component: {
//             //   name: 'SearchScreen',
//             //   options: {
//             //     topBar: {
//             //       title: { text: 'Search' }
//             //     }
//             //   }
//             // },
//             component: {
//               name: 'shopDaddy.Login',
//               options: {
//                 topBar: {
//                   title: { text: 'Bienvenue' }
//                 }
//               }
//             }
//           }
//         ]
//       },

//     }
//   });
// });
export default () =>
  Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        stack: {
          children: [
            {
              component: {
                name: 'shopDaddy.Auth',
                options: {
                  topBar: {
                    title: {
                      text: 'Welcome',
                      color: 'purple',
                      color: 'black',
                      fontWeight: 'bold',
                      fontSize: 21
                    }
                  }
                }
              }
            }
          ]
        }
      }
    });
  });

//   Navigation.startSingleScreenApp({
//     screen: {
//       screen: 'shopDaddy.Login',
//       title: 'Login',
//       navigatorStyle: {
//         navBarHidden: true
//       }
//     }
//  }
// );

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
