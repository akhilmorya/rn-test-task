import React from 'react';
import {connect} from 'react-redux';
import HomeScreenComponent from './HomeScreenComponent';
import * as userActions from '../../actions/user';

const HomeScreenContainer = props => {
  return <HomeScreenComponent props={props} />;
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = dispatch => ({
  addToResult: data => {
    return dispatch(userActions.addToResult(data));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
