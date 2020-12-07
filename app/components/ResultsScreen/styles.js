import {StyleSheet} from 'react-native';
import scale from '../../utils/Scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: scale(40),
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
    color: '#FFF',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
