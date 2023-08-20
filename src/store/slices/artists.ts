import { ArtistDetailResponse } from "@models/artist";
import { createSlice } from "@reduxjs/toolkit";
import { reduxGetArtistDetail } from "store/actions/artists";

const initialState: ArtistsState = {
  details: {},
};

type ArtistsState = {
  details: Record<
    string,
    {
      data: ArtistDetailResponse | null;
      loading: Loading;
    }
  >;
};

const artistsSlice = createSlice({
  name: "artists",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(reduxGetArtistDetail.pending, (state, action) => {
        state.details[action.meta.arg] = {
          ...(state.details[action.meta.arg] ?? {
            data: null,
          }),
          loading: true,
        };
      })

      .addCase(reduxGetArtistDetail.rejected, (state, action) => {
        state.details[action.meta.arg] = {
          ...(state.details[action.meta.arg] ?? {
            data: null,
          }),
          loading: "error",
        };
      })

      .addCase(reduxGetArtistDetail.fulfilled, (state, { meta, payload }) => {
        state.details[meta.arg] = {
          data: payload,
          loading: false,
        };
      });
  },
});

export default artistsSlice.reducer;
