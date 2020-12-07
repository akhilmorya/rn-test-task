import React from 'react';
import {View} from 'react-native';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';
import DPButton from '../../atom/button';
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
        {renderPlayAgain()}
      </View>
    );
  };

  return <Container body={renderBody()} />;
}
