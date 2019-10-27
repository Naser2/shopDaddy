/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Fragment, Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  // View,
  // Text,
  TouchableOpacity,
  StatusBar,
  Platform
} from 'react-native';

import ValidationRules from '../../../../utils/forms/validationRules';
import Input from '../../../../utils/forms/inputs';
import { Colors } from '../../../../HocComponents/index.js';

import Content from '../../../../HOCS/HOC_Base_Theme/components/Content';
import Header from '../../../../HOCS/HOC_Base_Theme/components/Header';
import Title from '../../../../HOCS/HOC_Base_Theme/components/Title';
import Text from '../../../../HOCS/HOC_Base_Theme/components/Text';
import Icon from '../../../../HOCS/HOC_Base_Theme/components/Icon';
import Body from '../../../../HOCS/HOC_Base_Theme/components/Body';
import Left from '../../../../HOCS/HOC_Base_Theme/components/Left';
import Right from '../../../../HOCS/HOC_Base_Theme/components/Right';
import Item from '../../../../HOCS/HOC_Base_Theme/components/Item';
import Button from '../../../../HOCS/HOC_Base_Theme/components/Button';
import View from '../../../../HOCS/HOC_Base_Theme/components/View';
import styles from '../../Home/home/styles';
// import ValidationRules from '../../../../utils/forms/validationRules';
import commonColor from '../../../../HOCS/HOC_Base_Theme/variables/commonColor';
import bars from '../../../../Components/Views/Tabs/assets/images/side_menu.png';
import personProfile from '../../../../Components/Views/Tabs/assets/images/person_icon.png';

class AddPost extends Component {
  
