import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(30),
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
