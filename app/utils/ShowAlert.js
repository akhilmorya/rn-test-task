import { Alert } from 'react-native';

export default function showOkAlert(message, title, okCallBack) {
    Alert.alert(
      title || 'Alert',
      message, [{
        text: 'Ok',
        onPress: () => {
          if (okCallBack != undefined) {
            okCallBack();
          }
        }
      }],
      { cancelable: false }
    );
  }