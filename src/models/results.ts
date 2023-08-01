export interface ResultResponse {
  result: Result[];
}

export interface Result {
  type: string;
  title: string;
  overview: string;
  streamingInfo: { ar: StreamInfoKey[] };
  cast: string[];
  year: number;
  advisedMinimumAudienceAge: number;
  imdbId: string;
  imdbRating: number;
  imdbVoteCount: number;
  tmdbId: number;
  tmdbRating: number;
  originalTitle: string;
  backdropPath: string;
  backdropURLs: unknown;
  genres: Genres[];
  originalLanguage: string;
  countries: string[];
  directors: string[];
  runtime: number;
  youtubeTrailerVideoId: string;
  youtubeTrailerVideoLink: string;
  posterPath: string;
  posterURLs: unknown;
  tagline: string;
}

export interface StreamInfoKey {
  key: Streaminginfo[];
}
interface Streaminginfo {
  type: string;
  quality: string;
  addOn: string;
  link: string;
  watchLink: string;
  audios: Audios[];
}

interface Audios {
  language: string;
  region: string;
}

interface Genres {
  id: number;
  name: string;
}
