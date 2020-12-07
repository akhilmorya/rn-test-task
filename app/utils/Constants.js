import {Platform, StatusBar} from 'react-native';

// Screen Constatnts
export const SCREEN_HEIGHT = 667;
export const SCREEN_WIDTH = 375;

// Header Height
export const StatusHeight = StatusBar.currentHeight;
export const iPhoneX = () =>
  Platform.OS === 'ios' && (SCREEN_HEIGHT === 812 || SCREEN_WIDTH === 812);
export const keyboardVerticalOffset = Platform.OS === 'ios' ? 40 : 0;

// Color Constants
export const WHITE_COLOR = '#FFFFFF';
export const BLACK_COLOR = '#000000';
export const GREY_COLOR = '#626262';
export const STATUS_BAR_BACKGROUND_COLOR = '#FFFFFF';
export const PRIMARY_COLOR = '#ed9121';
export const ACTIVE_TAB_COLOR = '#457ced';
export const TITLEBAR_BACKGROUND_COLOR = 'rgb(253,249,249)';
export const BORDER_COLOR_GREY = 'rgb(208,208,208)';
export const BORDER_COLOR_GREY_LIGHT = 'rgb(221,221,221)';
export const BORDER_SHADOW_COLOR = 'rgba(0,0,0,0.03)';
export const BLUE_COLOR_COLLAPSE = 'rgb(69,124,237)';
export const ICON_BG = 'rgb(253, 249, 249)';
export const LIGHT_GREY_BG = 'rgb(235, 235, 235)';
export const LIGHT_GREY_COLOR = '#efefef';
export const GREY_DARK = '#323232';
export const PRIMARY_DARK_COLOR = '#a24900';

// Font Weight Constants
export const fontWeight = {
  Thin: '100',
  UltraLight: '200',
  Light: '300',
  Regular: '400',
  Medium: '500',
  Semibold: '600',
  Bold: '700',
  Heavy: '800',
  Black: '900',
};

// CONFIGURATIONS
export const API_TIMEOUT = 30000;

// API CALLING CONSTANTS
export const GET_API = 'GET';
export const POST_API = 'POST';
export const PUT_API = 'PUT';
export const DELETE_API = 'DELETE';
export const UPDATE_API = 'PUT';

// Saga Constants
export const START_UP = 'START_UP';

/**
 * @Brands Constants
 */

export const START_SPINNER = 'START_SPINNER';
export const STOP_SPINNER = 'STOP_SPINNER';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const LOGOUT = 'LOGOUT';
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS';
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE';

export const GET_USER = 'GET_USER';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILURE = 'GET_USER_FAILURE';

// Style Constants
export const POSITION_ABSOLUTE = 'absolute';
export const POSITION_RELATIVE = 'relative';
export const CENTER = 'center';
export const UNDEFINED = 'undefined';
export const SPACE_BETWEEN = 'space-between';
export const FLEX_START = 'flex-start';
export const FLEX_END = 'flex-end';
export const ROW = 'row';
export const COLUMN = 'column';
export const WINDOW = 'window';
export const PLATFORM_ANDROID = 'android';
export const PLATFORM_IOS = 'ios';
export const POSITION_RIGHT = 'right';
export const SPACE_AROUND = 'space-around';
export const STRETCH = 'stretch';
export const CONTAIN = 'contain';
export const BOLD = 'bold';
