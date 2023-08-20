import { Track, TrackAlbum } from "./tracks";

export type ChartsResponse = {
  tracks: PaginatedData<Track>;
  albums: PaginatedData<TrackAlbum>;
};
