import React from 'react';
import Utility from '../utils/utility';
import {StyleSheet, Text} from 'react-native';
import scale from '../utils/Scale';

const DPLabel = ({
  title,
  style = {},
  type = 'normal',
  textColor = '#FFF',
  size = scale(20),
  textType = 'normal',
  alignment = 'left',
  maxLength = 40,
  ellipsizeMode,
  numberOfLines,
  multiText = false,
  ...props
}) => {
  switch (type) {
    case 'danger':
      textColor = 'red';
      size = scale(14);
      break;
    case 'medium':
      textColor = 'green';
      size = scale(20);
      break;
    default:
      break;
  }
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}
      style={[
        style,
        styles.textStyle,
        {textAlign: alignment, fontSize: size, color: textColor},
      ]}>
      {Utility.changeStringStyle(title, textType)}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {paddingLeft: scale(10)},
});

export default DPLabel;
