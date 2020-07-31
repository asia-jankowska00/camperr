import {
  GET_CAMPGROUNDS,
  GET_CAMPGROUND,
  ADD_CAMPGROUND,
  UPDATE_CAMPGROUND,
  DELETE_CAMPGROUND,
  CAMPGROUNDS_LOADING,
} from "../actions/types";

const initialState = {
  campgrounds: [],
  campground: {},
  loading: false,
};

export default function campgroundReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CAMPGROUNDS:
      return {
        ...state,
        campgrounds: action.payload,
        loading: false,
      };

    case GET_CAMPGROUND:
      return {
        ...state,
        campground: action.payload,
        loading: false,
      };

    case ADD_CAMPGROUND:
      return {
        ...state,
        campgrounds: [action.payload, ...state.campgrounds],
      };

    case UPDATE_CAMPGROUND:
      return {
        ...state,
        campground: action.payload,
        loading: false,
      };

    case DELETE_CAMPGROUND:
      return {
        ...state,
        campgrounds: state.campgrounds.filter(
          (campground) => campground._id !== action.payload
        ),
      };

    case CAMPGROUNDS_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}
