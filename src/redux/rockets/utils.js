import { loadingRocketRequest, getCurrentRocketsSuccess, rocketRequestFailure } from './rockets';

const ERROR = new Error('Something went wrong');

const loadRockets = () => async (dispatch) => {
  dispatch(loadingRocketRequest);
  try {
    const response = await fetch('https://api.spacexdata.com/v3/rockets');
    if (response.ok) {
      let rockets = await response.json();
      rockets = rockets.map((rocketData) => ({
        id: rocketData.id,
        name: rocketData.rocket_name,
        description: rocketData.description,
        images: rocketData.flickr_images,
        reserved: false,
      }));
      dispatch(getCurrentRocketsSuccess(rockets));
    } else throw (ERROR);
  } catch (error) {
    dispatch(rocketRequestFailure(error.message));
  }
};

export default loadRockets;
