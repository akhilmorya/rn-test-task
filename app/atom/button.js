import React from 'react';
import {Button} from 'react-native';
import Utility from '../utils/utility';

const DPButton = ({
  title,
  onPress,
  buttonColor,
  style = {},
  type = 'big',
  textType = 'pascalCapital',
  ...props
}) => {
  switch (type) {
    case 'small':
      buttonColor = '#000';
      break;
    case 'medium':
      buttonColor = '#000';
      break;
    case 'big':
      buttonColor = '#000';
      break;
    default:
      break;
  }
  return (
    <Button
      disabled={false}
      onPress={onPress && onPress()}
      title={Utility.changeStringStyle(title, textType)}
      color={buttonColor}
    />
  );
};

export default DPButton;
