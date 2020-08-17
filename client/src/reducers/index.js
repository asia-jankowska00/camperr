import { combineReducers } from "redux";
import campgroundReducer from "./campgroundReducer";
import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import routerReducer from "./routerReducer";
import categoriesReducer from "./categoriesReducer";
import userReducer from "./userReducer";

export default combineReducers({
  campground: campgroundReducer,
  auth: authReducer,
  error: errorReducer,
  router: routerReducer,
  categories: categoriesReducer,
  user: userReducer,
});
