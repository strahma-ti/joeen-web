const BooksDetail = {
  async render() {
    return `
      <style>
      .detail-section{
        color: #353C4B;
        margin-top: 3em;
        display: flex;
        align-items: flex-start;
        gap: 3em;
      }
  
      .left-section{
        display: flex;
        width: 30%;
        gap: 1em;
        flex-direction: column;
      }
      .left-section img {
        border-radius: 10px;
        box-shadow: 0 16px 40px #9aaacf33;
        width: 100%;
      }  
  
      .right-section{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 2em;
      }
  
      .info{
        padding: 1.5em 3em 3em 3em;      
        display: flex;
        flex-direction: column;
        gap: 2em;
        border-radius: 10px;
        box-shadow: 0 16px 40px #9aaacf33;
      }
      
      .name h2{
        font-size: 2.7em;
      }

      .info table tbody tr td{
        width: 1em;
      }
  
      .top {
        color: #353C4B;
        font-size: x-large;
        margin: 2em 0 2em 0;
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
  
      .card .image img{
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
        color: #353C4B;
        gap: 5px;
        display: flex;
        padding: 10px;
        flex-direction: column;    
      }
  
      .name p{
        font-weight: bold;
        font-size: larger;
      }
  
      .description p{
        opacity: 70%;
      }
  
      .date p{
        font-weight: bolder;
        opacity: 50%;
      }
  
      
      </style>
      <div class="search-bar">
          <div class="search-filter">
            <div class="checkboxAll">
              <label for="allCheckbox">Physical Book</label>
              <input type="checkbox" id="allCheckbox" name="allCheckbox">
            </div>
            <div class="checkboxUpcoming">
              <label for="upcomingCheckbox">E-Book</label>
              <input type="checkbox" id="upcomingCheckbox" name="upcomingCheckbox">
            </div>
            <input type="text" id="searchInput" placeholder="Enter keyword...">
            <select id="genreDropdown" class="genre-dropdown">
            </select>
            <select id="genreDropdown" class="genre-dropdown">
            </select>
            <button id="searchButton" class="search-button"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>
        <div class="detail-section">
            <div class="left-section">
                <div class="image">
                <img src="https://tinypic.host/images/2024/04/16/image9eab02f1d9692379.png" alt="image9eab02f1d9692379.png" border="0">                </div>
            </div>
            <div class="right-section">
                <div class="info">
                    <div class="name">
                        <h2>Good Omens</h2>
                    </div>
                    <table class="info-table">
                    <tr>
                        <td><h4>Author</h4></td>
                        <td><p>Neil Gaiman and Terry Pratchett</p></td>
                    </tr>
                    <tr>
                        <td><h4>Synopsis</h4></td>
                        <td><p>In "Good Omens," angel Aziraphale and demon Crowley, who have grown fond of Earth, join forces to prevent the apocalypse. With humor and wit, they navigate through a series of misadventures, encountering eccentric characters and moral dilemmas along the way. Together, they strive to thwart the end of the world, questioning the cosmic order and their own roles in it.

                        Embark on a hilarious journey with an angel and a demon who team up to prevent the apocalypse. Packed with wit, satire, and absurdity, this novel is a rollicking good time that will leave you grinning from ear to ear.</p></td>
                    </tr>
                    <tr>
                        <td><h4>Genre</h4></td>
                        <td><p>Fantasy Fiction, Comedy</p></td>
                    </tr>
                    <tr>
                        <td><h4>Available at</h4></td>
                        <td><p>Gramedia, Kinokuniya</p></td>
                    </tr>
                </table>
                </div>
            </div>
        </div>
        <div class="top">
          <h2>You might also be interested in</h2>
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
        </div>          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default BooksDetail;
