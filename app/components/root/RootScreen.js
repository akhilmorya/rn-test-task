import React, {Component} from 'react';
import {View, SafeAreaView} from 'react-native';
import NavigationService from '../../services/NavigationService';
import AppNavigator from '../../navigators/AppNavigator';
import styles from './RootScreenStyle';

class RootScreen extends Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.container}>
          <AppNavigator
            ref={navigatorRef => {
              NavigationService.setTopLevelNavigator(navigatorRef);
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

export default RootScreen;
