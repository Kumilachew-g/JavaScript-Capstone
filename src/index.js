import './assets/css/style.css';
import { lookupFetch } from './modules/api/showApi.js';
import displayShows from './modules/home-page/show.js';
import { createMoviesApp } from './modules/api/involmentApi.js';

const moviesShows = [];

document.addEventListener('DOMContentLoaded', async () => {
  moviesShows.push(
    await lookupFetch(90),
    await lookupFetch(91),
    await lookupFetch(92),
    await lookupFetch(93),
    await lookupFetch(94),
    await lookupFetch(95),
    await lookupFetch(96),
    await lookupFetch(1),
    await lookupFetch(98),
    await lookupFetch(99),
    await lookupFetch(11),
    await lookupFetch(111),
  );
  await createMoviesApp();
  await displayShows(moviesShows);
});
