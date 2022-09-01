import showCommentPage from '../comment/commentPopup.js';
import { likeMovie, getLikes } from '../api/involmentApi.js';

class ShowMoviesContainer {
  constructor(showImage, showName, showLikes, showId) {
    this.showImage = showImage;
    this.showName = showName;
    this.showLikes = showLikes;
    this.updateLikes = this.updateLikes.bind(this);
    this.updateLikes.numLikesDisplay = null;
    this.showId = showId;
  }

  // update number of likes
  updateLikes() {
    this.numLikesDisplay.innerText = this.showLikes === 1
      ? `${this.showLikes} Like`
      : `${this.showLikes} Likes`;
  }

  displayMovies() {
    const showsPanel = document.getElementById('movies-display');
    const container = document.createElement('div');
    container.classList.add('col-4', 'mb-4');
    const showImg = document.createElement('img');
    showImg.src = this.showImage;
    showImg.classList.add('w-100', 'h-auto');
    const showTitle = document.createElement('p');
    showTitle.classList.add('mb-0');
    showTitle.innerText = this.showName;
    const numLikes = document.createElement('p');
    numLikes.classList.add('text-end', 'mb-0');
    numLikes.innerText = this.showLikes;
    this.numLikesDisplay = numLikes;
    const likeButton = document.createElement('i');
    likeButton.classList.add('fa', 'fa-heart');
    likeButton.addEventListener('click', async () => {
      const status = await likeMovie(this.showId);
      if (status === 201) {
        this.showLikes += 1;
        this.updateLikes();
      }
    });
    const divInfo = document.createElement('div');
    divInfo.classList.add(
      'd-flex',
      'justify-content-between',
      'align-items-baseline',
      'mt-2',
    );
    divInfo.append(showTitle, likeButton);
    const commentButton = document.createElement('button');
    commentButton.classList.add('mt-2');
    commentButton.innerText = 'Comment';
    commentButton.addEventListener('click', () => showCommentPage(this.showId));
    container.append(showImg, divInfo, numLikes, commentButton);
    showsPanel.append(container);
    this.updateLikes();
  }
}
const displayShows = async (shows) => {
  const result = await getLikes();
  shows.forEach((show) => {
    let numLikes = 0;
    // counter number of likes
    numLikes = result.likes.find((item) => item.item_id === show.id)
      ? result.likes.find((item) => item.item_id === show.id).likes
      : 0;
    const showMoviesContainer = new ShowMoviesContainer(
      show.image.original,
      show.name,
      numLikes,
      show.id,
    );
    showMoviesContainer.displayMovies();
  });
};
export default displayShows;
