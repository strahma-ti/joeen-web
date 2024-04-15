const Onboarding2Page = {

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

      .onboarding-slide {
        gap: 0.5em;
        margin-top: 3em;
        margin-bottom: 1em;
        margin-right: 10em;
        display: flex;
        justify-content: flex-end;
      }

      .slide-1 .rectangle {
        cursor: pointer;
        width: 86px;
        height: 10px;
        background-color: #d7dce2;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      
      .page p{
        margin-top: 1em;
      }

      .slide-2 .rectangle {
        width: 86px;
        height: 10px;
        background-color: #353C4B;
        border-radius: 10px;
      }

      .slide-1 .rectangle:hover{
        background-color: #353C4B;
        opacity: 50%;
      }

      .avatar-section {
        margin-top: 4em;
        margin-right: 10em;
        margin-left: 10em;
      }

      .avatar-card {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 4em;
      }

      .add-avatar .rectangle {
        margin-top: 4em;
        display: flex;
        width: 100%;
        height: 7em;
        border: 2.5px dashed;
        border-color: #353c4bb2;
        justify-content: center;
        align-items: center;
      }

      .rectangle img{
        width: 2em;
        cursor: pointer;
      }

      .finish-button {
        margin-bottom: 2em;
        margin-top: 2em;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
      }

      .finish-button button {
        font-size: medium;
        height: 37px;
        border-radius: 10px;
        width: 11em;
        background: #FFB200;
        border: none;
        color: white;
        cursor: pointer;
      }

      img {
        width: 13em;
        cursor: pointer;
      }

      </style>

    <div class="onboarding">
        <div class="onboarding-slide">
            <div class="slide-1">
            <div class="rectangle">
                <div class="page">
                <p>2 of 2</p>
                </div>
            </div>
            </div>
            <div class="slide-2">
            <div class="rectangle"></div>
            </div>
        </div>
        <div class="welcome-mess">
            <label>Hi! Welcome</label>
            <h2>Choose your avatar</h2>
            <p>Select your avatar below or upload image.</p>
        </div>
        <div class="avatar-section">
            <div class="avatar-card">
                <div class="avatar-1">
                    <img src="https://tinypic.host/images/2024/04/12/imagec192a3115cd02ebb.png" alt="imagec192a3115cd02ebb.png" border="0">
                </div>
                <div class="avatar-2">
                    <img src="https://tinypic.host/images/2024/04/12/imageac159f3cd416e231.png" alt="imageac159f3cd416e231.png" border="0">
                </div>
                <div class="avatar-3">
                    <img src="https://tinypic.host/images/2024/04/12/image70537a48f80341ee.png" alt="image70537a48f80341ee.png" border="0">
                </div>
                <div class="avatar-4">
                    <img src="https://tinypic.host/images/2024/04/12/image39c6781e673bc447.png" alt="image39c6781e673bc447.png" border="0">
                </div>
            </div>
            <div class="add-avatar">
                <div class="rectangle">
                    <img src="https://tinypic.host/images/2024/04/12/imagef613fcd5606c85c1.png" alt="imagef613fcd5606c85c1.png" border="0">
                </div>
            </div>
            <div class="finish-button">
            <a href="#/homepage">
                <button>Finish</button>
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
  },
};

export default Onboarding2Page;
