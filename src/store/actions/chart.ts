import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGetCharts } from "api/charts";

export const reduxGetCharts = createAsyncThunk("GET_CHARTS", apiGetCharts);
