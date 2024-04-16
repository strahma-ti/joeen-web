const EventsPage = {
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
        <button id="searchButton" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </div>
    `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default EventsPage;
