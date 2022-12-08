// import { useContext, useReducer, createContext, ReactNode } from "react";
// import axios from "axios";
// // import { useEffect } from "react";
// import { URL } from "../utils/url";
// import { reducer } from "./reducer";
//
// import {
//   SET_TITLE_STATE,
//   GET_ALL_DECKS,
//   UPDATE_DECKS_STATE,
//   SET_DECKS_STATE,
//   SET_TITLE_STATE_EMPTY,
// } from "./actions";
//
// type ContextProps = {
//   children: ReactNode;
// };
//
// const initialState = {
//   decksState: [],
//   titleState: "",
// };
// export default initialState;
//
// interface AppContextInterface {
//   handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   deleteDeck: (id: string) => void;
//   handleSubmit: (e: React.FormEvent) => void;
//   getAllDecks: () => void;
// }
//
// const AppContext = createContext<AppContextInterface | null>(null);
//
// const AppProvider = ({ children }: ContextProps) => {
//   const [state, dispatch] = useReducer(reducer, initialState);
//
//   // useEffect(() => {
//   //   getAllDecks();
//   // }, []);
//
//   const context = {
//     handleChange(e: React.ChangeEvent<HTMLInputElement>) {
//       const { value } = e.target;
//       dispatch({ type: SET_TITLE_STATE, payload: value });
//     },
//
//     async deleteDeck(id: string) {
//       await axios.delete(`${URL}/delete/${id}`);
//       dispatch({ type: SET_DECKS_STATE });
//     },
//
//     async handleSubmit(e: React.FormEvent) {
//       e.preventDefault();
//       try {
//         const { data } = await axios.post(URL, { title: state.titleState });
//         dispatch({ type: SET_TITLE_STATE_EMPTY });
//         dispatch({ type: UPDATE_DECKS_STATE, payload: data });
//       } catch (error) {
//         console.log("error while submitting form and error is: ", error);
//       }
//     },
//
//     async getAllDecks() {
//       try {
//         const { data } = await axios(URL);
//         dispatch({ type: GET_ALL_DECKS, payload: data.decks });
//       } catch (error) {
//         console.log("error while getting decks and error is: ", error);
//       }
//     },
//   };
//   return (
//     <AppContext.Provider value={{ state, context }}>
//       {children}
//     </AppContext.Provider>
//   );
// };
//
// const useAppContext = () => {
//   return useContext(AppContext);
// };
//
// export { AppProvider, initialState, useAppContext };
