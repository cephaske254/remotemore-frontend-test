import { Track } from "./tracks";

export interface ArtistDetailResponse {
  top: Top;
  artist: ArtistDetail;
}

export interface Top {
  data: Track[];
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
