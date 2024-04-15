/* eslint-disable no-underscore-dangle */
class FooterBar extends HTMLElement {
  _shadowRoot = null;

  _style = null;

  _navOpen = false;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
    .footer {
        /* position: fixed; */
        height: 475px;
        top: 0;
        left: 0;
        background-color: transparent;
      }
      
      .footer .overlap {
        position: relative;
        height: 475px;
        background-color: #87a9c1;
      }
      
      .footer .element-bug-buster {
        position: absolute;
        width: 270px;
        top: 415px;
        left: 585px;
        opacity: 0.65;
        font-family: "Roboto-Bold", Helvetica;
        font-weight: 700;
        color: #353c4b;
        font-size: 14px;
        text-align: center;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .recommendation {
        position: absolute;
        width: 156px;
        height: 218px;
        top: 70px;
        left: 692px;
      }
      
      .footer .text-wrapper {
        position: absolute;
        width: 152px;
        top: 0;
        left: 0;
        font-family: "Roboto-Bold", Helvetica;
        font-weight: 700;
        color: #353c4b;
        font-size: 18px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .navigation {
        position: absolute;
        width: 102px;
        top: 38px;
        left: 0;
        font-family: "Roboto-Regular", Helvetica;
        font-weight: 400;
        color: #353c4b;
        font-size: 13px;
        letter-spacing: 0;
        line-height: 30px;
      }
      
      .footer .contact {
        position: absolute;
        width: 245px;
        height: 81px;
        top: 70px;
        left: 923px;
      }
      
      .footer .div {
        position: absolute;
        width: 102px;
        top: 0;
        left: 0;
        font-family: "Roboto-Bold", Helvetica;
        font-weight: 700;
        color: #353c4b;
        font-size: 18px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .email {
        position: absolute;
        width: 243px;
        height: 18px;
        top: 38px;
        left: 0;
      }
      
      .footer .overlap-group-wrapper {
        height: 18px;
      }
      
      .footer .overlap-group {
        position: relative;
        width: 227px;
        height: 16px;
        top: -1px;
      }
      
      .footer .text-wrapper-2 {
        position: absolute;
        width: 128px;
        top: 0;
        left: 0;
        opacity: 0.7;
        font-family: "Roboto-Regular", Helvetica;
        font-weight: 400;
        color: #353c4b;
        font-size: 14px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .text-wrapper-3 {
        position: absolute;
        width: 130px;
        top: 0;
        left: 97px;
        font-family: "Roboto-Bold", Helvetica;
        font-weight: 700;
        color: #353c4b;
        font-size: 14px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .telepon {
        position: absolute;
        width: 243px;
        height: 18px;
        top: 63px;
        left: 0;
      }
      
      .footer .social-media {
        position: absolute;
        width: 245px;
        height: 74px;
        top: 194px;
        left: 923px;
      }
      
      .footer .text-wrapper-4 {
        position: absolute;
        width: 55px;
        top: 0;
        left: 0;
        font-family: "Roboto-Bold", Helvetica;
        font-weight: 700;
        color: #353c4b;
        font-size: 18px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .logo {
        position: absolute;
        width: 243px;
        height: 24px;
        top: 50px;
        left: 0;
      }
      
      .footer .bxl-facebook {
        position: absolute;
        width: 12px;
        height: 22px;
        top: 1px;
        left: 0;
      }
      
      .footer .bxl-twitter {
        position: absolute;
        width: 25px;
        height: 19px;
        top: 2px;
        left: 99px;
      }
      
      .footer .instagram-logo {
        position: absolute;
        width: 23px;
        height: 22px;
        top: 1px;
        left: 44px;
        /* background-image: url(./img/shape.svg); */
        background-size: 100% 100%;
      }
      
      .footer .youtube-logo {
        position: absolute;
        width: 28px;
        height: 19px;
        top: 3px;
        left: 156px;
        /* background-image: url(./img/image.svg); */
        background-size: 100% 100%;
      }
      
      .footer .object {
        position: absolute;
        width: 25px;
        height: 24px;
        top: 0;
        left: 218px;
      }
      
      .footer .divider {
        position: absolute;
        width: 1190px;
        height: 4px;
        top: 380px;
        left: 126px;
        background-color: #353c4b;
        border: 1px solid;
        opacity: 0.2;
      }
      
      .footer .about-us {
        position: absolute;
        width: 170px;
        height: 261px;
        top: 71px;
        left: 452px;
      }
      
      .footer .p {
        position: absolute;
        width: 166px;
        top: 45px;
        left: 0;
        font-family: "Roboto-Regular", Helvetica;
        font-weight: 400;
        color: #353c4b;
        font-size: 13px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .app-brand {
        position: absolute;
        width: 236px;
        height: 75px;
        top: 58px;
        left: 89px;
      }
      
      .footer .text-wrapper-5 {
        position: absolute;
        top: 0;
        left: 72px;
        font-family: "Poppins-ExtraBold", Helvetica;
        font-weight: 800;
        color: #353c4b;
        font-size: 50px;
        letter-spacing: 0;
        line-height: normal;
      }
      
      .footer .joeen-logo {
        position: absolute;
        width: 54px;
        height: 60px;
        top: 6px;
        left: 0;
      }      
            `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  _toggleNav() {
    const navLinks = this._shadowRoot.querySelector('.nav-links');
    navLinks.classList.toggle('active');
    this._navOpen = !this._navOpen;
  }

  connectedCallback() {
    this.render();

    window.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        this._shadowRoot.querySelector('.app-bar').classList.add('scrolled');
      } else {
        this._shadowRoot.querySelector('.app-bar').classList.remove('scrolled');
      }
    });

    // Toggle navigation on hamburger click
    const hamburger = this._shadowRoot.querySelector('.hamburger');
    hamburger.addEventListener('click', () => {
      this._toggleNav();
    });
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += ` 
    <footer class="footer">
    <div class="overlap">
      <p class="element-bug-buster">©2024 Bug Busters | All Rights Reserved</p>
    <div class="recommendation">
      <div class="text-wrapper">Recommendation</div>
      <div class="navigation">
        <a href="#/events">Events</a><br />
        <a href="#/community">Community</a><br />
        <a href="#/volunteer">Volunteer</a><br />
        <a href="#/books">Books</a><br />
        <a href="#/music">Music</a><br />
        <a href="#/film">Film</a>
      </div>
    </div>
      <div class="contact">
        <div class="div">Contact Us</div>
        <div class="email">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="text-wrapper-2">Email</div>
              <div class="text-wrapper-3">joeenwithus@gmail.com</div>
            </div>
          </div>
        </div>
        <div class="telepon">
          <div class="overlap-group-wrapper">
            <div class="overlap-group">
              <div class="text-wrapper-2">Telepon</div>
              <div class="text-wrapper-3">123-456-789</div>
            </div>
          </div>
        </div>
      </div>
      <div class="social-media">
        <div class="text-wrapper-4">Social</div>
        <div class="logo">
          <img class="bxl-facebook" src="img/bxl-facebook.png" />
          <img class="bxl-twitter" src="img/bxl-twitter.png" />
          <div class="instagram-logo"></div>
          <div class="youtube-logo"></div>
          <img class="object" src="img/object.png" />
        </div>
      </div>
      <div class="divider"></div>
      <div class="about-us">
        <div class="text-wrapper">About Us</div>
        <p class="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec velit rutrum, convallis diam vel,
          tristique lacus. Quisque id risus et metus consequat commodo. Sed id urna vitae justo placerat ultrices
          sed vitae mi. Aliquam sagittis, ex sit amet fermentum pharetra, nisl nulla luctus elit, ac lacinia turpis
          elit sed velit.
        </p>
      </div>
      <div class="app-brand">
        <div class="text-wrapper-5">JOEEN</div>
        <img class="joeen-logo" src="./joeeen-logo.png" />
      </div>
    </div>
  </footer>
          `;
  }
}

customElements.define('footer-bar', FooterBar);
