import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import userReducer from './userReducer';
import CommonReducer from './commonReducer';

export default () => {
  const rootReducer = combineReducers({
    userReducer,
    CommonReducer,
  });

  return configureStore(rootReducer);
};
