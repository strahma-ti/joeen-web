const HomePage = {
  async render() {
    return `
    <style>

      main {
        padding: 2em;
        flex: 1;
    }

    .hero-section {
      display: flex;
      background-color: #164DA0;
      padding: 2em;
      border-radius: 30px;
      flex-direction: row;
      justify-content: space-around;
      align-items: center;
    }

    .welcome-message{
      gap: 2em;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
    }

    .welcome-message p{
      color: white;
      font-size: 21px;
    }

    .welcome-message .sub{
      font-size: smaller;
      font-style: italic;
      opacity: 60%;    }

    .search {
      padding-left: 0.5em;
      padding-right: 0.3em;      
      background: white;
      gap: 0;
      display: flex;
      align-items: center;
      flex-direction: row;
      border-radius: 10px;
    }

    .keyword {
      gap: 10px;
      display: flex;
      align-items: center;
    }

    .keyword img {
      width: 1.3em;
    }

    .search .keyword input{
      width: 9em;
      border: none;
      height: 3em;
    }

    .category {
      display: flex;
      align-items: center;
    }

    .category img{
      width: 1.8em;
    }

    .category select {
      border: none;
      shape-margin-left: inherit;
      height: 3em;
    }

    .search button{
      margin-left: 1em;
      border-radius: 10px;
      padding: 0.7em;
      border: none;
      background-color: #FFB200;
      color: white;
      cursor: pointer;
    }
    
    .hero-section h2 {
        font-size: 4.5em;
        color: white;
    }

    .hero-image img{
      width: 30em;
    }
    </style>
    <div class="homepage">
        <div class="hero-section">
          <div class="welcome-message">
              <h2>Journey Into<br>Your Interest</h2>
              <p>Explore and find what truly interest you! Dive into <br>
              a world of personalized recommendations crafted <br>
              just for you, and let your interest guide your journey  </p>
              <div class="search">
                <div class="keyword">
                  <img src="https://tinypic.host/images/2024/04/12/image9ab91eab298350ca.png" alt="image9ab91eab298350ca.png" border="0">
                  <input type="text" class="search-input" placeholder="Enter keyword"></input>
                </div>
                <div class="category">
                <img src="https://tinypic.host/images/2024/04/12/image52584ab2b64144d6.png" alt="image52584ab2b64144d6.png" border="0">
                <select type="dropdown" class="category-select">
                  <option value="all">All Categories</option>
                  <option value="event">Event</option>
                  <option value="community">Community</option>
                  <option value="volunteer">Volunteer</option>
                  <option value="book">Book</option>
                  <option value="music">Music</option>
                  <option value="film">Film</option>
                </select>
              </div>
                <button class="button">Search</button>
              </div>
              <p class="sub"> Lookin for detailed recommendations? Explore spesific categories in the menu
          </div>
          <div class="hero-image">
            <img src="https://tinypic.host/images/2024/04/12/image1bf7c8086caef4b3.png" alt="image1bf7c8086caef4b3.png" border="0">
          </div>
          <div class="recom-section">
        </div>
      </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
