import request from './requests';
class Api {
  static loginUser(credentials) {
    console.log(" Login User API works!!!!")
    return request('/user_token', 'POST', { //Request made
      body: JSON.stringify({ auth: credentials })
    });
  }

  static registerUser(credentials) {
    console.log("Got called from Register Action: ", credentials)
    return request('/users', 'POST', {
      body: JSON.stringify({ user: credentials })
    });
  }

  static getUser() { // Login Api Path /Url
    return request('/users/get_current_user', 'GET_AUTH');
  }

  static createAddress(address, myAlert) {
    return request(
      '/addresses',
      'POST_AUTH',
      {
        body: JSON.stringify({ address })
      },
      myAlert
    );
  }

  static updateAddress(id, address) {
    return request(`/addresses/${id}`, 'PATCH_AUTH', {
      body: JSON.stringify({ address })
    });
  }

  static deleteAddress(id) {
    return request(`/addresses/${id}`, 'DELETE_AUTH');
  }

  static getUserAddress() {
    return request('/user/addresses', 'GET_AUTH');
  }

  static getUserSavedAddresses() {
    return request('/user/addresses/saved', 'GET_AUTH');
  }

  static saveUserAddress(address) {
    return request('/user/addresses/save', 'POST_AUTH', {
      body: JSON.stringify({ address })
    });
  }

  static searchAddresses(query) {
    return request(`/addresses/search?query=${query}`, 'GET');
  }

  static createNewUserAddress(address) {
    return request('/user/addresses/save/new', 'POST_AUTH', {
      body: JSON.stringify({ address })
    });
  }
}

export default Api;
