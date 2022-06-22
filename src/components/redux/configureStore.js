import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rockets';

const allReducers = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(
  allReducers,
  applyMiddleware(thunk),
);

export default store;
