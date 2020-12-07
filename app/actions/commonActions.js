import * as CONST from '../utils/Constants';

// Mark - This action starts the common spinner.
export function startSpinner() {
  return {type: CONST.START_SPINNER};
}

// Mark - This action stops the common spinner.
export function stopSpinner() {
  return {type: CONST.STOP_SPINNER};
}
