import { ChartsResponse } from "@models/charts";
import { createSlice } from "@reduxjs/toolkit";
import { reduxGetCharts } from "store/actions/chart";

const initialState: ChartsState = {
  charts: null,
  loading: false,
};

const charts = createSlice({
  name: "charts",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(reduxGetCharts.pending, (state) => {
        state.loading = true;
      })
      .addCase(reduxGetCharts.rejected, (state) => {
        state.loading = false;
      })
      .addCase(reduxGetCharts.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.charts = payload ?? null;
      });
  },
});

/**
 * types
 */

type ChartsState = {
  loading: Loading;
  charts: ChartsResponse | null;
};

export default charts.reducer;
