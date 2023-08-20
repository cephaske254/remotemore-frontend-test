import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiSearchItems } from "api/search";

export const reduxSearchItems = createAsyncThunk(
  "SEARCH_ITEMS",
  apiSearchItems
);
