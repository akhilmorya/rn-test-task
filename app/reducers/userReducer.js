import * as CONST from '../utils/Constants';

const initialState = {
  user: null,
  message: '',
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.LOGIN_START:
      return {
        ...state,
        user: action.data,
        message: CONST.LOGIN_START,
      };
    case CONST.LOGIN_SUCCESS:
      return {
        ...state,
        message: CONST.LOGIN_SUCCESS,
        user: action.data,
      };
    case CONST.LOGIN_FAILURE:
      return {
        ...state,
        message: CONST.LOGIN_FAILURE,
        user: null,
      };
    case CONST.LOGOUT:
      return {
        ...state,
        message: CONST.LOGOUT_SUCCESS,
      };
    case CONST.LOGOUT_FAILURE:
      return {
        ...state,
        message: CONST.LOGOUT_FAILURE,
      };
    case CONST.GET_USER:
      return {
        ...state,
        message: CONST.GET_USER,
      };
    case CONST.GET_USER_SUCCESS:
      return {
        ...state,
        message: CONST.GET_USER_SUCCESS,
        user: action.data,
      };
    case CONST.GET_USER_FAILURE:
      return {
        ...state,
        message: CONST.GET_USER_FAILURE,
        user: null,
      };
    default:
      return state;
  }
}
