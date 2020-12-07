import React from 'react';
import {connect} from 'react-redux';
import LandingScreenComponent from './LandingScreenComponent';
import * as userActions from '../../actions/user';
import NavigationService from '../../services/NavigationService';

class LandingScreenContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.user) {
      this.props.navigation.replace('HomeScreen'); // If already logged in
    }
  }

  componentDidUpdate(prevProp) {
    if (this.props.user && this.props.user !== prevProp.user) {
      NavigationService.navigateAndReset('HomeScreen');
    }
  }

  render() {
    return <LandingScreenComponent {...this.props} />;
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  login: data => {
    return dispatch(userActions.login(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LandingScreenContainer);
