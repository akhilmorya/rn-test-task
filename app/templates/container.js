import React from 'react';
import {StyleSheet, SafeAreaView, View} from 'react-native';
import Content from './content';

const Container = ({
  header,
  body,
  footer,
  style = {},
  footerStyle = {},
  autoScroll = true,
  color = '#000',
  ...props
}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>
      {header}
      <Content>{body}</Content>
      <View style={[styles.footer, footerStyle]}>{footer}</View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    backgroundColor: '#000',
  },
  footer: {
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    bottom: 35,
  },
});
export default Container;
