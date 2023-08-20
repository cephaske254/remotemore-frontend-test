import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetArtistDetail } from "api/artists";

export const reduxGetArtistDetail = createAsyncThunk(
  "GET_ARTIST_DETAIL",
  apiGetArtistDetail
);
