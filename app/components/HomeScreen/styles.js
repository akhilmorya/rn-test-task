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
    headerTitle: {
    fontSize: 22,
    fontWeight: 'normal'
  },
  usersContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  userView: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  profileImage: {
    height: 50,
    width: 50,
    // borderRadius: 25
  },
  pickLabel: {
    fontSize: 14,
    marginTop: 20
  },
  turnLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center'
  },
  buttonsContainer: {
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    margin: 10,
    height: 30,
    width: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pickButton: {
    marginTop: 20,
    height: 40,
    width: 70,
    borderRadius: 10,
    backgroundColor: 'rgba(78,142,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '800'
  }
});
