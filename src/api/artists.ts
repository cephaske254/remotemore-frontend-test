import { ArtistDetailResponse } from "@models/artist";
import api from "./api";

export const apiGetArtistDetail = (id: string | number) => {
  return api.get<ArtistDetailResponse>(`/artists/${id}/`).then((a) => a.data);
};
