import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger';
import rootReducer from './rootReducer';

export const store = createStore(rootReducer, applyMiddleware(logger, thunk));
export const persistor = persistStore(store);

export default { store, persistor };
