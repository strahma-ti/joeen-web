// import HomePage from '../views/Pages/HomePage/HomePage';
import LoginPage from '../views/Pages/LoginPage/LoginPage';
import SignupPage from '../views/Pages/LoginPage/SignupPage';
import Onboarding1Page from '../views/Pages/LoginPage/OnboardingPage1';
import Onboarding2Page from '../views/Pages/LoginPage/OnboardingPage2';

import HomePage from '../views/Pages/Homepage/HomePage';
import EventsPage from '../views/Pages/EventsPage/EventsPage';
import CommunityPage from '../views/Pages/CommunityPage/CommunityPage';
import VolunteerPage from '../views/Pages/VolunteerPage/VolunteerPage';

import BooksPage from '../views/Pages/BooksPage/BooksPage';
import BooksDetail from '../views/Pages/BooksPage/BooksDetail';

import MusicPage from '../views/Pages/MusicPage/MusicPage';
import FilmPage from '../views/Pages/FilmPage/FilmPage';
import FilmDetail from '../views/Pages/FilmPage/FilmDetail';

const routes = {
  '/': LoginPage, // default page
  '/signup': SignupPage,
  '/onboarding1': Onboarding1Page,
  '/onboarding2': Onboarding2Page,
  '/homepage': HomePage,
  '/events': EventsPage,
  '/community': CommunityPage,
  '/volunteer': VolunteerPage,
  '/books': BooksPage,
  '/books/detail': BooksDetail,
  '/music': MusicPage,
  '/film': FilmPage,
  '/detail/:id': FilmDetail,

};

export default routes;
