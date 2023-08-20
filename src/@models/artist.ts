import { Track, TrackAlbum } from "./tracks";

export interface ArtistDetailResponse {
  tracks: TopTracks;
  artist: ArtistDetail;
  albums: ArtistAlbums;
}

export interface TopTracks {
  data: Track[];
  total: number;
  next: string;
}
export interface ArtistAlbums {
  data: TrackAlbum[];
  total: number;
  next: string;
}

export interface ArtistDetail {
  id: number;
  name: string;
  image: string;
  stats: ArtistDetailStats;
  image_hd: string;
}

export interface ArtistDetailStats {
  albums: number;
  fans: number;
}
