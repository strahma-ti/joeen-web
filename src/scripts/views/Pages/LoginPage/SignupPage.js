// import './homepage.css';

const SignupPage = {
  async render() {
    return `
      <style>
  
      .main-content {
          padding: 0;
      }
  
       .login-section {
          display: flex;
          justify-content: center;
          align-items: center;
       }
  
       .left-section {
          gap: 5em;
          display: flex;
          flex-direction: column;
          align-items: center;
          background: #164DA0;
          width: 50%;
          height: 40em;
          justify-content: center;
       }
  
       .overview-web p {
          color: white;
          text-align: justify;
          text-align-last: center;
          padding-left: 3em;
          padding-right: 3em;
       }
  
       .login-image img {
          width:30em;
       }
       .login-button a {
          text-decoration: none;
          color: white;
          background-color: #FFB200;
          cursor: pointer;
          width: 100%;
          height: 3em;
          border-radius: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
       }
  
      .right-section {
          height: 38em;
          display: flex;
          flex-direction: column;
          align-items: center;
          width: 50%;
      }
  
      .joeen-logo {
          display: flex;
          flex-direction: column;
          align-items: center;
      }
  
      .joeen-logo img {
          width: 5em;
      }
  
      .joeen-logo h2 {
        font-size: xx-large;
        padding-top: 0;
        padding-bottom: 0.5em;
      }
  
      .login-form {
          margin-bottom: 3em;
      }
  
      #login-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
      }

      .name-form {
        width: 10px;
        display: inline-flex;
        gap: 1em;
      }

      .name-input input {
        border-radius: 10px;
        height: 3em;
        background: #D7DCE2;
        border: none;
        margin-bottom: 10px;
        padding-inline: 2em;
      }
  
      .form-input input {
          border-radius: 10px;
          height: 3em;
          background: #D7DCE2;
          border: none;
          width: 30em;
          margin-bottom: 10px;
          padding-inline: 2em;
      }
  
      .form-checkbox {
          display: flex;
          justify-content: space-between;
          color: #21252F;
      }
  
      #forgot-password {
          color: black;
          text-decoration: underline;
      }
  
      .login-google {
          color: #21252F;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1em;
      }
  
      .google-button button {
          cursor: pointer;
          color: #353C4B;
          width: 34em;
          height: 3em;
          background: white;
          border-color: #353C4B;
          border-radius: 10px;
      }
  
      #sign-up-link {
          color: #FFB200; 
          text-decoration: underline;
      }
  
      .sign-up p {
          margin-bottom: 1em;
          margin-top: 1em;
          display: flex;
          justify-content: center;
      }
      </style>
          <div class="login-section">
            <div class="left-section">
              <div class="login-image">
                <img src="https://tinypic.host/images/2024/04/12/image261b26727e2dea22.png" alt="image261b26727e2dea22.png" border="0">              </div>        
              <div class="overview-web">
                  <p>Joeen: Empowering youth with event recommendations, communities, <br> volunteering, and a curated library of books, music, and movies.</p>
              </div>
            </div>
              <div class="right-section">
                  <div class="joeen-logo">
                      <img src="https://tinypic.host/images/2024/04/09/image.png" alt="image.png" border="0">                    
                      <h2> Sign Up </h2>
                  </div>
                  <div class="login-form">
                      <form id="login-form">
                        <div class="name-form">
                          <div class="name-input">
                             <input type="text" id="name" name="name" placeholder="Name" >
                          </div>
                          <div class="name-input">
                              <input type="text" id="username" name="username" placeholder="Username" >
                          </div>
                        </div>
                          <div class="form-input">
                            <input type="text" id="email" name="email" placeholder="Email" >
                          </div>
                          <div class="form-input">
                              <input type="password" id="password" name="password" placeholder="Password" >
                          </div>
                          <div class="form-input">
                            <input type="password" id="password" name="password" placeholder="Confirm Password" >
                          </div>
                              <div>
                                  <input type="checkbox" id="terms" name="terms">
                                  <label for="terms">I agree to all the Terms and Privacy Policies</label>
                              </div>
                          <div class="login-button">
                          <a href="#/onboarding1">
                              Sign Up
                          </a>
                          </div>
                      </form>
                  </div>
                  <div class="login-google">
                      <p> Or Sign Up With </p>
                      <div class="google-button">
                          <button type="submit">Google</button>
                  <div class="sign-up">
                      <p>Already have an account? <a href="/" id="sign-up-link">Log In</a></p>
                  </div>
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

export default SignupPage;
