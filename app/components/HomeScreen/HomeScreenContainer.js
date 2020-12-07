import React from 'react';
import {connect} from 'react-redux';
import HomeScreenComponent from './HomeScreenComponent';

const HomeScreenContainer = props => {
  return <HomeScreenComponent props={props} />;
};

const mapStateToProps = state => ({
  user: state.userReducer.user,
});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(HomeScreenContainer);
