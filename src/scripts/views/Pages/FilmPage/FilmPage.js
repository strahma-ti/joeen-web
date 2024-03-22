import TheMovieDbSource from '../../../data/themoviedb-source';
import './film.css';

const FilmPage = {
  async render() {
    return `
            <h1>Best Film For You!</h1>
            <div class="film-section">
              <div class="popular-film">
                <h3> Popular Film </h3>
                <div class="popular-film-list"></div>
              </div>

              <div class="nowplaying-film">
                <h3> Now Playing Film </h3>
                <div class="nowplaying-film-list"></div>
              </div>
            </div>
          `;
  },

  async afterRender() {
    await this.renderPopularMovies();
    await this.renderNowplayingMovies();
  },

  async renderPopularMovies() {
    const popularMovies = await TheMovieDbSource.popularMovies();
    const popularFilmList = document.querySelector('.popular-film-list');
    popularMovies.forEach((movie) => {
      const movieCard = `
      <div class="movie-card">
      <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
      <h4>${movie.title}</h4>
        <p>${movie.overview}</p>
      </div>`;
      popularFilmList.innerHTML += movieCard;
    });
  },

  async renderNowplayingMovies() {
    const nowPlayingMovies = await TheMovieDbSource.nowPlayingMovies();
    const nowPlayingFilmList = document.querySelector('.nowplaying-film-list');
    nowPlayingMovies.forEach((movie) => {
      const movieCard = `
      <div class="movie-card">
        <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
        <h4>${movie.title}</h4>
        <p>${movie.overview}</p>
      </div>`;
      nowPlayingFilmList.innerHTML += movieCard;
    });
  },
};

export default FilmPage;
