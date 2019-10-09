import { combineReducers } from 'redux';

// modules
// import auth from '../modules/auth/store/reducer';
// import address from '../modules/address/store/reducer';
import auth from './User_Reducer';


const rootReducers = combineReducers({
  auth,

  // address
});


export default rootReducers