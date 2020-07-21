import { combineReducers } from "redux";
import campgroundReducer from "../reducers/campgroundReducer";

export default combineReducers({
  campground: campgroundReducer,
});
