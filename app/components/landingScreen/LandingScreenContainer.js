import React from 'react';
import {connect} from 'react-redux';
import LandingScreenComponent from './LandingScreenComponent';
import * as userActions from '../../actions/user';

class LandingScreenContainer extends React.Component {

  constructor(props) {
    super(props);
  }

componentDidUpdate(prevProp) {
  if(this.props.user && this.props.user !== prevProp.user) {
    this.props.navigation.navigate('HomeScreen')
  }
}

render() {
  return (
    <LandingScreenComponent {...this.props} />
  );
}
}

const mapStateToProps = state => (
  {
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
