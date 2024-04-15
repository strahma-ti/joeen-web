/* eslint-disable no-underscore-dangle */
class AppBar extends HTMLElement {
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
        .app-bar {
            padding: 8px 16px;
            background-color: white;
            display: grid;
            grid-template-columns: auto 1fr auto;
            gap: 10px;
            position: sticky;
            top: 0;
            z-index: 99;
            box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
        
        .app-bar .app-bar__menu {
            display: flex;
            align-items: center;
        }
        
        .app-bar .app-bar__menu button {
            background-color: transparent;
            border: none;
            font-size: 18px;
            padding: 8px;
            cursor: pointer;
        }
        
        .app-bar .app-bar__brand {
            display: flex;
            align-items: center;
        }
        
        /* .app-bar__brand a {
            text-decoration: none;
        
        } */
        
        .app-bar__brand img {
            width: 50px;
            height: auto;
            margin-right: 5px;
            cursor: pointer;
        }
        
        .app-bar .app-bar__brand h1 {
            font-family: 'Poppins', sans-serif;
            color: #353C4B;
            font-weight:900;
            text-transform: uppercase;
            font-size: 22px;
            user-select: none;
            cursor: pointer;
        }
        
        .app-bar .app-bar__navigation {
            position: absolute;
            top: 50px;
            left: -180px;
            width: 150px;
            transition: all 0.3s;
            padding: 8px;
            background-color: white;
            overflow: hidden;
        }
        
        .app-bar .app-bar__navigation.open {
            left: 0;
        }
        
        .app-bar .app-bar__navigation ul li a {
            display: inline-block;
            text-decoration: none;
            color: #353C4B;
            padding: 5px;
            margin-bottom: 5px;
            width:fit-content;
            text-align: center;
        }
        
        .app-bar .app-bar__navigation ul {
            text-align: center;
        }
        
        
        .avatar {
            width: 30px; 
            height: 30px; 
            padding: 5px;
            background-image: url('../public/avatar1.png'); 
            background-size: cover; 
            background-position: center; 
            border-radius: 50%; 
            border: 2px solid #353C4B;
            display: inline-block;
            margin-right: 8px; 
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
      <div class="app-bar">   
        <div class="app-bar__menu">
        <button id="hamburgerButton">☰</button>
        </div>
        <div class="app-bar__brand" id="brand">
            <img class="app-bar_brand-logo" src="./joeeen-logo.png" alt="joeeen-logo">
            <h1>Joeen</h1>
        </div>
        <div class="profile">
        <a href="#/profile"><div class="avatar"></div></a>
        </div>    
        <nav id="navigationDrawer" class="app-bar__navigation">
        <ul>
            <li><a href="#/events">Events</a></li>
            <li><a href="#/community">Community</a></li>
            <li><a href="#/volunteer">Volunteer</a></li>
            <li><a href="#/books">Books</a></li>
            <li><a href="#/music">Music</a></li>
            <li><a href="#/film">Film</a></li>
        </ul>
        </nav>
      </div>
        `;
  }
}

customElements.define('app-bar', AppBar);
