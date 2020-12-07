import * as CONST from '../utils/Constants';

const initialState = {
  isFetching: false,
};

// This reducer stores the state of common spinner and modal.
export function commonReducer(state = initialState, action) {
  switch (action.type) {
    case CONST.START_SPINNER:
      return {
        ...state,
        isFetching: true,
      };
    case CONST.STOP_SPINNER:
      return {
        ...state,
        isFetching: false,
      };
    default:
      return state;
  }
}

export default {commonReducer};
