import { combineReducers } from "@reduxjs/toolkit";
import charts from "./slices/charts";
import search from "./slices/search";
import artists from "./slices/artists";

const reducer = combineReducers({
  charts,
  search,
  artists,
});

export default reducer;
