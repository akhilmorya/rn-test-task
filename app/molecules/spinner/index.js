import React, {Component} from 'react';
import {View, ActivityIndicator, Modal} from 'react-native';
import {connect} from 'react-redux';
import styles from './style';

class Spinner extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.isFetching) {
      return null;
    } else {
      return (
        <View style={styles.container}>
          <Modal
            transparent
            animationType={'fade'}
            visible={this.props.isFetching}
            onRequestClose={() => {}}>
            <View style={styles.modalBackground}>
              <View style={styles.activityIndicatorWrapper}>
                <ActivityIndicator animating size={'large'} color={'green'} />
              </View>
            </View>
          </Modal>
        </View>
      );
    }
  }
}

function mapStateToProps(state) {
  const {commonReducer} = state;
  return {
    isFetching: commonReducer.isFetching,
  };
}

export default connect(mapStateToProps)(Spinner);
