import { createDraftSafeSelector } from "@reduxjs/toolkit";

export const selectArtistState = (state: State) => state.artists;

export const selectArtistDetails = (id: string | number) =>
  createDraftSafeSelector(selectArtistState, (state) => {
    const details = state.details?.[id] ?? {
      data: null,
      loading: false,
    };

    return {
      ...details,
      loading: details.loading === true && !details.data?.artist?.id,
      error: details.loading === "error",
      refreshing: details.loading === true && !!details.data?.artist?.id,
    };
  });
