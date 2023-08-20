import { createDraftSafeSelector } from "@reduxjs/toolkit";

const selectSearchState = (state: State) => state.search;

export const selectSearchResults = createDraftSafeSelector(
  selectSearchState,
  (state) => {
    return {
      loading: state.loading,
      q: state.q ?? "",
      results: state.results ?? [],
    };
  }
);
