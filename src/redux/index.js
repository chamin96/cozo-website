import { combineReducers } from "redux";
import user from './Reducer/UserReducer';

const reducers = {
    user
};
  
  export default combineReducers(reducers);