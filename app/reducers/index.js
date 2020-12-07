import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import rootSaga from '../sagas';
import StartUpReducer from './StartUpReducer';
import userReducer from './userReducer';
import CommonReducer from './commonReducer';

export default () => {
  const rootReducer = combineReducers({
    StartUpReducer,
    userReducer,
    CommonReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
