import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
// import rocketsReducer from './rockets/rockets';
import missionInfo from './missions/missions';

const rootReducer = combineReducers({
  missionInfo,
  // rocketsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
