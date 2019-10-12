import React from 'react'

export default function FilterLocationData(data) {
  const plus_code = data.plus_code &&  data.plus_code.compound_code
  const street =
  data.results[0].address_components[1] && 
  data.results[0].address_components[1].short_name;
const neighborbhood =
  data.results[7].address_components[0] &&
  data.results[7].address_components[0].short_name;
const city =
  data.results[0].address_components[2] &&
  data.results[0].address_components[2].long_name;
const state =
  data.results[0].address_components[5] &&
  data.results[0].address_components[5].long_name;
const lat =
  data.results[9].geometry &&
  data.results[9].geometry.location.lat;
const lng =
data.results[9].geometry &&
data.results[9].geometry.location.lng;
const postal_code =
  data.results[0].address_components[7] &&
  data.results[0].address_components[7].long_name;
const country =
  data.results[0].address_components[6] &&
  data.results[0].address_components[6].short_name;
console.log('STREET:', street);
console.log('NEIGHBORHOOD', neighborbhood);
console.log('CITY:', city);
console.log('STATE:', state);
console.log('POSTAL CODE:', postal_code);
console.log('COUNTRY:', country);
// console.log(' DATA FROM GOOGLE: ', this.state);
console.log(' PLUS CODE GOOGLE: ', plus_code);

  const filteredLocationData = {street: street,
  plus_code: plus_code,
  lat: lat,
  lng:lng,
  neighborhood: neighborbhood,
  city: city,
  state: state,
  postal_code: postal_code,
  country: country
}

  return filteredLocationData
}
