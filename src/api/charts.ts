import { ChartsResponse } from "@models/charts";
import api from "./api";

export const apiGetCharts = () =>
  api.get<ChartsResponse>("/charts").then((a) => a.data);
