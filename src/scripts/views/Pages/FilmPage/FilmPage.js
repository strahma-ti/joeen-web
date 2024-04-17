import TheMovieDbSource from '../../../data/themoviedb-source';
import './film.css';
import '@fortawesome/fontawesome-free/css/all.css';

const FilmPage = {
  async render() {
    return `
    <div class="search-bar">
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
          <option value="happy">Happy</option>
          <option value="sad">Sad</option>
          <option value="angry">Angry</option>
          <option value="excited">Excited</option>
          <option value="relaxed">Relaxed</option>
          <option value="stressed">Stressed</option>
          <option value="confused">Confused</option>
          <option value="surprised">Surprised</option>
          <option value="motivated">Motivated</option>
          <option value="bored">Bored</option>
          <option value="hopeful">Hopeful</option>
          <option value="anxious">Anxious</option>
          <option value="content">Content</option>
          <option value="grateful">Grateful</option>
          <option value="nostalgic">Nostalgic</option>
          <option value="lonely">Lonely</option>
        </select>
        <button id="searchButton" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
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

    const searchButton = document.getElementById('searchButton');
    searchButton.addEventListener('click', this.handleSearchButtonClicked.bind(this));

    const genreDropdown = document.getElementById('genreDropdown');
    const genreList = await TheMovieDbSource.getGenreList();
    genreList.forEach((genre) => {
      const option = document.createElement('option');
      option.value = genre.id;
      option.textContent = genre.name;
      genreDropdown.appendChild(option);
    });

    const allCheckbox = document.getElementById('allCheckbox');
    const upcomingCheckbox = document.getElementById('upcomingCheckbox');

    allCheckbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    upcomingCheckbox.addEventListener('change', this.handleCheckboxChange.bind(this));
    await this.renderMoviesByCheckboxStatus();
  },

  async renderPopularMovies() {
    const popularMovies = await TheMovieDbSource.popularMovies();
    const popularFilmList = document.querySelector('.popular-film-list');
    popularFilmList.innerHTML = '';
    popularMovies.forEach((movie) => {
      const movieCard = `
        <div class="movie-card" data-id="${movie.id}">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
          <h4>${movie.title}</h4>
          <p>${movie.overview}</p>
        </div>`;
      popularFilmList.innerHTML += movieCard;
    });
    this.addMovieCardClickListener();
  },

  async renderNowplayingMovies() {
    const nowPlayingMovies = await TheMovieDbSource.nowPlayingMovies();
    const nowPlayingFilmList = document.querySelector('.nowplaying-film-list');
    nowPlayingFilmList.innerHTML = '';
    nowPlayingMovies.forEach((movie) => {
      const movieCard = `
        <div class="movie-card" data-id="${movie.id}">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
          <h4>${movie.title}</h4>
          <p>${movie.overview}</p>
        </div>`;
      nowPlayingFilmList.innerHTML += movieCard;
    });
    this.addMovieCardClickListener();
  },

  async handleSearchButtonClicked() {
    const searchInput = document.getElementById('searchInput').value;
    const genreDropdown = document.getElementById('genreDropdown');
    const selectedGenre = genreDropdown.value;
    const searchResultContainer = document.querySelector('.film-section');

    if (searchInput || selectedGenre) {
      const searchResult = await TheMovieDbSource.searchMovies(searchInput, selectedGenre);
      searchResultContainer.innerHTML = `
        <div class="search-result">
          <h3>Search Result for "${searchInput}"</h3>
          <div class="search-result-list"></div>
        </div>
      `;
      const searchResultList = document.querySelector('.search-result-list');
      if (searchResult.length > 0) {
        searchResult.forEach((movie) => {
          const movieCard = `
            <div class="search-movie-list">
              <div class="movie-card" data-id="${movie.id}">
                <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
                <h4>${movie.title}</h4>
                <p>${movie.overview}</p>
              </div>
            </div>`;
          searchResultList.innerHTML += movieCard;
        });
      } else {
        searchResultList.innerHTML = '<p>No movies found.</p>';
      }
      this.addMovieCardClickListener();
    }
  },

  async handleCheckboxChange() {
    await this.renderMoviesByCheckboxStatus();
  },

  async renderMoviesByCheckboxStatus() {
    const allCheckbox = document.getElementById('allCheckbox');
    const upcomingCheckbox = document.getElementById('upcomingCheckbox');

    const showAll = allCheckbox.checked;
    const showUpcoming = upcomingCheckbox.checked;

    if (showAll) {
      const filmSection = document.querySelector('.film-section');
      filmSection.innerHTML = '<h2>All Film for you</h2>';
      await this.renderAllMovies();
    } else if (showUpcoming) {
      const filmSection = document.querySelector('.film-section');
      filmSection.innerHTML = '<h2>Upcoming Film for you</h2>';
      await this.renderUpcomingMovies();
    } else {
      await this.renderPopularMovies();
      await this.renderNowplayingMovies();
    }
  },

  async renderAllMovies() {
    const allMovies = await TheMovieDbSource.allMovies();
    this.renderMovieList(allMovies);
  },

  async renderUpcomingMovies() {
    const upcomingMovies = await TheMovieDbSource.upcomingMovies();
    this.renderMovieList(upcomingMovies);
  },

  renderMovieList(movies) {
    const filmListContainer = document.querySelector('.film-section');
    filmListContainer.innerHTML = '';

    const filmList = document.createElement('div');
    filmList.classList.add('film-list');

    movies.forEach((movie) => {
      const movieCard = `
        <div class="movie-card" data-id="${movie.id}">
          <img src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="${movie.title}">
          <h4>${movie.title}</h4>
          <p>${movie.overview}</p>
        </div>`;
      filmList.innerHTML += movieCard;
    });

    filmListContainer.appendChild(filmList);

    this.addMovieCardClickListener();
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

export default FilmPage;
