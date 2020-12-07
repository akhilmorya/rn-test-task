import {StyleSheet} from 'react-native';
import ApplicationStyles from '../../theme/ApplicationStyles';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(30),
    alignItems: 'center',
    justifyContent: 'center'
  },
  playAgainButton: {
    marginTop: 50,
    height: 45,
    width: 110,
    borderRadius: 10,
    backgroundColor: 'rgba(78,142,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playAgainText: {
    fontSize: 16,
    color: '#FFF'
  }
});
