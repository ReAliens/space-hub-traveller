import {
  JOIN_MISSION,
  MISSIONS_REQUEST_DONE,
  MISSIONS_REQUEST_ERROR,
  MISSIONS_REQUEST_START,
} from '../constants';

const ERROR = new Error('Something went wrong');

export const missionFetchStart = () => ({
  type: MISSIONS_REQUEST_START,
});

export const missionFetchDone = (payload) => ({
  type: MISSIONS_REQUEST_DONE,
  payload,
});

export const missionFetchError = (payload) => ({
  type: MISSIONS_REQUEST_ERROR,
  payload,
});

export const joinMession = (payload) => ({
  type: JOIN_MISSION,
  payload,
});

export const fetchMissions = () => async (dispatch) => {
  dispatch(missionFetchStart());
  try {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    if (response.ok) {
      let missions = await response.json();
      missions = missions.map((mission) => ({
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      }));
      dispatch(missionFetchDone(missions));
    } else throw ERROR;
  } catch (error) {
    dispatch(missionFetchError(error.message));
  }
};
