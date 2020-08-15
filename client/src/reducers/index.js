import { combineReducers } from "redux";
import campgroundReducer from "../reducers/campgroundReducer";
import authReducer from "../reducers/authReducer";
import errorReducer from "../reducers/errorReducer";
import routerReducer from "./routerReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  campground: campgroundReducer,
  auth: authReducer,
  error: errorReducer,
  router: routerReducer,
  categories: categoriesReducer,
});
