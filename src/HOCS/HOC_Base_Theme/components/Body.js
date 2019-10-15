// @flow
import { View } from 'react-native';
import React, { Component } from 'react';

export default (props) => {

  const bodyTheme = {
    flex: 1,
    alignItems: 'center',
    alignSelf: 'center'
  };

  return <View style={bodyTheme}>{props.children}</View>;

};
