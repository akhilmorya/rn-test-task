import React from 'react';
import {View, Keyboard} from 'react-native';
import Container from '../../templates/container';
import DPLabel from '../../atom/label';
import DPButton from '../../atom/button';
import DPInput from '../../atom/input';
import Validators from '../../utils/Validators';
import Utility from '../../utils/utility';
import styles from './styles';

export default class LandingScreenComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  login() {
    Keyboard.dismiss();
    const {email, password} = this.state;
    if (email.length === 0) {
      this.setState({
        emailEmpty: true,
        emailErr: 'Please enter your email address',
      });
    } else if (Validators.validEmail(email)) {
      this.setState({
        emailEmpty: true,
        emailErr: 'Please the valid email address',
      });
    } else if (password.length === 0) {
      this.setState({
        passWordEmpty: true,
        passwordErr: 'Please enter the password',
      });
    } else {
      this.setState({
        emailEmpty: false,
        emailErr: '',
        passWordEmpty: false,
        passwordErr: '',
      });
      const data = {
        email: email,
        password: password,
        userName: Utility.getUserName(email),
      };
      this.props.login(data);
    }
  }

  renderBody = () => {
    const {
      email,
      emailErr,
      passwordErr,
      emailEmpty,
      password,
      passWordEmpty,
    } = this.state;
    return (
      <View style={styles.container}>
        {DPLabel({
          title: 'MatchStick Game',
          textType: 'fullCapital',
          alignment: 'center',
          size: 25,
        })}
        <View style={styles.content}>
          <View style={styles.email}>
            {DPLabel({
              title: 'Email',
              alignment: 'left',
            })}
            {DPInput({
              type: 'email-address',
              value: email,
              clearButtonMode: 'while-editing',
              onChangeText: (text, isFieldEmpty) =>
                this.setState({email: text, emailEmpty: isFieldEmpty}),
              returnKeyType: 'next',
              autoFocus: true,
            })}
            {emailEmpty
              ? DPLabel({
                  title: emailErr,
                  type: 'danger',
                  alignment: 'left',
                })
              : null}
          </View>
          <View style={styles.password}>
            {DPLabel({
              title: 'Password',
              alignment: 'left',
            })}
            {DPInput({
              value: password,
              onChangeText: (text, isFieldEmpty) =>
                this.setState({
                  password: text,
                  passWordEmpty: isFieldEmpty,
                }),
              returnKeyType: 'done',
            })}
            {passWordEmpty
              ? DPLabel({
                  title: passwordErr,
                  type: 'danger',
                })
              : null}
          </View>
          <View style={styles.signBtn}>
            {DPButton({
              title: 'Login',
              buttonColor: 'green',
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
