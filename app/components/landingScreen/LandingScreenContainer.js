import React from 'react';
import {connect} from 'react-redux';
import LandingScreenComponent from './LandingScreenComponent';
import * as userActions from '../../actions/user';

const LandingScreenContainer = props => {
  return <LandingScreenComponent props={props} />;
};

const mapStateToProps = state => ({
  // user: state.user.user,
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
