import { combineReducers } from 'redux';
import persistReducer from 'redux-persist/es/persistReducer';
import storage from 'redux-persist/lib/storage';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missionReducer';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['readyRockets', 'excistedMissions'],
};

const rootReducer = combineReducers({
  readyRockets: rocketReducer,
  excistedMissions: missionReducer,
});

export default persistReducer(persistConfig, rootReducer);
