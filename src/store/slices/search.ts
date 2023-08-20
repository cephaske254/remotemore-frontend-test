import { Track } from "@models/tracks";
import { createSlice } from "@reduxjs/toolkit";
import { reduxSearchItems } from "store/actions/search";

const initialState: SearchState = {
  loading: false,
  q: "",
  results: [],
};

const search = createSlice({
  name: "search",
  reducers: {},
  initialState,
  extraReducers(builder) {
    builder
      .addCase(
        reduxSearchItems.fulfilled,
        (state, { payload, meta: { arg } }) => {
          state.loading = false;
          state.q = arg.query;
          state.results = payload;
        }
      )
      .addCase(reduxSearchItems.pending, (state, { meta }) => {
        state.loading = true;
        state.q = meta.arg.query;
      })
      .addCase(reduxSearchItems.rejected, (state, { meta }) => {
        state.loading = "error";
        state.q = meta.arg.query;
      });
  },
});

type SearchState = {
  loading: Loading;
  q: string;
  results: Track[];
};

export default search.reducer;
