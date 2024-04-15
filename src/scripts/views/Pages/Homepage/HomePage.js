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

    .card{
      cursor:pointer;
      position: relative;
      border-radius: 1.5em;
      width: 18em;
      height: 22em;
      background-color: white;
      box-shadow: 0 16px 40px #9aaacf33;
      transition: box-shadow 0.3s ease, transform 0.3s ease;
    }

    .card:hover {
      box-shadow: 0 24px 48px #9aaacf55;
      transform: translateY(-20px);
    }

    .card-list{
      gap: 18px;
      display: flex;
      justify-content: space-evenly;
      align-items: center;
    }

    .image img{
      width: 18em;
    }

    .top-section{
      display: flex;
      flex-direction: row;
      justify-content: space-between;
    }

    .location {
      margin-left: 10px;
    }

    .location p{
      padding-right: 1em;
      padding-left: 1em;
      position: absolute;
      border-radius: 10px;
      color: white;
      background-color: orange;
      top: 0.5em;
    }

    .save{
      margin-right:41px;
    }

    .save img{
      top: 6px;
      position: absolute;
      width: 2em;
    }

    .bottom-section{
      gap: 5px;
      display: flex;
      padding: 10px;
      flex-direction: column;    
    }

    .name p{
      font-weight: bold;
      font-size: larger;
    }

    .date p{
      font-weight: bolder;
      opacity: 50%;
    }

    .recom-section{
      margin-left: 3em;
      margin-right: 3em;  
    }

    .recom-section h1{
      font-size: 35px;
      padding-bottom:0;
    }

    .recom-section .top{
      margin-top: 2em;
      margin-bottom: 1.5em;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .recom-section h2{
      font-size: 30px;
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
        </div>
        <div class="recom-section">
          <h1>Personalized Recommendations for You: Dive In!</h1>
          <div class="recom-event">
            <div class="top">
              <h2>Events</h2>
              <p><a href="/#/events">See all</a></p>
              </div>
              <div class="card-list">
                <div class="card">
                  <div class="image">
                    <img src="https://tinypic.host/images/2024/04/15/imagea5f4b8d9196543db.png" alt="imagea5f4b8d9196543db.png" border="0">
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Jakarta</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>19 MARCH, 2024</p>
                    </div>
                    <div class="name">
                      <p>Tech Talks: Exploring AI..</p>
                    </div>
                    <div class="description">
                      <p>Dive into the world of artificial<br>
                      intelligence and its impact...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                    <img src="https://tinypic.host/images/2024/04/15/image7e7a861878cc8c77.png" alt="image7e7a861878cc8c77.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Medan</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>24 MARCH, 2024</p>
                    </div>
                    <div class="name">
                      <p>Creative Corner: DIY...</p>
                    </div>
                    <div class="description">
                      <p>Unleash your creativity in our<br>
                      DIY workshop series! From...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                    <img src="https://tinypic.host/images/2024/04/15/image82fbec15d509f256.png" alt="image82fbec15d509f256.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Bekasi</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>28 MARCH, 2024</p>
                    </div>
                    <div class="name">
                      <p>Mind Matters: Mental...</p>
                    </div>
                    <div class="description">
                      <p>Prioritize your mental well-being!<br> 
                      Attend our seminar on mental...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                    <img src="https://tinypic.host/images/2024/04/15/image922d079c06eada28.png" alt="image922d079c06eada28.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Batam</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>        
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>05 APRIL, 2024</p>
                    </div>
                    <div class="name">
                      <p>Outdoor Adventure Day:...</p>
                    </div>
                    <div class="description">
                      <p> Lace up your boots and join us<br>
                      for an exhilarating hike followed...</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          



          <div class="recom-community">
            <div class="top">
              <h2>Community</h2>
              <p><a href="/#/community">See all</a></p>
            </div>
              <div class="card-list">
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image23520efd2d8df1fd.png" alt="image23520efd2d8df1fd.png" border="0">          
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Jakarta</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Collage ID</p>
                    </div>
                    <div class="description">
                      <p>Aims to expand the network<br>
                      of collage artists in Indonesia</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image784d1198257db971.png" alt="image784d1198257db971.png" border="0">                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Jakarta</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Goodreads</p>
                    </div>
                    <div class="description">
                      <p>Intended for readers of Indonesian<br>
                      language books...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imageab0be2e096a2cd5b.png" alt="imageab0be2e096a2cd5b.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Bekasi</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>YukBisnis</p>
                    </div>
                    <div class="description">
                      <p>The most complete online shop<br>
                      ecosystem, which provides<br>
                      various platforms, from online...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image7c993b87ee89791baf1a293c473526ba.png" alt="image7c993b87ee89791baf1a293c473526ba.png" border="0">
                    </div>             
                    <div class="top-section">
                    <div class="location">
                      <p>Jakarta</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>        
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>White Car Community</p>
                    </div>
                    <div class="description">
                      <p> Aimed at all car lovers of old<br>
                      school and antique cars</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>



          <div class="recom-volunteer">
            <div class="top">
              <h2>Volunteer</h2>
              <p><a href="/#/volunteer">See all</a></p>
            </div>
              <div class="card-list">
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image9c4914c30273d2d9.png" alt="image9c4914c30273d2d9.png" border="0">                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Jakarta</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>13 MARCH, 2024</p>
                    </div>
                    <div class="name">
                      <p>The Youth Festival.</p>
                    </div>
                    <div class="description">
                      <p>A vibrant event celebrating the<br>
                      creativity, talents, and energy...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imageda1c76845c64f451.png" alt="imageda1c76845c64f451.png" border="0">                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Bali</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>20 MARCH, 2024</p>
                    </div>
                    <div class="name">
                      <p>The Teen Library</p>
                    </div>
                    <div class="description">
                      <p>A supportive environment that<br>
                      nurtures the growth and dev...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imagee01fe43b4e45e532.png" alt="imagee01fe43b4e45e532.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Kalimantan</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>05 APRIL, 2024</p>
                    </div>
                    <div class="name">
                      <p>Borneo Orangutan Sur....</p>
                    </div>
                    <div class="description">
                      <p>Borneo Orangutan Survival (BOS)<br>
                      Foundation program is...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imagedfe986d2adea8141.png" alt="imagedfe986d2adea8141.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Batam</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>        
                  </div>
                  <div class="bottom-section">
                    <div class="date">
                      <p>16 APRIL, 2024</p>
                    </div>
                    <div class="name">
                      <p>Greening Elderly Homes</p>
                    </div>
                    <div class="description">
                      <p> The campaign seeks to inspire<br>
                      sustainable habits and...</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>




          <div class="recom-book">
            <div class="top">
              <h2>Books</h2>
              <p><a href="/#/books">See all</a></p>
            </div>
              <div class="card-list">
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image1536472e92bf642d.png" alt="image1536472e92bf642d.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Romantic Fiction</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Pride and Prejudice</p>
                    </div>
                    <div class="description">
                      <p>A timeless classic novel by Jane<br>
                      Austen, exploring themes of<br>
                      love, class and societal......</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/image97005718e0905ed9.png" alt="image97005718e0905ed9.png" border="0">                 
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Self Development</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Atomic Habits</p>
                    </div>
                    <div class="description">
                      <p>A transformative self-help book<br>
                      that delves into the science of<br>
                      habit formation....</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imagea316c0d98104aff8.png" alt="imagea316c0d98104aff8.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>History</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Sapiens</p>
                    </div>
                    <div class="description">
                      <p>An eye-opening exploration of<br>
                      the history of Homo Sapiens.<br>
                      The book offers insights into...</p>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="image">
                  <img src="https://tinypic.host/images/2024/04/15/imagee610dc755a07693c.png" alt="imagee610dc755a07693c.png" border="0">                  
                  </div>
                  <div class="top-section">
                    <div class="location">
                      <p>Humorous Fiction</p>
                    </div>
                    <div class="save">
                      <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                    </div>        
                  </div>
                  <div class="bottom-section">
                    <div class="name">
                      <p>Good Omens</p>
                    </div>
                    <div class="description">
                      <p> Embark on a hilarious journey<br>
                      with an angel and a demon who<br>
                       team up to prevent the...</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>


          <div class="recom-music">
          <div class="top">
            <h2>Music</h2>
            <p><a href="/#/music">See all</a></p>
            </div>
            <div class="card-list">
              <div class="card">
                <div class="image">
                <img src="https://tinypic.host/images/2024/04/15/image784bb51cf4fb8a1c.png" alt="image784bb51cf4fb8a1c.png" border="0">                
                </div>
                <div class="top-section">
                  <div class="location">
                    <p>R&B</p>
                  </div>
                  <div class="save">
                    <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                  </div>
                </div>
                <div class="bottom-section">
                  <div class="name">
                    <p>SZA - Saturn</p>
                  </div>
                  <div class="description">
                    <p>The song delves into themes of<br>
                    uncertainty in relationships,<br>
                    featuring poetic and...</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="image">
                <img src="https://tinypic.host/images/2024/04/15/imageeb67b734662c2acd.png" alt="imageeb67b734662c2acd.png" border="0">                
                </div>
                <div class="top-section">
                  <div class="location">
                    <p>Pop</p>
                  </div>
                  <div class="save">
                    <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                  </div>
                </div>
                <div class="bottom-section">
                  <div class="name">
                    <p>Ariana Grande - yes, and?</p>
                  </div>
                  <div class="description">
                    <p>The song revolves around<br>
                    themes of empowerment and<br>
                    confidence, with lyrics...</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="image">
                <img src="https://tinypic.host/images/2024/04/15/imageb9d73c9e0830239b.png" alt="imageb9d73c9e0830239b.png" border="0">                
                </div>
                <div class="top-section">
                  <div class="location">
                    <p>Hip Hop</p>
                  </div>
                  <div class="save">
                    <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                  </div>
                </div>
                <div class="bottom-section">
                  <div class="name">
                    <p>Drake - Hotline Bling</p>
                  </div>
                  <div class="description">
                    <p>Released in 2015, the song<br>
                    became a cultural phenomenon<br>
                    and spawned various memes...</p>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="image">
                <img src="https://tinypic.host/images/2024/04/15/imagea213ac0371a2880f.png" alt="imagea213ac0371a2880f.png" border="0">                
                </div>
                <div class="top-section">
                  <div class="location">
                    <p>R&B</p>
                  </div>
                  <div class="save">
                    <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                  </div>        
                </div>
                <div class="bottom-section">
                  <div class="name">
                    <p>H.E.R. - Focus</p>
                  </div>
                  <div class="description">
                    <p>A soulful R&B track that<br>
                    captivates listeners with its<br>
                    smooth melodies and emotive...</p>
                  </div>
                </div>
              </div>
          </div>
        </div>


        <div class="recom-film">
        <div class="top">
          <h2>Film</h2>
          <p><a href="/#/film">See all</a></p>
          </div>
          <div class="card-list">
            <div class="card">
              <div class="image">
              <img src="https://tinypic.host/images/2024/04/15/image02109dce11cee57a.png" alt="image02109dce11cee57a.png" border="0">              
              </div>
              <div class="top-section">
                <div class="location">
                  <p>Action</p>
                </div>
                <div class="save">
                  <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                </div>
              </div>
              <div class="bottom-section">
                <div class="name">
                  <p>Jack Reacher</p>
                </div>
                <div class="description">
                  <p>The story revolves around Jack<br>
                  Reacher, a former military police<br>
                  officer played by Tom Cruise...</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="image">
              <img src="https://tinypic.host/images/2024/04/15/imagea72b4bd139e8f4f3.png" alt="imagea72b4bd139e8f4f3.png" border="0">              
              </div>
              <div class="top-section">
                <div class="location">
                  <p>Adventure</p>
                </div>
                <div class="save">
                  <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                </div>
              </div>
              <div class="bottom-section">
                <div class="name">
                  <p>Ashfall</p>
                </div>
                <div class="description">
                  <p>A thrilling disaster film set in<br>
                  South Korea, depicting the<br>
                  chaos that ensues when the...</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="image">
              <img src="https://tinypic.host/images/2024/04/15/imageae863b4d86bbc638.png" alt="imageae863b4d86bbc638.png" border="0">              
              </div>
              <div class="top-section">
                <div class="location">
                  <p>Fantasy</p>
                </div>
                <div class="save">
                  <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                </div>
              </div>
              <div class="bottom-section">
                <div class="name">
                  <p>Slumberland</p>
                </div>
                <div class="description">
                  <p>Filled with vibrant animation,<br>
                  imaginative visuals, and<br>
                  heartwarmig moments...</p>
                </div>
              </div>
            </div>
            <div class="card">
              <div class="image">
              <img src="https://tinypic.host/images/2024/04/15/imageb6d62e8a0ec3e93c.png" alt="imageb6d62e8a0ec3e93c.png" border="0">              
              </div>
              <div class="top-section">
                <div class="location">
                  <p>Comedy</p>
                </div>
                <div class="save">
                  <img src="https://tinypic.host/images/2024/04/15/imagebc962c41d79c2b6f.png" alt="imagebc962c41d79c2b6f.png" border="0">
                </div>        
              </div>
              <div class="bottom-section">
                <div class="name">
                  <p>White Chicks</p>
                </div>
                <div class="description">
                  <p>A comedy film that revolves<br>
                  around two FBI agents who go<br>
                  undercover as wealthy white...</p>
                </div>
              </div>
            </div>
        </div>
      </div>
        </div>
      `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default HomePage;
