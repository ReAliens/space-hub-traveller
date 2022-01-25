import {
  LOADING_ROCKET_REQUEST,
  GET_CURRENT_ROCKETS_SUCCESS,
  ROCKET_REQUEST_FAILURE,
  CHANGE_RESERVATION,
} from './constants';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const loadingRocketRequest = () => ({
  type: LOADING_ROCKET_REQUEST,
});

export const getCurrentRocketsSuccess = (payload) => ({
  type: GET_CURRENT_ROCKETS_SUCCESS,
  payload,
});

export const rocketRequestFailure = (payload) => ({
  type: ROCKET_REQUEST_FAILURE,
  payload,
});

export const changeReservation = (payload) => ({
  type: CHANGE_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_ROCKET_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case GET_CURRENT_ROCKETS_SUCCESS:
      return {
        ...state,
        loading: false,
        rockets: action.payload,
      };

    case ROCKET_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: `${action.payload}`,
      };

    case CHANGE_RESERVATION:
      return {
        ...state,
        rockets: state.rockets.map((rocket) => {
          if (rocket.id !== action.payload) {
            return rocket;
          }
          return { ...rocket, reserved: !rocket.reserved };
        }),
      };

    default:
      return state;
  }
};

export default reducer;
