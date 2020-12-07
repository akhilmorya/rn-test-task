import React from 'react';
import {View, FlatList, Text} from 'react-native';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';
import DPButton from '../../atom/button';
import Utility from '../../utils/utility';
import styles from './styles';

export default function ResultsScreenComponent({props}) {
  const onPlayAgainPress = () => {
    props.navigation.replace('HomeScreen');
  };

  const renderHeaderView = () => {
    return DPLabel({
      title: 'You Lost the game',
      textType: 'fullCapital',
      alignment: 'center',
      size: 20,
    });
  };

  const renderItem = ({item}) => {
    if (item.userName === Utility.getUserName(props.user.email)) {
      return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{color: '#FFF'}}>You Picked: {item.picked}</Text>
          <Text style={{color: '#FFF'}}>Result : Lost</Text>
        </View>
      );
    } else {
      return null;
    }
  };

  const renderHistory = () => {
    if (props.gameResult && props.gameResult.length === 0) {
      return null;
    }
    return (
      <View style={{marginTop: 30, alignSelf: 'stretch', marginHorizontal: 40}}>
        <Text style={{color: '#FFF', alignSelf: 'center', marginBottom: 20}}>
          Game Results
        </Text>
        <FlatList
          data={props.gameResult}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  };

  const renderPlayAgain = () => {
    return DPButton({
      title: 'Play Again',
      buttonColor: 'green',
      onPress: () => onPlayAgainPress(),
      btnStyle: styles.playAgainButton,
    });
  };

  const renderBody = () => {
    return (
      <View style={styles.container}>
        {renderHeaderView()}
        {renderHistory()}
        {renderPlayAgain()}
      </View>
    );
  };

  return <Container body={renderBody()} />;
}
