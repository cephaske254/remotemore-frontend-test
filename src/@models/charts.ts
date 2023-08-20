import { Track } from "./tracks";

export type ChartsResponse = {
  tracks: PaginatedCharts<Track>;
};

type PaginatedCharts<T> = {
  data: T[];
  total: number;
};
