import React from 'react';
import {View} from 'react-native';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';

export default function LandingScreenComponent() {
  const renderBody = () => {
    return (
      <View>
        {DPLabel({
          title: 'MatchStick Game',
          textType: 'fullCapital',
          alignment: 'center',
        })}
      </View>
    );
  };
  return <Container body={renderBody()} />;
}
