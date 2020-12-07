import React from 'react';
import {
  StyleSheet,
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
} from 'react-native';
import * as CONST from '../utils/Constants';

const Content = props => {
  return (
    <ScrollView
      bounces={false}
      style={styles.container}
      keyboardShouldPersistTaps={'always'}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView
          behavior={'position'}
          keyboardVerticalOffset={CONST.keyboardVerticalOffset}>
          {props.children}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Content;
