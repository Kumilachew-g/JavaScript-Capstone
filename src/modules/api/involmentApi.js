const mainUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const createMoviesApp = async () => {
  const response = await fetch(`${mainUrl}/apps`, { method: 'POST' });
  const moviesAppId = await response.text();
  if (!localStorage.getItem('appId')) localStorage.setItem('appId', moviesAppId);
};

const likeMovie = async (movieId) => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${mainUrl}/apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      item_id: movieId,
    }),
  });
  const status = await response.status;
  return status;
};

const getLikes = async () => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${mainUrl}/apps/${appId}/likes`);
  let likes = await response.text();
  if (likes.length === 0) likes = '[]';
  return JSON.parse(`{"likes": ${likes}}`);
};

module.exports = { createMoviesApp, likeMovie, getLikes };
