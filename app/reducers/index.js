import {combineReducers} from 'redux';
import configureStore from '../stores/CreateStore';
import rootSaga from '../sagas';
import StartUpReducer from './StartUpReducer';
import user from './userReducer';
import CommonReducer from './commonReducer';

export default () => {
  const rootReducer = combineReducers({
    StartUpReducer,
    user,
    CommonReducer,
  });

  return configureStore(rootReducer, rootSaga);
};
