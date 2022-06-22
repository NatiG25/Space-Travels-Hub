import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import thunk from 'redux-thunk';
import missionInfo from './missions/missions';

const rootReducer = combineReducers({ missionInfo });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
