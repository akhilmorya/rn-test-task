import React, { useState } from 'react';
import {ScrollView, View, Text, Dimensions, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import SelectionGroup, { SelectionHandler } from 'react-native-selection-group';
import showOkAlert from '../../utils/ShowAlert'
import Utility from '../../utils/utility';
import * as Images from '../../theme/Images';
import styles from './styles';

export default function HomeScreenComponent({props}) {
  const DEVICE_WIDTH = Dimensions.get('window').width;
  const DEVICE_HEIGHT = Dimensions.get('window').height;
  const [isUserTurn, setTurn] = useState(true);
  const [userPickedCount, setUserPickCount] = useState(0);
  const [botPickedCount, setBOTPickCount] = useState(0);
  const [selectedButton, setSelection] = useState(1);
  const [remainingSticks, setRemainingSticks] = useState(21);

  const pickStick = (num) => {
    setUserPickCount(userPickedCount + num);
    setTurn(false);
    let leftSticks = remainingSticks - num;
    setRemainingSticks(leftSticks);
    setTimeout(() => {
      const botPick = 5 - num;
      leftSticks = leftSticks - botPick;
      setRemainingSticks(leftSticks);
      setBOTPickCount(botPickedCount + botPick);
      setTurn(true)
      if(leftSticks === 1) {
        showOkAlert('Sorry, You lost the game', 'Result', () => {props.navigation.navigate('ResultScreen')})
      }
    }, 2000);
  }

  const selectionHandler = new SelectionHandler({ maxMultiSelect: 0, allowDeselect: false });

  onPickButtonPress = () => {
    if(remainingSticks === 1 && isUserTurn) {
      showOkAlert('Sorry, You lost the game', 'Result', () => {props.navigation.navigate('ResultScreen')})
    } else {
      pickStick(selectedButton);
    }
  }

  renderHeader = () => {
    return (
      <View style={{ width: DEVICE_WIDTH, padding: 20, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerTitle}>Board Game</Text>
      </View>
    );
  }

  renderUserView = () => {
    const color = isUserTurn ? 'rgba(78,142,255,1)' : 'gray';
    return(
      <View style={styles.userView}>
        <Image
          style={[styles.profileImage, { tintColor: color }]}
          source={require('../../../assets/images/user.png')}
        />
        <Text style={{ color: color, marginTop: 5 }}>User Name</Text>
        <Text style={[styles.pickLabel, { color: color }]}>Picked : {userPickedCount}</Text>
      </View>
    );
  }

  renderAIView = () => {
    const color = !isUserTurn ? 'rgba(78,142,255,1)' : 'gray';
    return(
      <View style={styles.userView}>
        <Image
          style={[styles.profileImage, { tintColor: color }]}
          source={require('../../../assets/images/robot.png')}
        />
        <Text style={{ color: color, marginTop: 5 }}>BOT</Text>
        <Text style={[styles.pickLabel, { color: color }]}>Picked : {botPickedCount}</Text>
      </View>
    );
  }

  renderUsersView = () => {
    return(
      <View style={styles.usersContainer}>
        {renderUserView()}
        {renderAIView()}
      </View>
    );
  }

  renderTurnView = () => {
    return(
      <View>
        <Text style={styles.turnLabel}>Available Sticks : {remainingSticks}</Text>
        <Text style={styles.turnLabel}>{isUserTurn ? 'Your Turn' : 'Bot Turn '}</Text>
      </View>
    );
  }

  renderButton = (data, index, isSelected, onPress) => {
    return (<TouchableOpacity
      onPress={onPress}
      key={index}
      style={[styles.button, 
        { backgroundColor: (selectedButton === data.value) || isSelected ? 'rgba(78,142,255,1)' : 'rgba(141,196,63,1)' }]}
    >
    <Text>{data.optionText}</Text>
    </TouchableOpacity>
    );
  }

  renderSelectionButtons = () => {
    return(
      <View style={styles.buttonsContainer}>
        <SelectionGroup 
          renderContent={renderButton}
          items={Utility.getButtonsOption()}
          onPress={selectionHandler.selectionHandler}
          isSelected={selectionHandler.isSelected}
          containerStyle={{ alignSelf: 'center', flexDirection: 'row' }}
          onItemSelected={(item) => setSelection(item.value)}
        />
      <TouchableOpacity style={styles.pickButton} onPress={() => onPickButtonPress()}>
        <Text style={styles.pickText}>Pick</Text>
      </TouchableOpacity>
    </View>
    );
  }

  renderLoader = () => {
    if(isUserTurn) return null;
    return (
      <View style={{ position: 'absolute', alignItems: 'center', justifyContent: 'center', flex: 1, height: DEVICE_HEIGHT + 50, width: DEVICE_WIDTH }}>
        <ActivityIndicator size="large" color='rgba(78,142,255,1)' style={{ alignSelf: 'center' }} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.container}>
        {renderHeader()}
        {renderUsersView()}
        {renderTurnView()}
        {renderSelectionButtons()}
        {renderLoader()}
      </View>
    </ScrollView>
  );
}

