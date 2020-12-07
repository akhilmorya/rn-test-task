import {StyleSheet} from 'react-native';
import scale, {width, height} from '../../utils/Scale';

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: scale(30),
  },
  usersContainer: {
    marginTop: 30,
    paddingHorizontal: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  row: {
    alignSelf: 'center',
    flexDirection: 'row',
  },
  userView: {
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profileImage: {
    height: 50,
    width: 50,
  },
  pickLabel: {
    fontSize: 14,
    marginTop: 20,
  },
  turnLabel: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: '800',
    alignSelf: 'center',
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
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  pickButton: {
    marginTop: 20,
    height: 40,
    width: 70,
    borderRadius: 6,
    backgroundColor: 'rgba(78,142,255,1)',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  optionText: {
    fontSize: 14,
    color: 'white',
    fontWeight: '800',
  },
  gameTitle: {
    width: width,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  top: {
    marginVertical: scale(10),
  },
  center: {
    alignSelf: 'center',
  },
  loader: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    height: height + 50,
    width: width,
  },
});
