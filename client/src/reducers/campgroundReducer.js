import {
  GET_CAMPGROUNDS,
  GET_CAMPGROUND,
  ADD_CAMPGROUND,
  UPDATE_CAMPGROUND,
  DELETE_CAMPGROUND,
  ADD_REVIEW,
  UPDATE_REVIEW,
  DELETE_REVIEW,
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

    case ADD_REVIEW:
      return {
        ...state,
        campground: {
          reviews: [action.payload, ...state.campground.reviews],
        },
      };

    case UPDATE_REVIEW:
      // const oldReview = state.campground.reviews.filter(
      //   (review) => review._id == action.payload.id
      // )
      // const newReview = action.payload

      const newReviews = state.campground.reviews.map((review) => {
        if ((review._id = action.payload.id)) {
          review = action.payload;
        }
        return review;
      });
      return {
        ...state,
        campground: {
          reviews: newReviews,
        },
      };

    case DELETE_REVIEW:
      return {
        ...state,
        campground: {
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
    default:
      return state;
  }
}
