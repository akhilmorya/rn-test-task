import React from 'react';
import Utility from '../utils/utility';
import {StyleSheet, Text} from 'react-native';

const DPLabel = ({
  title,
  style = {},
  textType = 'normal',
  alignment = 'left',
  maxLength = 40,
  ellipsizeMode,
  numberOfLines,
  multiText = false,
  ...props
}) => {
  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode={ellipsizeMode}
      {...props}
      style={[style, styles.textStyle, {textAlign: alignment}]}>
      {Utility.changeStringStyle(title, textType)}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {left: 2.5, top: 0, color: '#000'},
});

export default DPLabel;
