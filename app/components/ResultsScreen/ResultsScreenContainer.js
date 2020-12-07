import React from 'react';
import {connect} from 'react-redux';
import ResultsScreenComponent from './ResultsScreenComponent';

const ResultsScreenContainer = props => {
  return <ResultsScreenComponent props={props} />;
};

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ResultsScreenContainer);
