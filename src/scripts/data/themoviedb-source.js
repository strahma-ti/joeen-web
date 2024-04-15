import API_ENDPOINT from '../global/api-endpoint';

class TheMovieDbSource {
  static async allMovies() {
    const popularMovies = await this.popularMovies();
    const nowPlayingMovies = await this.nowPlayingMovies();
    const upcomingMovies = await this.upcomingMovies();

    const allMovies = [...popularMovies, ...nowPlayingMovies, ...upcomingMovies];

    return allMovies;
  }

  static async searchByGenre(genreId) {
    const response = await fetch(API_ENDPOINT.MOVIE_API.DISCOVER(genreId));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async popularMovies() {
    const response = await fetch(API_ENDPOINT.MOVIE_API.POPULAR);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async nowPlayingMovies() {
    const response = await fetch(API_ENDPOINT.MOVIE_API.NOW_PLAYING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async upcomingMovies() {
    const response = await fetch(API_ENDPOINT.MOVIE_API.UPCOMING);
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async detailMovie(id) {
    const response = await fetch(API_ENDPOINT.MOVIE_API.DETAIL(id));
    return response.json();
  }

  static async searchMovies(query) {
    const response = await fetch(API_ENDPOINT.MOVIE_API.SEARCH(query));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async similarMovies(id) {
    const response = await fetch(API_ENDPOINT.MOVIE_API.SIMILAR(id));
    const responseJson = await response.json();
    return responseJson.results;
  }

  static async fetchKeywords(id) {
    const response = await fetch(API_ENDPOINT.MOVIE_API.KEYWORDS(id));
    const responseJson = await response.json();
    return responseJson.keywords;
  }

  static async getGenreList() {
    try {
      const response = await fetch(API_ENDPOINT.MOVIE_API.GENRE_LIST);
      const responseJson = await response.json();
      if (responseJson.genres) {
        return responseJson.genres;
      }
      throw new Error('Failed to fetch genre list');
    } catch (error) {
      console.error('Error fetching genre list:', error);
      return [];
    }
  }

  static async getKeywordList() {
    try {
      const response = await fetch(API_ENDPOINT.MOVIE_API.KEYWORD_LIST);
      const responseJson = await response.json();
      if (responseJson.keywords) {
        return responseJson.keywords;
      }
      throw new Error('Failed to fetch keyword list');
    } catch (error) {
      console.error('Error fetching keyword list:', error);
      return [];
    }
  }
}

export default TheMovieDbSource;
