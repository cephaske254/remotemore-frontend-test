export interface Track {
  id: number;
  title: string;
  title_short: string;
  preview: string;
  artist: TrackArtist;
  album: TrackAlbum;
  stats: TrackStats;
}

export interface TrackAlbum {
  id: number;
  title: string;
  cover: string;
  stats: AlbumStats | null;
}

export interface AlbumStats {
  fans: number;
  release_date: string;
}

export interface TrackArtist {
  id: number;
  name: string;
  image: string;
}

export interface TrackStats {
  duration: number;
  rank: number;
}
