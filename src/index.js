import './assets/css/style.css';
import { lookupFetch } from './modules/api/showApi.js';
import displayShows from './modules/home-page/show.js';
import { createMoviesApp } from './modules/api/involmentApi.js';

const moviesShows = [];

document.addEventListener('DOMContentLoaded', async () => {
  moviesShows.push(
    await lookupFetch(99),
    await lookupFetch(101),
    await lookupFetch(102),
    await lookupFetch(103),
    await lookupFetch(104),
    await lookupFetch(105),
    await lookupFetch(106),
    await lookupFetch(112),
    await lookupFetch(108),
    await lookupFetch(109),
    await lookupFetch(110),
    await lookupFetch(111),
  );
  await createMoviesApp();
  await displayShows(moviesShows);
});
