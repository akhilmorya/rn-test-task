import React from 'react';
import {Image, View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import scale from '../utils/Scale';

const Header = ({title, img, onPressLeft}) => (
  <View style={styles.row}>
    <TouchableOpacity
      style={[styles.img, {height: scale(24), width: scale(24)}]}
      onPress={onPressLeft}>
      <Image source={img} style={styles.img} />
    </TouchableOpacity>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: scale(55),
    backgroundColor: '#FFF',
  },
  img: {
    alignSelf: 'center',
    position: 'absolute',
    left: scale(10),
    top: scale(10),
  },
  title: {
    color: '#000',
    fontSize: scale(20),
    lineHeight: scale(32),
    fontStyle: 'normal',
    textAlign: 'center',
    fontWeight: 'bold',
    alignSelf: 'center',
  },
});
export default Header;
