import {StyleSheet} from 'react-native';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: scale(40),
  },
  password: {
    marginVertical: scale(15),
    marginHorizontal: scale(15),
  },
  email: {
    marginVertical: scale(15),
    marginHorizontal: scale(15),
  },
  signBtn: {
    marginTop: scale(30),
    alignSelf: 'center',
  },
});
