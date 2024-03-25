import UrlParser from '../../../routes/url-parser';
import TheMovieDbSource from '../../../data/themoviedb-source';

const FilmDetail = {
  async render() {
    return `
    <div class="film-search">
    <div class="search-filter">
      <div class="checkboxAll">
        <label for="allCheckbox">All</label>
        <input type="checkbox" id="allCheckbox" name="allCheckbox">
      </div>
      <div class="checkboxUpcoming">
        <label for="upcomingCheckbox">Upcoming</label>
        <input type="checkbox" id="upcomingCheckbox" name="upcomingCheckbox">
      </div>
      <input type="text" id="searchInput" placeholder="Search movies...">
      <select id="genreDropdown" class="genre-dropdown">
      </select>
      <select id="keywordDropdown" class="keyword-dropdown">
      </select>
      <button id="searchButton" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
      </div>
  </div>
      <div id="movie" class="detail-film"></div>
      <div id="similar-movies-list" class="similar-movies-list"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.getElementById('movie');
    const keywords = await TheMovieDbSource.fetchKeywords(url.id);
    movieContainer.innerHTML = this._generateDetailTemplate(movie, keywords);

    const genreDropdown = document.getElementById('genreDropdown');
    const genreList = await TheMovieDbSource.getGenreList();
    genreList.forEach((genre) => {
      const option = document.createElement('option');
      option.value = genre.id;
      option.textContent = genre.name;
      genreDropdown.appendChild(option);
    });

    const keywordDropdown = document.getElementById('keywordDropdown');
    const keywordList = await TheMovieDbSource.getKeywordList();
    keywordList.forEach((keyword) => {
      const option = document.createElement('option');
      option.value = keyword.id;
      option.textContent = keyword.name;
      keywordDropdown.appendChild(option);
    });

    const similarMoviesContainer = document.getElementById('similar-movies-list');
    const similarMovies = await TheMovieDbSource.similarMovies(url.id);

    similarMoviesContainer.innerHTML = await this.renderSimilarMovies(similarMovies);
    this.addMovieCardClickListener();
  },

  _generateDetailTemplate(movie, keywords) {
    const keywordsList = keywords.map((keyword) => keyword.name).join(', ');
    return `
    <img class="movie-poster" src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
    <div class="movie-information">
        <h2 class="movie__title">${movie.title}</h2>
        <table class="info-table">
            <tr>
                <td><h4>Release Date</h4></td>
                <td><p>${movie.release_date}</p></td>
            </tr>
            <tr>
                <td><h4>Synopsis</h4></td>
                <td><p>${movie.overview}</p></td>
            </tr>
            <tr>
                <td><h4>Tagline</h4></td>
                <td><p>${movie.tagline}</p></td>
            </tr>
            <tr>
                <td><h4>Duration</h4></td>
                <td><p>${movie.runtime} minutes</p></td>
            </tr>
            <tr>
                <td><h4>Rating</h4></td>
                <td><p>${movie.vote_average}</p></td>
            </tr>
            <tr>
                <td><h4>Keywords</h4></td>
                <td><p>${keywordsList}</p></td>
            </tr>
        </table>
    </div>
    `;
  },

  async renderSimilarMovies(similarMovies) {
    if (!similarMovies || similarMovies.length === 0) {
      return '<h2>No similar movies found.</h2>';
    }

    const similarMoviesList = similarMovies.map((movie) => `
      <div class="movie-card" data-id="${movie.id}">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}" />
        <h4>${movie.title}</h4>
        <p>${movie.overview}</p>
      </div>
    `).join('');

    return `
      <h2>You might also be interested in</h2>
      <div class="similar-movies-list">
        ${similarMoviesList}
      </div>
    `;
  },

  addMovieCardClickListener() {
    const movieCards = document.querySelectorAll('.movie-card');
    movieCards.forEach((card) => {
      card.addEventListener('click', () => {
        const movieId = card.dataset.id;
        if (movieId) {
          window.location.href = `/#/detail/${movieId}`;
        } else {
          console.error('Movie ID is undefined or invalid.');
        }
      });
    });
  },
};

export default FilmDetail;
