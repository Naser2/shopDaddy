import React, { Component } from 'react';
import { Platform } from 'react-native';
import {Navigation} from 'react-native-navigation'

import Input from '../../../utils/forms/inputs';
import HomeJsx from './home/HomeJsx';

import Container from '../../../HOCS/HOC_Base_Theme/components/Container';
import Content from '../../../HOCS/HOC_Base_Theme/components/Content';
import Header from '../../../HOCS/HOC_Base_Theme/components/Header';
import Title from '../../../HOCS/HOC_Base_Theme/components/Title';
import Text from '../../../HOCS/HOC_Base_Theme/components/Text';
import Icon from '../../../HOCS/HOC_Base_Theme/components/Icon';
import Body from '../../../HOCS/HOC_Base_Theme/components/Body';
import Left from '../../../HOCS/HOC_Base_Theme/components/Left';
import Right from '../../../HOCS/HOC_Base_Theme/components/Right';
import Item from '../../../HOCS/HOC_Base_Theme/components/Item';
import Button from '../../../HOCS/HOC_Base_Theme/components/Button';
import View from '../../../HOCS/HOC_Base_Theme/components/View';
import styles from './home/styles';
// import ValidationRules from '../../../../utils/forms/validationRules';
import commonColor from '../../../HOCS/HOC_Base_Theme/variables/commonColor';

import { navigatorDrawer } from '../../../utils/misc';

import { StyledComponents } from '../../../HocComponents/index.js';
import SearchBar from '../SearchBar/SearchBar';

class Home extends Component {
  constructor(props){
   
    super(props)

   Navigation.events().bindComponent(this)
  }

  componentDidMount() {

    // console.log('LOGIN FUNC :', requestLogin);
    // console.log('LOGIN FUNC as PROPS :', this.props.requestLogin);
    // console.log('LOGIN PROPS :', this.props);
    // // console.log('LOGIN STATE :', this.state);
    // if (this.props.isAuthenticated) {
    //   console.log('PROPS AUTHENTICATED :', this.props.isAuthenticated);
    //   // this.props.history.push('/profile');
    // }
  }
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
  componentDidUpdate(prevProps, nextProps) {
    // console.log(this.props.isAuthenticated);
    // if (this.props.isAuthenticated || nextProps.isAuthenticated) {
    //   console.log(
    //     'PROPS AUTHENTICATED :',
    //     this.props.isAuthenticated,
    //     'NXT PROPS AUTHENTICATED :',
    //     nextProps.isAuthenticated
    //   );
    //   // this.props.history.push('/profile');
    // }
  }

  render() {
    console.log('PROPS: ', this.props);
    console.log('NAVIGATION EVENT PROPS: ',  Navigation.events());

    return (
      <View style={{ backgroundColor: commonColor.toolbarDefaultBg }}>
        <Content style={'styles.container'}>
          {/* <Text>HOME Screen </Text>
          <HomeJsx /> */}
          {/* <ThemeExample/> */}
        </Content>

        <>
          <View style={StyledComponents.inlineSmallImagesWrapper}>
            <Text style={StyledComponents.grayTextColor}> Clothes</Text>
            <Text style={StyledComponents.grayTextColor}> Restaurants</Text>
            <Text style={StyledComponents.grayTextColor}> Food</Text>
            <Text style={StyledComponents.grayTextColor}> Social</Text>
          </View>

          <SearchBar />
          <Content style={'styles.container'}>
            <Text style={StyledComponents.grayTextColor}>
              Conetmet Container
            </Text>
          </Content>

          <Content // style={{ padding: 10 }}
            style={'shopDaddy.Segment'}
            scrollEnabled
            bounces={false}
          >
            <Text style={StyledComponents.grayTextColor}>Content Segment</Text>
          </Content>
        </>
      </View>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     padding: 15
//   },
//   welcome: {
//     textAlign: 'center',
//     fontSize: 24,
//     fontWeight: '600',
//     color: 'black',
//     backgroundColor: 'rgb(181,215,252)',
//     padding: 8,
//     borderRadius: 10,
//     marginBottom: 10
//   },
//   inputWrapper: {
//     marginTop: 8,
//     marginBottom: 40
//   },
//   submitBtnAttr: {
//     ...Platform.select({
//       ios: {
//         marginRight: 10,
//         marginLeft: 10,
//         backgroundColor: '#1A73E8',
//         marginBottom: 10,
//         marginTop: 0,
//         paddingTop: 7,
//         paddingBottom: 7,
//         borderColor: '#1A73E8',
//         borderRadius: 3,
//         borderWidth: 3
//       },
//       android: {
//         marginRight: 40,
//         marginLeft: 40,
//         marginBottom: 10,
//         marginTop: 0,
//         paddingTop: 7,
//         paddingBottom: 7,
//         backgroundColor: '#1A73E8',
//         borderRadius: 3,
//         borderWidth: 3,
//         borderColor: '#1A73E8'
//       }
//     })
//   },
//   regBlueBtn: {
//     marginRight: 10,
//     marginLeft: 10,
//     // marginBottom: 20,
//     marginTop: 0,
//     paddingTop: 5,
//     paddingBottom: 5,
//     borderRadius: 3,
//     borderWidth: 3,
//     borderColor: '#2196F3',
//     backgroundColor: '#2196F3',
//     fontSize: 20
//   },
//   loginText: {
//     color: '#fff',
//     textAlign: 'center',
//     paddingLeft: 10,
//     paddingRight: 10,
//     fontSize: 18
//   },
//   errorContainer: {
//     marginBottom: 10,
//     marginTop: 30,
//     padding: 10,
//     backgroundColor: '#f44336'
//   },
//   errorLabel: {
//     color: '#fff',
//     textAlignVertical: 'center',
//     textAlign: 'center'
//   },
//   button: {
//     ...Platform.select({
//       ios: {
//         marginBottom: 0
//       },
//       android: {
//         marginBottom: 10,
//         marginTop: 10
//       }
//     })
//   },
//   imgBackgroundblue: {
//     backgroundColor: Colors.lightBlue1
//   },
//   btnWrap: {
//     marginTop: 40,
//     // marginTop: 8,
//     marginBottom: 40
//   }
// });
// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(LogIn);

// Login.propTypes = {
//   requestLogin: PropTypes.func.isRequired
// };
export default Home;
