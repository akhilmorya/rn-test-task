import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import scale from '../utils/Scale';

const DPInput = ({
  onChangeText,
  style = {},
  clearButtonMode = 'while-editing',
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor={'white'}
      clearButtonMode={clearButtonMode}
      maxLength={50}
      autoCapitalize={'none'}
      onChangeText={text => {
        onChangeText(text, false);
      }}
      returnKeyType={'done'}
      style={[styles.inputStyle, style]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  inputStyle: {
    flex: 1,
    textAlignVertical: 'top',
    paddingVertical: scale(10),
    paddingLeft: scale(10),
    borderBottomColor: '#FFF',
    borderBottomWidth: scale(1),
    color: '#FFF'
  },
});

export default DPInput;
