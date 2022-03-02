import {
  createStore, combineReducers, applyMiddleware, compose,
} from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missionReducer from './missions/missions';
import rocketReducer from './rockets/rockets';

const reducer = combineReducers({
  rockets: rocketReducer,
  missions: missionReducer,
});

const store = createStore(reducer, compose(applyMiddleware(thunk, logger)));

export default store;
