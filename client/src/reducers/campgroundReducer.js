import {
  GET_CAMPGROUNDS,
  GET_CAMPGROUND,
  GET_COTD,
  ADD_CAMPGROUND,
  UPDATE_CAMPGROUND,
  DELETE_CAMPGROUND,
  ADD_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
  CAMPGROUNDS_LOADING,
  GET_CAMPGROUNDS_BY_CAT,
  GET_CAMPGROUNDS_BY_USER,
} from "../actions/types";

const initialState = {
  campgrounds: [],
  campground: {},
  campgroundOfTheDay: {},
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

    case GET_COTD:
      return {
        ...state,
        campgroundOfTheDay: action.payload,
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

    case ADD_REVIEW:
      return {
        ...state,
        campground: {
          ...state.campground,
          reviews: [...state.campground.reviews, action.payload],
        },
      };

    case UPDATE_REVIEW:
      const newReviews = state.campground.reviews.map((review) => {
        if (review._id === action.payload._id) {
          review = action.payload;
        }
        return review;
      });
      return {
        ...state,
        campground: {
          ...state.campground,
          reviews: newReviews,
        },
      };

    case DELETE_REVIEW:
      return {
        ...state,
        campground: {
          ...state.campground,
          reviews: state.campground.reviews.filter(
            (review) => review._id !== action.payload
          ),
        },
      };

    case CAMPGROUNDS_LOADING:
      return {
        ...state,
        loading: true,
      };

    case GET_CAMPGROUNDS_BY_CAT:
      return {
        ...state,
        campgrounds: action.payload,
        loading: false,
      };

    case GET_CAMPGROUNDS_BY_USER:
      return {
        ...state,
        campgrounds: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}
