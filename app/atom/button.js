import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import DPLabel from './label';
import scale from '../utils/Scale';

const DPButton = ({
  title,
  onPress,
  btnStyle,
  style = {},
  buttonColor = '#000',
  ...props
}) => {
  return (
    <TouchableOpacity
      disabled={false}
      onPress={() => onPress()}
      style={[styles.btn, btnStyle, {backgroundColor: buttonColor}]}>
      {DPLabel({
        title: title,
        alignment: 'center',
      })}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: scale(160),
    height: scale(40),
    justifyContent: 'center',
    borderRadius: scale(5),
  },
});

export default DPButton;
