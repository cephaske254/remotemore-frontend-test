import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectChartsState = (state: State) => state.charts;

export const selectCharts = createDraftSafeSelector(
  selectChartsState,
  (state) => ({
    ...state,
    loading: state.loading === true && !state.charts,
    refreshing: state.loading === true && !!state.charts,
  })
);
