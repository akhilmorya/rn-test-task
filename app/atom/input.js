import React from 'react';
import {StyleSheet, TextInput} from 'react-native';

const DPInput = ({
  onChangeText,
  style = {},
  clearButtonMode = 'while-editing',
  ...props
}) => {
  return (
    <TextInput
      placeholderTextColor={'grey'}
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
    paddingTop: 5,
    paddingLeft: 5,
  },
});

export default DPInput;
