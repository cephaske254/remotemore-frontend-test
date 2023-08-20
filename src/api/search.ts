import { Track } from "@models/tracks";
import api from "./api";

export const apiSearchItems = ({ query }: { query: string }) =>
  api
    .get<Track[]>("/tracks/search/", {
      params: {
        q: query,
      },
    })
    .then((res) => res.data);
