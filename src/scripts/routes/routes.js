// import HomePage from '../views/Pages/HomePage/HomePage';
import HomePage from '../views/Pages/Homepage/HomePage';
import EventsPage from '../views/Pages/EventsPage/EventsPage';
import CommunityPage from '../views/Pages/CommunityPage/CommunityPage';
import VolunteerPage from '../views/Pages/VolunteerPage/VolunteerPage';

import BooksPage from '../views/Pages/BooksPage/BooksPage';
import BooksDetail from '../views/Pages/BooksPage/BooksDetail';

import MusicPage from '../views/Pages/MusicPage/MusicPage';
import FilmPage from '../views/Pages/FilmPage/FilmPage';

const routes = {
  '/': HomePage, // default page
  '/events': EventsPage,
  '/community': CommunityPage,
  '/volunteer': VolunteerPage,
  '/books': BooksPage,
  '/books/detail': BooksDetail,
  '/music': MusicPage,
  '/film': FilmPage,
};

export default routes;
