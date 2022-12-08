// import {
//   SET_TITLE_STATE,
//   SET_DECKS_STATE,
//   SET_TITLE_STATE_EMPTY,
//   GET_ALL_DECKS,
//   UPDATE_DECKS_STATE,
// } from "./actions";
// import initialState from "./appContext";
//
// type State = typeof initialState;
// type Action = {
//   type: string;
//   payload?: any;
// };
// type TDeck = {
//   _id: string;
//   title: string;
// };
//
// export const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case SET_TITLE_STATE: {
//       return {
//         ...state,
//         titleState: action.payload,
//       };
//     }
//
//     case SET_DECKS_STATE: {
//       return {
//         ...state,
//         decksState: state.decksState.filter(
//           (deck: TDeck) => deck._id !== action.payload.id
//         ),
//       };
//     }
//
//     case SET_TITLE_STATE_EMPTY: {
//       return {
//         ...state,
//         titleState: "",
//       };
//     }
//
//     case UPDATE_DECKS_STATE: {
//       return {
//         ...state,
//         decksState: [action.payload, ...state.decksState],
//       };
//     }
//
//     case GET_ALL_DECKS: {
//       return {
//         ...state,
//         decksState: action.payload,
//       };
//     }
//
//     default:
//       return state;
//   }
// };
