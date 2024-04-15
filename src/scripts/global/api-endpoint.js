import CONFIG from './config';

const API_ENDPOINT = {
  MOVIE_API: {
    POPULAR: `${CONFIG.MOVIE_BASE_URL}movie/popular?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}&page=1`,
    NOW_PLAYING: `${CONFIG.MOVIE_BASE_URL}movie/now_playing?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}&page=1`,
    UPCOMING: `${CONFIG.MOVIE_BASE_URL}movie/upcoming?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}&page=1`,
    DETAIL: (id) => `${CONFIG.MOVIE_BASE_URL}movie/${id}?api_key=${CONFIG.MOVIE_KEY}`,
    SIMILAR: (id) => `${CONFIG.MOVIE_BASE_URL}movie/${id}/similar?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}&page=1`,
    SEARCH: (query, genre) => `${CONFIG.MOVIE_BASE_URL}${CONFIG.MOVIE_SEARCH_URL}?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}&query=${query}&with_genres=${genre}&page=1`,
    KEYWORDS: (id) => `${CONFIG.MOVIE_BASE_URL}movie/${id}/keywords?api_key=${CONFIG.MOVIE_KEY}`,
    GENRE_LIST: `${CONFIG.MOVIE_BASE_URL}genre/movie/list?api_key=${CONFIG.MOVIE_KEY}&language=${CONFIG.MOVIE_DEFAULT_LANGUAGE}`,
  },
  SPOTIFY_API: {
    SEARCH_TRACKS: (query) => `${CONFIG.SPOTIFY_BASE_URL}search?q=${query}&type=track`,
    GET_TRACK: (id) => `${CONFIG.SPOTIFY_BASE_URL}tracks/${id}`,
    GET_AVAILABLE_GENRE_SEEDS: `${CONFIG.SPOTIFY_BASE_URL}recommendations/available-genre-seeds`,
    GET_SEVERAL_TRACKS: (ids) => `${CONFIG.SPOTIFY_BASE_URL}tracks?ids=${ids.join(',')}`,
  },
};

export default API_ENDPOINT;
