import {combineReducers} from 'redux';
import token from './token-reducer';
import jobSearch from './jobSearch-reducer';

export default combineReducers({
  token,
  jobSearch
})
