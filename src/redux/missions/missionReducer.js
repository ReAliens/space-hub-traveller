import {
  JOIN_MISSION,
  MISSIONS_REQUEST_DONE,
  MISSIONS_REQUEST_ERROR,
  MISSIONS_REQUEST_START,
} from '../constants';
import addMissions from './missions.utils';

const initState = {
  loading: false,
  error: undefined,
  data: [],
  joinedMissions: [],
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

    case JOIN_MISSION:
      return {
        ...state,
        data: state.data.map((item) => {
          if (item.id !== action.payload.id) {
            return item;
          }
          return { ...item, joined: !item.joined };
        }),
        joinedMissions: addMissions(state.joinedMissions, action.payload),
      };
    default:
      return state;
  }
};

export default reducer;
