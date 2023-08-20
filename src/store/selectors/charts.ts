import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectChartsState = (state: State) => state.charts;

export const selectCharts = createDraftSafeSelector(
  selectChartsState,
  (state) => ({
    ...state,
    loading: false,
  })
);
