import { MISSIONS_REQUEST_DONE, MISSIONS_REQUEST_ERROR, MISSIONS_REQUEST_START } from '../constants';

const initState = {
  loading: false,
  error: undefined,
  data: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case MISSIONS_REQUEST_START:
      return {
        ...state,
        loading: true,
      };
    case MISSIONS_REQUEST_DONE:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case MISSIONS_REQUEST_ERROR:
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