  static options() {
    return {
      topBar: {

        title: {
          text: 'POST'
          // color: '#FFF',
          // fontSize: 36,
          // color: '#FFF',
          // fontFamily: 'RobotoCondensed-Medium',
          // fontWeight: 'bold'
        },
        visible: true
        // leftButtons: [
        //   {
        //     id: 'sideMenu', // icon: SideMenu,
        //     // icon: ,
        //     icon: bars,
        //     // icon: [navLeftButton(iconsArray)]
        //     color: '#FFF',
        //     fixedWidth: 500
        //     // navigatorStyle: navStyle

        //     // onPress: ()=> openDrawer
        //   }
        // ],
        // background: {
        //   color: 'purple',
        //   translucent: true,
        //   blur: false
        // },
        // rightButtons: [
        //   {
        //     id: 'profile',
        //     icon: personProfile,
        //     width: 40,
        //     // heigth: 10
        //     color: '#FFF',
        //     borderWidth: 2,
        //     borderColor: 'lightblue ',
        //     borderRadius: 20,
        //     backgroundColor: 'red'
        //   }
        // ] // searchBar: true
      } // searchBar: true,
    };
  }
  constructor() {
    super();

    this.state = {
      form: {
        door_number: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isNumber: false
          }
        },

        street: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isAlphaNumeric: false
          }
        },
        neighborhood: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isString: false
          }
        },
        city: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isString: false
          }
        },
        state: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isString: false
          }
        },
        postal_code: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isAlphaNumericWithSpace: false
          }
        },
        country: {
          value: '',
          valid: false,
          type: 'textinput',
          rules: {
            isRequired: true,
            isString: false
          }
        }
      },

      lat: '',
      lng: '',
      showModal: false,
      modalData: {}
    };
  }

  getAdditionalGeoData = () => {
    // const response =  this.getRegistrantLocation()

    // // navigator.geolocation.getCurrentPosition(position => {
    // //   const lat = { latitude: position.coords.latitude }.latitude;
    // //   const lng = { longitude: position.coords.longitude }.longitude;

    // //   return {lat, lng}
    // // })
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${this.state.lat},${this.state.lng}&key=${process.env.REACT_APP_OW_JS_API_KEY}
        `
      )
      .then(res => {
        const data = res.data;
        console.log('IN AXIOS:', data);
        const filteredLocationData = FilterLocationData(data);
        console.log(' FILTERED: ', filteredLocationData);
        let {
          plus_code,
          lat,
          lng,
          neighborhood,
          city,
          state,
          postal_code,
          country
        } = filteredLocationData;

        this.setState({
          ...this.state,
          plus_code,
          lat,
          lng,
          neighborhood,
          city,
          state,
          postal_code,
          country
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  getRegistrantLocation = () => {
    console.log('Getting Location');
    navigator.geolocation.getCurrentPosition(position => {
      const lat = { latitude: position.coords.latitude }.latitude;
      const lng = { longitude: position.coords.longitude }.longitude;
      this.setState({
        lat: lat,
        lng: lng
      });
    });
  };

  //Handles form change
  updateInput = (name, value) => {
    this.setState({
      hasErrors: false
    });

    let formCopy = this.state.form;
    formCopy[name].value = value;

    ///rules
    let rules = formCopy[name].rules;
    let valid = ValidationRules(value, rules, formCopy);

    formCopy[name].valid = valid;

    this.setState({
      form: formCopy
    });
  };

  closeModal = e => {
    e.preventDefault();
    console.log(e.target.className);
    if (e.target.className === 'alert-container ') {
      // console.log('HELLO TARGET: ', e.target);
      this.closeBtn();
    }
  };

  myAlert = data => {
    console.log('DATA ALERT FUNC', data);
    if (data) {
      this.setState({
        showModal: true,
        modalData: data
      });
    }
  };
  //Submits new data
  submitForm = e => {
    //  let  alert = <Alert/>
    e.preventDefault();
    const { createAddress } = this.props;
    createAddress(this.state, this.myAlert);
  };

  componentDidMount() {
    // this.getRegistrantLocation();
    // this.getAdditionalGeoData();
  }

  render() {
    let streetText = <Text style={{ color: 'red' }}>and red</Text>;
    console.log('AT RENDER:', this.state);
    let notice =
      "Votre adresse sera crée et vous pourez l'utiliser immédiatement. Felicitations.";
    let formInputs = (
      <>
        {/* <AddressAlert data={this.state.modalData} /> */}

        <View onSubmit={this.handleAddressFormSubmit}>
          {/* <View class="input-field"> */}
          <Input
            placeholder="Numéro de porte"
            // placeholderTextColor={styles.placeholderTextColor}
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.door_number.type}
            value={this.state.form.door_number}
            handleEmail={this.state.form.door_number}
            onChangeText={value => this.updateInput('door_number', value)}
          />
          <Input
            picker="date"
            editable={true}
            placeholder="Nom de rue "
            // text={streetText}
            text={streetText}
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.street.type}
            value={this.state.form.street}
            handleEmail={this.state.form.street}
            onChangeText={value => this.updateInput('street', value)}
            // overrideStyle={styles.override}
          />
          <Input
            placeholder="Quartier"
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.neighborhood.type}
            value={this.state.form.neighborhood}
            handleEmail={this.state.form.neighborhood}
            onChangeText={value => this.updateInput('neighborhood', value)}
          />
          <Input
            o
            placeholder="Ville"
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.city.type}
            value={this.state.form.city}
            handleEmail={this.state.form.city}
            onChangeText={value => this.updateInput('city', value)}
          />
          <Input
            placeholder="État"
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.state.type}
            value={this.state.form.state}
            handleEmail={this.state.form.state}
            onChangeText={value => this.updateInput('state', value)}
          />
          <Input
            placeholder="Code Postal"
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.postal_code.type}
            value={this.state.form.postal_code}
            handleEmail={this.state.form.postal_code}
            onChangeText={value => this.updateInput('postal_code', value)}
          />
          <Input
            overrideStyle={styles.placeholderTextColor}
            placeholder="Pays"
            placeholderTextColor={Colors.placeholderGray}
            type={this.state.form.country.type}
            value={this.state.form.country}
            onChangeText={value => this.updateInput('country', value)}
          />
          {/* </View> */}
        </View>
      </>
    );

    return (
      <Fragment>
        <View style={{ backgroundColor: commonColor.toolbarDefaultBg }}>
          {/* <Header
            androidStatusBarColor={commonColor.statusBarLight}
            style={Platform.OS === 'ios' ? styles.iosHeader : styles.aHeader}
          >
            <Left>
              <Button transparent onPress={() => Actions.pop()}>
                <Icon
                  name="md-arrow-back"
                  style={{
                    fontSize: 28,
                    // marginLeft: 5,
                    color: commonColor.brandPrimary
                  }}
                />
              </Button>
            </Left>
            <Body>
              <Title
                style={
                  Platform.OS === 'ios'
                    ? styles.iosHeaderTitle
                    : styles.aHeaderTitle
                }
                title={'Sign In'}
              >
                POST
              </Title>

             
            </Body>
            <Right />
          </Header> */}
        </View>
        <Content style={'styles.container'}>
          {/* <Text>HOME Screen </Text>
          <HomeJsx /> */}
          {/* <ThemeExample/> */}
        </Content>

        <View style={styles.container}>
          <Text style={styles.welcome}>Sell it now </Text>
          <View style={styles.imgBackgroundblue}></View>
        </View>

        {/* <Form
          regularNoticeHeader={notice}
          submit={this.submitForm}
          actionName={'Soumettre'}
          // termes={"Termes et Conditions de Oneway."}
          formInputs={formInputs}
        /> */}

        {/* {() => this.myAlert()} */}
      </Fragment>
    );
  }
}

// const styles = StyleSheet.create({
//   placeholderTextColor: {
//     color: Colors.placeholderGray,
//     borderBottomWidth: 2,
//     borderBottomColor: '#eaeaea',
//     fontSize: 18,
//     padding: 5,
//     marginTop: 10
//   },
//   override: {
//     backgroundColor: 'green'
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
//   container: {
//     flex: 1,
//     marginTop: 80
//   }
// });

export default AddPost;
