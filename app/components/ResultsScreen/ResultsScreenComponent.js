import React, { useState } from 'react';
import {ScrollView, View, Text, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import SelectionGroup, { SelectionHandler } from 'react-native-selection-group';
import styles from './styles';

export default function ResultsScreenComponent({props}) {

  const onPlayAgainPress = () => {
    props.navigation.replace('HomeScreen')
  }

  const renderHeaderView = () => {
    return(
      <Text>You Lost the game</Text>
    );
  }

  const renderPlayAgain = () => {
    return (
      <TouchableOpacity style={styles.playAgainButton} onPress={() => onPlayAgainPress()}>
        <Text style={styles.playAgainText}>Play Again</Text>
      </TouchableOpacity>
    )
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {renderHeaderView()}
        {renderPlayAgain()}
      </View>
    </ScrollView>
  );
}

