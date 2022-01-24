const LOADING_REQUEST = 'LOADING_REQUEST';
const GET_CURRENT_ROCKETS_SUCCESS = 'GET_CURRENT_ROCKETS_SUCCESS';
const REQUEST_FAILURE = 'REQUEST_FAILURE';
const REQUEST_SUCCESS = 'REQUEST_SUCCESS';

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

    default:
      return state;
  }
};

export default reducer;
