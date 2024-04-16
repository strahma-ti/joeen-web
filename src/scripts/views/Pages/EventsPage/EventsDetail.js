const EventsDetail = {
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

      .date-info,
      .time,
      .loc{
        color:#353C4B;
        opacity:70%;
        gap: 10px;
        display: flex;
        align-items: center;
      }

      .date-info img,
      .time img,
      .loc img{
        width: 2em;
      }

      .info .description p {
        margin-right: 3em;
        margin-left: 3em;
        opacity: 70%;
      }
  
      .regist-button {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
  
      .regist-button button {
        font-size: medium;
        height: 37px;
        border-radius: 10px;
        width: 100%;
        background: #FFB200;
        border: none;
        color: white;
        cursor: pointer;
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
              <label for="allCheckbox">In Person</label>
              <input type="checkbox" id="allCheckbox" name="allCheckbox">
            </div>
            <div class="checkboxUpcoming">
              <label for="upcomingCheckbox">Virtual</label>
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
                <img src="https://tinypic.host/images/2024/04/16/imageb843da73454494c9.png" alt="imageb843da73454494c9.png" border="0">          </div>
                <div class="map">
                <img src="https://tinypic.host/images/2024/04/15/image2f6251b10ac30d3e3a906ac4491ee1c9.png" alt="image2f6251b10ac30d3e3a906ac4491ee1c9.png" border="0">          </div>
            </div>
            <div class="right-section">
                <div class="info">
                    <div class="name">
                        <h2>Handmade Soap Making Class</h2>
                    </div>
                    <div class="date-info">
                        <img src="https://tinypic.host/images/2024/04/16/image02730d3ecc43a09c.png" alt="image02730d3ecc43a09c.png" border="0">
                        <p>21 APRIL, 2024</p>
                    </div>   
                    <div class="time">
                        <img src="https://tinypic.host/images/2024/04/16/imaged80752859faf4727.png" alt="imaged80752859faf4727.png" border="0">
                        <p>10.00 WIB</p>
                    </div>  
                    <div class="loc">
                        <img src="https://tinypic.host/images/2024/04/16/imagecdd836bb75861325.png" alt="imagecdd836bb75861325.png" border="0">
                        <p>ONNI House Jakarta<br>
                        Jl. Tanjung Duren Utara V No.242, RT.6/RW.3, Tj. Duren Utara, V,<br>
                        Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11470</p>
                    </div>
                    <div class="description">
                        <p>Join us for an immersive Handmade Soap Making Class! Discover the art of crafting luxurious, all-natural soaps infused with aromatic essential oils and botanical ingredients. In this hands-on workshop, you'll learn the step-by-step process of creating your own bespoke soaps, from selecting high-quality ingredients to mastering various techniques such as scent blending and mold pouring. Our experienced instructors will guide you through each stage, ensuring that you leave with not only a newfound skill but also a collection of beautifully handcrafted soaps to pamper yourself or gift to loved ones. Don't miss this opportunity to indulge in a creative and therapeutic experience while embracing the natural beauty of handmade skincare products. Reserve your spot now and embark on a sensory journey into the world of artisanal soap making</p>
                    </div>
                </div>
                <div class="regist-button">
                    <button>Register now</button>
                </div>
            </div>
        </div>
        <div class="top">
          <h2>You might also be interested in</h2>
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
          `;
  },

  async afterRender() {
    // Fungsi ini akan dipanggil setelah render()
  },
};

export default EventsDetail;
