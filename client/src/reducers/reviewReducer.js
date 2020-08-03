// import { ADD_REVIEW, UPDATE_REVIEW, DELETE_REVIEW } from "../actions/types";

// const initialState = {
//   reviews: [],
// };

// export default function (state = initialState, action) {
//   switch (action.type) {
//     case ADD_REVIEW:
//       return {
//         ...state,
//         reviews: [action.payload, ...state.reviews],
//       };

//     case UPDATE_REVIEW:
//       return {
//         ...state,
//         review: action.payload,
//       };

//     case DELETE_REVIEW:
//       return {
//         ...state,
//         reviews: state.reviews.filter(
//           (review) => review._id !== action.payload
//         ),
//       };
//     default:
//       return state;
//   }
// }
