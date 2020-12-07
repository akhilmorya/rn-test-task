import React from 'react';
import Utility from '../utils/utility';
import {StyleSheet, Text} from 'react-native';
import scale from '../utils/Scale';

const DPLabel = ({
  title,
  style = {},
  size = scale(20),
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
      style={[style, styles.textStyle, {textAlign: alignment, fontSize: size}]}>
      {Utility.changeStringStyle(title, textType)}
    </Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {paddingLeft: scale(10), color: '#FFF'},
});

export default DPLabel;