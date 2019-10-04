import React from 'react';
import { Provider } from 'react-redux';
import LogIn from './src/Components/Views/Login';
import SignUp from './src/Components/Views/Signup';

import Home from './src/Components/Views/Home';
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
      <Home {...props} />
    </Provider>
  ),
  () => Home
  
);
Navigation.registerComponent(
  'shopDaddy.Login',
  () => props => (
    <Provider store={store}>
      <LogIn  />
    </Provider>
  ),
  () =>  LogIn
  
);
Navigation.registerComponent(
  'shopDaddy.SignUp',
  () => props => (
    <Provider store={store}>
      <SignUp  />
    </Provider>
  ),
  () => SignUp
);
Navigation.registerComponent(
  'shopDaddy.AddPost',
  () => props => (
    <Provider store={store}>
      <AddPost  />
    </Provider>
  ),
  () =>  AddPost
  
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
export default () => Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setRoot({
      root: {
        component: {
          name: 'shopDaddy.Login',
          options: {
            topBar: {
              title: { text: 'Login', color: 'blue' }
            }
          }
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
