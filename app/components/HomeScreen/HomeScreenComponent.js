import React, {useState} from 'react';
import {View, Image, ActivityIndicator, SafeAreaView} from 'react-native';
import SelectionGroup, {SelectionHandler} from 'react-native-selection-group';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';
import DPButton from '../../atom/button';
import styles from './styles';
import showOkAlert from '../../utils/ShowAlert';
import Utility from '../../utils/utility';
import * as Images from '../../theme/Images';

export default function HomeScreenComponent({props}) {
  const [isUserTurn, setTurn] = useState(true);
  const [userPickedCount, setUserPickCount] = useState(0);
  const [botPickedCount, setBOTPickCount] = useState(0);
  const [selectedButton, setSelection] = useState(1);
  const [remainingSticks, setRemainingSticks] = useState(21);

  const pickStick = num => {
    setUserPickCount(userPickedCount + num);
    setTurn(false);
    let leftSticks = remainingSticks - num;
    setRemainingSticks(leftSticks);
    setTimeout(() => {
      const botPick = 5 - num;
      leftSticks = leftSticks - botPick;
      setRemainingSticks(leftSticks);
      setBOTPickCount(botPickedCount + botPick);
      setTurn(true);
      if (leftSticks === 1) {
        showOkAlert('Sorry, You lost the game', 'Result', () => {
          const resultData = {
            userName: props.user.userName,
            picked: userPickedCount + num
          }
          props.addToResult(resultData)
          props.navigation.navigate('ResultScreen');
        });
      }
    }, 1000);
  };

  const selectionHandler = new SelectionHandler({
    maxMultiSelect: 0,
    allowDeselect: false,
  });

  const onPickButtonPress = () => {
    if (remainingSticks === 1 && isUserTurn) {
      showOkAlert('Sorry, You lost the game', 'Result', () => {
        props.navigation.navigate('ResultScreen');
      });
    } else {
      pickStick(selectedButton);
    }
  };

  const renderHeader = () => {
    return (
      <View style={styles.gameTitle}>
        {DPLabel({
          title: 'Board Game',
          textType: 'fullCapital',
          alignment: 'center',
          size: 25,
        })}
      </View>
    );
  };

  const renderUserView = () => {
    const color = isUserTurn ? 'rgba(78,142,255,1)' : 'gray';
    return (
      <View style={styles.userView}>
        <Image
          style={[styles.profileImage, {tintColor: color}]}
          source={Images.user}
        />
        <View style={styles.top}>
          {DPLabel({
            title: props.user.userName,
            textType: 'fullCapital',
            alignment: 'center',
            size: 14,
            textColor: color,
          })}
        </View>
        {DPLabel({
          title: `Picked : ${userPickedCount}`,
          textType: 'fullCapital',
          alignment: 'center',
          size: 14,
          textColor: color,
        })}
      </View>
    );
  };

  const renderAIView = () => {
    const color = !isUserTurn ? 'rgba(78,142,255,1)' : 'gray';
    return (
      <View style={styles.userView}>
        <Image
          style={[styles.profileImage, {tintColor: color}]}
          source={Images.bot}
        />
        <View style={styles.top}>
          {DPLabel({
            title: 'BOT',
            textType: 'fullCapital',
            alignment: 'center',
            size: 14,
            textColor: color,
          })}
        </View>
        {DPLabel({
          title: `Picked : ${botPickedCount}`,
          textType: 'fullCapital',
          alignment: 'center',
          size: 14,
          textColor: color,
        })}
      </View>
    );
  };

  const renderUsersView = () => {
    return (
      <View style={styles.usersContainer}>
        {renderUserView()}
        {renderAIView()}
      </View>
    );
  };

  const renderTurnView = () => {
    return (
      <View style={styles.top}>
        {DPLabel({
          title: `Available Sticks : ${remainingSticks}`,
          textType: 'fullCapital',
          alignment: 'center',
          size: 14,
        })}
        {DPLabel({
          title: isUserTurn ? 'Your Turn' : 'Bot Turn ',
          textType: 'fullCapital',
          alignment: 'center',
          size: 14,
        })}
      </View>
    );
  };

  const renderButton = (data, index, isSelected, onPress) => {
    return DPButton({
      title: data.optionText,
      onPress: onPress,
      buttonColor:
        selectedButton === data.value || isSelected
          ? 'rgba(78,142,255,1)'
          : 'rgba(141,196,63,1)',
      btnStyle: styles.button,
    });
  };

  const renderSelectionButtons = () => {
    return (
      <View style={styles.buttonsContainer}>
        <SelectionGroup
          renderContent={renderButton}
          items={Utility.getButtonsOption()}
          onPress={selectionHandler.selectionHandler}
          isSelected={selectionHandler.isSelected}
          containerStyle={styles.row}
          onItemSelected={item => setSelection(item.value)}
        />
        {DPButton({
          title: 'Pick',
          onPress: () => onPickButtonPress(),
          buttonColor: 'rgba(78,142,255,1)',
          btnStyle: styles.pickButton,
        })}
      </View>
    );
  };

  const renderLoader = () => {
    if (isUserTurn) {
      return null;
    }
    return (
      <View style={styles.loader}>
        <ActivityIndicator
          size='large'
          color='rgba(78,142,255,1)'
          style={styles.center}
        />
      </View>
    );
  };

  const renderBody = () => {
    return (
      <SafeAreaView style={styles.container}>
        {renderUsersView()}
        {renderTurnView()}
        {renderSelectionButtons()}
        {renderLoader()}
      </SafeAreaView>
    );
  };

  return <Container header={renderHeader()} body={renderBody()} />;
}
