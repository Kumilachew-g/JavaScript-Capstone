class ShowMoviesContainer {
  constructor(showImage, showName, showLikes, showId) {
    this.showImage = showImage;
    this.showName = showName;
    this.showLikes = showLikes;
    this.showId = showId;
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
    container.append(showImg, divInfo, numLikes, commentButton);
    showsPanel.append(container);
  }
}
async function displayShows(shows) {
  shows.forEach((show) => {
    const numLikes = 0;
    const showMoviesContainer = new ShowMoviesContainer(
      show.image.original,
      show.name,
      numLikes,
      show.id,
    );
    showMoviesContainer.displayMovies();
  });
}
export default displayShows;