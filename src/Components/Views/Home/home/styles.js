import commonColor from '../../../../HOCS/HOC_Base_Theme/variables/commonColor';

const React = require('react-native');

const { Dimensions, Platform } = React;

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
export default {
  iosHeader: {
    backgroundColor: '#fff'
  },
  aHeader: {
    backgroundColor: '#fff',
    borderColor: '#aaa',
    elevation: 3
  },
  iosHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: commonColor.brandPrimary
  },
  aHeaderTitle: {
    fontSize: 18,
    fontWeight: '500',
    lineHeight: 26,
    marginTop: -5,
    color: commonColor.brandPrimary
  },
  orText: {
    textAlign: 'center',
    fontWeight: '700',
    color: '#fff'
  },
  regBtnContain: {
    paddingVertical: 20,
    paddingHorizontal: 10
  },
  regBtn: {
    height: 50,
    borderRadius: 0,
    backgroundColor: commonColor.brandPrimary
  },
  googleLeft: {
    flex: 1,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#B6382C',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },
  fbLeft: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    backgroundColor: '#233772',
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },
  //TAXI RIDER CSSS BELOW

  iosSearchBar: {
    width: deviceWidth - 20,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 5,
    flex: 1,
    height: 60,
    paddingTop: 12,
    margin: 10
  },
  aSearchBar: {
    width: deviceWidth - 20,
    alignSelf: 'center',
    marginTop: 10,
    paddingLeft: 5,
    flex: 1,
    height: 60,
    paddingTop: 12,
    margin: 10
  },
  container: {
    flex: 1,
    position: 'relative',
    backgroundColor: '#fff'
  },
  slideSelector: {
    backgroundColor: '#eee',
    position: 'absolute',
    bottom: 0,
    width: deviceWidth + 5
  },
  regBtn: {
    borderRadius: 0,
    height: 50,
    flex: 1,

    alignItems: 'center',
    justifyContent: 'center',
    // backgroundColor: "green",
    borderBottomLeftRadius: 4,
    borderTopLeftRadius: 4
  },

  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: '#fff'
  },
  carIcon: {
    color: '#222',
    fontSize: 24
  },
  pinContainer: {
    bottom: deviceHeight / 2.1,
    position: 'absolute',
    left: 0,
    right: 0
  },
  pinButton: {
    backgroundColor: '#2491CA',
    alignSelf: 'center',
    paddingLeft: 50,
    paddingRight: 50
  },
  pin: {
    width: 2,
    height: 15,
    backgroundColor: commonColor.brandPrimary,
    position: 'relative',
    alignSelf: 'center'
  },
  shareContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  shareOptions: {
    paddingLeft: 20,
    padding: 10,
    backgroundColor: '#fff',
    alignItems: 'flex-start'
  },
  shareType: {
    fontSize: 12,
    color: commonColor.lightThemeColor
  },
  share: {
    paddingRight: 10,
    padding: 10,
    alignItems: 'flex-end'
  },
  taxiTypeContainer: {
    padding: 15,
    alignItems: 'center'
  },
  taxiType: {
    opacity: 0.5,
    alignItems: 'center'
  },
  taxi: {
    borderRadius: 18,
    borderWidth: 2,
    height: 36,
    width: 36,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: commonColor.lightThemeColor
  },
  taxiIcon: {
    fontSize: 15,
    padding: 5
  },
  headerContainer: {
    position: 'absolute',
    top: 0,
    width: deviceWidth + 5
  },
  iosHeader: {
    backgroundColor: '#fff'
  },
  aHeader: {
    backgroundColor: '#fff',
    borderColor: '#aaa',
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1
  },
  SearchPickText: {
    fontSize: 14,
    marginLeft: 5,
    color: '#B6D7EA'
  },
  selectedTaxi: {
    fontSize: 25,
    color: commonColor.brandPrimary,
    backgroundColor: 'transparent',
    borderColor: commonColor.lightThemeColor
  },
  locateIcon: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 5,
    marginTop: Platform.OS === 'ios' ? deviceHeight - 180 : deviceHeight - 200,
    marginBottom: 135,
    marginLeft: deviceWidth - 45
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 300,
    width: 300
  },
  loginBtn: {
    // added
    height: 50,
    marginBottom: 15,
    paddingTop: 10,
    paddingBottom: 10,
    alignSelf: 'center',
    width: deviceWidth - 100,
    borderColor: commonColor.brandPrimary,
    backgroundColor: '#5CA8D8'
  }
};
