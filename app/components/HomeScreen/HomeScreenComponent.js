import React from 'react';
import {View, Keyboard} from 'react-native';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';
import DPButton from '../../atom/button';
import styles from './styles';

export default class HomeScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
    };
  }

  componentDidMount() {}

  login() {
    Keyboard.dismiss();
    const {email} = this.state;
    const data = {
      email: email,
    };
    //this.props.logout(data);
  }

  renderBody = () => {
    const {email} = this.state;
    return (
      <View>
        {DPLabel({
          title: 'MatchStick Game',
          textType: 'fullCapital',
          alignment: 'center',
          size: 25,
        })}
        <View style={styles.container}>
          <View style={styles.email}>
            {DPLabel({
              title: `Hi, ${email}`,
              alignment: 'left',
            })}
          </View>
          <View style={styles.signBtn}>
            {DPButton({
              title: 'Logout',
              type: 'medium',
              onPress: () => this.login(),
            })}
          </View>
        </View>
      </View>
    );
  };

  render() {
    return <Container body={this.renderBody()} />;
  }
}
