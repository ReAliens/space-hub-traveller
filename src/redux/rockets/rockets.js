const LOADING_REQUEST = 'LOADING_REQUEST';
const GET_CURRENT_ROCKETS_SUCCESS = 'GET_CURRENT_ROCKETS_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
const CHANGE_RESERVATION = 'CHANGE_RESERVATION';

const initialState = {
  loading: false,
  rockets: [],
  error: '',
};

export const loadingRequest = () => ({
  type: LOADING_REQUEST,
});

export const getCurrentRocketsSuccess = (payload) => ({
  type: GET_CURRENT_ROCKETS_SUCCESS,
  payload,
});

export const requestFailure = (payload) => ({
  type: REQUEST_FAILURE,
  payload,
});

export const requestSuccess = () => ({
  type: REQUEST_SUCCESS,
});

export const changeReservation = (payload) => ({
  type: CHANGE_RESERVATION,
  payload,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING_REQUEST:
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

    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
      };

    case REQUEST_FAILURE:
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
            console.log(action.payload, rocket.id);
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
