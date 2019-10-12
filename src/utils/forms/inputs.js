import { StyleSheet, TextInput, Picker } from 'react-native';
import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Platform } from 'react-native';

const styleFunc = props => {
  console.log('Inputs Props: ', props);
  if (props) {
    let overrideStyle = props.placeholderTextColor;

    return overrideStyle;
  } else {
    let style = styles.input;
    return style;
  }
};
const input = props => {
  console.log('Inputs Props: ', props, 'STYLE: ', styles.input);
  let template = null;
  switch (props.type) {
    case 'textinput':
      template = (
        <TextInput
          // type={props.type}
          // placeholder={props.placeholder}
          // value={props.value}
          // autoCapitalize={'none'}
          // keyboardType={props.keyboardType}
          // onChangeText={props.onChangeText}
          underlineColorAndroid="transparent"
          {...props}
          style={[styles.input, props.overrideStyle, props.style]}
          // style = {styleFunc(props)}
        />
      );
      break;
    case 'picker':
      template = (
        <Picker selectedValue={props.value} {...props}>
          {props.options.map((item, i) => (
            <Picker.Item key={i} label={item} value={item} />
          ))}
        </Picker>
      );
      break;
    default:
      return template;
  }
  return template;
};

const styles = StyleSheet.create({
  input: {
    borderBottomWidth: 2,
    // borderBottomColor: '#eaeaea',
    fontSize: 18,
    // padding: 5,
    marginTop: 5
  }
});

export default input;
