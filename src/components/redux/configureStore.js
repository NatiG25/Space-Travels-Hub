import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const rootReducer = combineReducers({
  missionReducer,
  rocketReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
