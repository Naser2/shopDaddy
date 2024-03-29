import { Dimensions, Platform, AsyncStorage } from 'react-native';

import { TOKEN_KEY } from './constants';
// import AsyncStorage from '@react-native-community/async-storage';
import { Navigation } from 'react-native-navigation';

export const FIREBASEURL = `https://onewayApp-e48c8.firebaseio.com`;

export const APIKEY = `
AIzaSyCMkJvCRx8xNWPfSJE0Fg-j7nECVdglZ3Y`;

export const LOGIN = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=${APIKEY}`;

export const SIGNUP = `https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=${APIKEY}`;
export const REFRESH = `https://securetoken.googleapis.com/v1/token?key=${APIKEY}`;

export const deviceMeasures = prop => {
  if (prop === 'height') {
    const deviceHeight = Dimensions.get('window').height;
    return deviceHeight;
  } else if (prop === 'width') {
    const deviceWidth = Dimensions.get('window').width;
    return deviceWidth;
  } else {
    alert('nothing passed in Device Measures');
  }
};

export const getOrientation = value => {
  return Dimensions.get('window').height > value ? 'portrait' : 'landscape';
};

export const setOrientationListener = cb => {
  return Dimensions.addEventListener('change', cb);
};

export const removeOrientationListener = () => {
  return Dimensions.removeEventListener('change');
};

export const getPlatform = () => {
  if (Platform.OS === 'ios') {
    return 'ios';
  } else {
    return 'android';
  }
};

export const navigatorDrawer = (event, $this) => {
  if (event.type === 'NavBarButtonPress' && event.id === 'DrawerButton') {
    $this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });
  }
};

navigationButtonPressed = ({ buttonId }) => {
  const { componentId } = this.props;

  if (buttonId === 'sideMenu') {
    Navigation.mergeOptions(componentId, {
      sideMenu: {
        left: {
          visible: true,
        },
      },
    });
  }
}

export const navigatorDeepLink = (event, $this) => {
  if (event.type === 'DeepLink') {
    $this.props.navigator.toggleDrawer({
      side: 'left',
      animated: true
    });

    if (event.payload.typeLink === 'tab') {
      $this.props.navigator.switchToTab({
        tabIndex: event.payload.indexLink
      });
    } else {
      $this.props.navigator.showModal({
        screen: event.link,
        animationType: 'slide-horizontal',
        navigatorStyle: {
          navBarBackgroundColor: '#00ADA9',
          screenBackgroundColor: '#ffffff'
        },
        backButtonHidden: false
      });
    }
  }
};

export const getTokens = cb => {
  AsyncStorage.multiGet([
    '@shop-daddy@token',
    '@shop-daddy@refreshToken',
    '@shop-daddy@expireToken',
    '@shop-daddy@uid'
  ]).then(value => {
    cb(value);
  });
};

export const setTokens = (values, cb) => {
  const dateNow = new Date();
  const expiration = dateNow.getTime() + 3600 * 1000;

  AsyncStorage.multiSet([
    ['@shop-daddy@token', values.token],
    ['@shop-daddy@refreshToken', values.refToken],
    ['@shop-daddy@expireToken', expiration.toString()],
    ['@shop-daddy@uid', values.uid]
  ]).then(response => {
    cb();
  });
};


export const destroyTokens = cb => {
  AsyncStorage.multiRemove(
    '@shop-daddy@token',
    '@shop-daddy@token',
    '@shop-daddy@token',
    '@shop-daddy@token'
  ).then(() => {
    cb();
  });
};
export const gridTwoColumns = list => {
  let newArticles = [];
  let articles = list;

  let count = 1;
  let vessel = {};

  if (articles) {
    articles.forEach(element => {
      if (count == 1) {
        vessel['blockOne'] = element;
        count++;
      } else {
        vessel['blockTwo'] = element;
        newArticles.push(vessel);

        count = 1;
        vessel = {};
      }
    });
  }
  return newArticles;
};
export const redirectTo = (componentId, screenName) => {
  Navigation.push(componentId, {
    component: {
      name: screenName
    }
  });
};
// This are utilities
export const callSafely = function(func, ...args) {
  if (![undefined, null].includes(func)) {
    return func(...args);
  }
};

export const timeHelper = (interval, format, displayFormat) => {
  return moment(interval, format).format(displayFormat);
};

// export const getTokens = (cb) => {
//     AsyncStorage.multiGet([
//         '@oneway@token',
//         '@oneway@refreshToken',
//         '@oneway@expireToken',
//         '@oneway@uid',
//     ]).then(value=>{
//         cb(value)
//     })
// }

// export const setTokens = (values,cb) => {
//     const dateNow = new Date();
//     const expiration = dateNow.getTime() + (3600 * 1000);

//     AsyncStorage.multiSet([
//         ['@oneway@token', values.token],
//         ['@oneway@refreshToken', values.refToken],
//         ['@oneway@expireToken', expiration.toString()],
//         ['@oneway@uid', values.uid],
//     ]).then( response => {
//         cb();
//     })
// }

// export const gridTwoColumns = (list) => {
//     let newArticles = [];
//     let articles = list;

//     let count = 1;
//     let vessel = {};

//     if(articles){
//         articles.forEach( element =>{
//             if(count == 1){
//                 vessel["blockOne"] = element;
//                 count++;
//             } else {
//                 vessel["blockTwo"] = element;
//                 newArticles.push(vessel);

//                 count = 1;
//                 vessel = {};
//             }
//         })
//     }
//     return newArticles;
// }
