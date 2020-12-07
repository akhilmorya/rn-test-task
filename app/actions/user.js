import * as CONST from '../utils/Constants';

export function login(data) {
  return {
    type: CONST.LOGIN_START,
    data,
  };
}

export function loginSuccess(data) {
  return {
    type: CONST.LOGIN_SUCCESS,
    data,
  };
}

export function loginFaliure(data) {
  return {
    type: CONST.LOGIN_FAILURE,
    data,
  };
}

export function logout(data) {
  return {
    type: CONST.LOGOUT,
    data,
  };
}

export function logoutSuccess(data) {
  return {
    type: CONST.LOGOUT_SUCCESS,
    data,
  };
}

export function logoutFaliure(data) {
  return {
    type: CONST.LOGOUT_FAILURE,
    data,
  };
}

export function user(data) {
  return {
    type: CONST.GET_USER,
    data,
  };
}

export function userSuccess(data) {
  return {
    type: CONST.GET_USER_SUCCESS,
    data,
  };
}

export function userFaliure(data) {
  return {
    type: CONST.GET_USER_FAILURE,
    data,
  };
}

export function addToResult(data) {
  return {
    type: CONST.ADD_RESULTS,
    data,
  };
}
