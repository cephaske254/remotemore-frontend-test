import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

const store = configureStore({
  reducer,
});

export const useDispatch = () => store.dispatch;

export type State = ReturnType<typeof reducer>;

export default store;
