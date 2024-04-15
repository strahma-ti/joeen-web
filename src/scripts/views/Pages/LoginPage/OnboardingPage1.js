const Onboarding1Page = {
  selectedTopics: [],

  async render() {
    return `
        <style>
    
        .main-content {
            padding: 0;
        }

        .welcome-mess {
          color: #353C4B;
          margin-top: 5em;
          margin-bottom: 1em;
          gap: 5px;
          display: flex;
          margin-right: 10em;
          margin-left: 10em;
          flex-direction: column;
        }

        .welcome-mess label {
          font-size: x-large;
        }

        .welcome-mess p {
          opacity: 70%;
        }

        .topic-section {
            background: #D7DCE2;
            gap: 2em;
            display: flex;
            border-radius: 25px;
            margin-right: 10em;
            margin-left: 10em;
            padding: 2em;
            flex-direction: column;
        }
  
        .select-topic button {
            font-size: 17px;
            margin-right: 10px;
            margin-bottom: 10px;
            padding: 5px 10px;
            background-color: white;
            border: none;
            border-radius: 50px;
            cursor: pointer;
        }
  
        .select-topic button.selected {
            background-color: #164DA0;
            color: #fff;
        }

        .select-topic button:hover {
            background-color: #164DA0;
            color: #fff;
        }

        .topic-section p {
          font-size: x-large;
          color: #353C4B;
          margin-bottom: 1em;
        }

        .next-button {
          margin-bottom: 2em;
          margin-top: 2em;
          margin-right: 10em;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
        }

        .next-button button {
          font-size: medium;
          height: 37px;
          border-radius: 10px;
          width: 11em;
          background: #FFB200;
          border: none;
          color: white;
          cursor: pointer;
        }

        .onboarding-slide {
          gap: 0.5em;
          margin-top: 3em;
          margin-bottom: 1em;
          margin-right: 10em;
          display: flex;
          justify-content: flex-end;
        }

        .slide-1 .rectangle {
          width: 86px;
          height: 10px;
          top: 0;
          left: 0;
          background-color: #353C4B;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        
        .page p{
          margin-top: 1em;
        }

        .slide-2 .rectangle {
          cursor: pointer;
          width: 86px;
          height: 10px;
          top: 0;
          left: 0;
          background-color: #d7dce2;
          border-radius: 10px;
        }

        .slide-2 .rectangle:hover{
          background-color: #353C4B;
          opacity: 50%;
        }

    
        </style>
        <div class="onboarding">
          <div class="onboarding-slide">
            <div class="slide-1">
              <div class="rectangle">
                <div class="page">
                  <p>1 of 2</p>
                </div>
              </div>
            </div>
            <div class="slide-2">
              <div class="rectangle"></div>
            </div>
          </div>
          <div class="welcome-mess">
              <label>Hi! Welcome</label>
              <h2>What are you interested in?</h2>
              <p>Select some topics you’re interested in to help personalize your experience.</p>
          </div>
          <div class="topic-section">
            <div class="events-section">
                  <p>Events, Community & Volunteer</p>
                <div class="select-topic">
                <button data-topic="art">Art</button>
                <button data-topic="book">Book</button>
                <button data-topic="business-industry">Business & Industry</button>
                <button data-topic="cars-motorcycles">Cars & Motorcycles</button>
                <button data-topic="event">Event</button>
                <button data-topic="education">Education</button>
                <button data-topic="environment">Environment</button>
                <button data-topic="fitness-wellness">Fitness & Wellness</button>
                <button data-topic="food-drink">Food & Drink</button>
                <button data-topic="games">Games for Fun</button>
                <button data-topic="hair-beauty">Hair & Beauty</button>
                <button data-topic="health-wellbeing">Health & Wellbeing</button>
                <button data-topic="hobbies-crafts">Hobbies & Crafts</button>
                <button data-topic="pets-animals">Pets & Animals</button>
                <button data-topic="photography">Photography</button>
                <button data-topic="language">Language</button>
                <button data-topic="lifestyle">Lifestyle</button>
                <button data-topic="movies">Movies</button>
                <button data-topic="music">Music</button>
                <button data-topic="outdoors-adventure">Outdoors & Adventure</button>
                <button data-topic="politics-society">Politics & Society</button>
                <button data-topic="socializing">Socializing</button>
                <button data-topic="sci-fi-fantasy">Sci-Fi & Fantasy</button>
                <button data-topic="sport-recreation">Sport & Recreation</button>
                <button data-topic="support">Support</button>
                <button data-topic="technology">Technology</button>
                <button data-topic="writing">Writing</button>                
                </div>
            </div>
            <div class="books-section">
            <p>Books</p>
            <div class="select-topic">
            <button data-topic="biographies">Biographies</button>
            <button data-topic="business">Business</button>
            <button data-topic="design-art">Design & Art</button>
            <button data-topic="education">Education</button>
            <button data-topic="entertainment">Entertainment</button>
            <button data-topic="engineering">Engineering</button>
            <button data-topic="fiction">Fiction</button>
            <button data-topic="fitness-wellbeing">Fitness & Wellbeing</button>
            <button data-topic="history">History</button>
            <button data-topic="language">Language & Writing</button>
            <button data-topic="law">Law</button>
            <button data-topic="medicine">Medicine</button>
            <button data-topic="personal-dev">Personal Development</button>
            <button data-topic="relationship">Relationships & Family</button>
            <button data-topic="science">Science & Math</button>
            <button data-topic="social-science">Social Sciences</button>
            <button data-topic="soft-dev">Software Development & Devops</button>
            <button data-topic="sports">Sports</button>
            <button data-topic="technology">Technology</button>
            </div>
        </div>
        
        <div class="music-section">
            <p>Music</p>
            <div class="select-topic">
            <button data-topic="art">Alternative</button>
            <button data-topic="blues-jazz">Blues & Jazz</button>
            <button data-topic="country">Country</button>
            <button data-topic="cultural">Cultural</button>
            <button data-topic="edm-electronic">EDM/Electronic</button>
            <button data-topic="folk">Folk</button>
            <button data-topic="hip-hop-rap">Hip Hop/Rap</button>
            <button data-topic="indie">Indie</button>
            <button data-topic="latin">Latin</button>
            <button data-topic="metal">Metal</button>
            <button data-topic="opera">Opera</button>
            <button data-topic="pop">Pop</button>
            <button data-topic="r-b">R&B</button>
            <button data-topic="reggae">Reggae</button>
            <button data-topic="rock">Rock</button>
            <button data-topic="acoustic">Acoustic</button>
            <button data-topic="dj-dance">DJ/Dance</button>
            <button data-topic="experimental">Experimental</button>
            <button data-topic="punk-hardcore">Punk/Hardcore</button>
            <button data-topic="world">World</button>
                        </div>
        </div>
        
        <div class="film-section">
            <p>Film</p>
            <div class="select-topic">
            <button data-topic="action">Action</button>
            <button data-topic="adventure">Adventure</button>
            <button data-topic="animation">Animation</button>
            <button data-topic="comedy">Comedy</button>
            <button data-topic="drama">Drama</button>
            <button data-topic="horror">Horror</button>
            <button data-topic="fantasy">Fantasy</button>
            <button data-topic="sci-fi">Sci-Fi (Science Fiction)</button>
            <button data-topic="romance">Romance</button>
            <button data-topic="thriller">Thriller</button>
            <button data-topic="mystery">Mystery</button>
            <button data-topic="musical">Musical</button>
            <button data-topic="historical">Historical</button>
            <button data-topic="documentary">Documentary</button>
            <button data-topic="independent">Independent</button>
                          </div>
            </div>
          </div>
          </div>
          <div class="next-button">
            <a href="#/onboarding2">
                <button>Next</button>
            </a>
          </div>
          </div>
        </div>
      `;
  },

  async afterRender() {
    const navbar = document.querySelector('.page-navbar');
    const footer = document.querySelector('.page-footer');
    navbar.classList.add('hidden');
    footer.classList.add('hidden');

    const topicButtons = document.querySelectorAll('.select-topic button');
    topicButtons.forEach((button) => {
      button.addEventListener('click', () => this.selectTopic(button));
    });
  },

  selectTopic(button) {
    const { topic } = button.dataset;
    const index = this.selectedTopics.indexOf(topic);
    if (index === -1) {
      this.selectedTopics.push(topic);
      button.classList.add('selected');
    } else {
      this.selectedTopics.splice(index, 1);
      button.classList.remove('selected');
    }
  },
};

export default Onboarding1Page;
