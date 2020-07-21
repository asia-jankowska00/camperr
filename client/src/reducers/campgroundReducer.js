import {
  GET_CAMPGROUNDS,
  ADD_CAMPGROUND,
  DELETE_CAMPGROUND,
  CAMPGROUNDS_LOADING,
} from "../actions/types";

const initialState = {
  // campgrounds: [
  //   {
  //     _id: 1,
  //     name: "Campground one",
  //     image:
  //       "https://previews.123rf.com/images/wiphawee/wiphawee1510/wiphawee151000008/47324445-the-camsite-in-pine-forest.jpg",
  //     description: "Its a campy camp",
  //   },
  //   {
  //     _id: 2,
  //     name: "Campground two",
  //     image:
  //       "https://thumbs.dreamstime.com/b/outdoor-tent-forest-camsite-26616028.jpg",
  //     description: "Its a campier camp",
  //   },
  //   {
  //     _id: 3,
  //     name: "Campground three",
  //     image: "https://i.ytimg.com/vi/KAlwkTSwkNA/hqdefault.jpg",
  //     description: "Its the campiest camp!",
  //   },
  // ],
  campgrounds: [],
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

    case DELETE_CAMPGROUND:
      return {
        ...state,
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
