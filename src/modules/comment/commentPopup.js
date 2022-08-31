import { lookupFetch, fetchComments } from '../api/showApi.js';

const addItemToList = (ul, arr) => {
  arr.forEach((el) => {
    ul.innerHTML += `<li class= "comment-list-item my-1" >${el.creation_date} ${el.username}: ${el.comment}</li>`;
  });
};

const getCounts = (array) => array.length;

export default async function showCommentPage(showId) {
  const showInformation = await lookupFetch(showId);
  const commentsInformation = await fetchComments(showId);
  const modalComment = document.querySelector('.modal-comment');
  modalComment.classList.add('active');

  modalComment.innerHTML = `
        <div
              class="
                modal-content
                d-flex
                flex-column
                align-items-center
                justify-content-center
              "
            >
              <div class="d-flex flex-row w-100 justify-content-center">
                <img
                  src="${showInformation.image.medium}"
                  alt="shows"
                  class="popup-image"
                />
                <div class="popup-close"> &times;</div>
              </div>
              <h3 class="popup-title my-4">${showInformation.name}</h3>
              <div class="info d-flex flex-row my-2 w-75">
                <div class="categories d-flex flex-column align-items-start w-50">
                  <h5>Genre : ${showInformation.genres[0]}</h5>
                  <h5>Language : ${showInformation.language}</h5>
                </div>
                <div class="categories d-flex flex-column align-items-start w-50">
                  <h5>Release Date : ${
  showInformation.premiered.split('-')[0]
}</h5>
                  <h5>Rating : ${showInformation.rating.average}</h5>
                </div>
              </div>
              <h4 class="comments-title my-2">Comments (${getCounts(
    commentsInformation,
  )})</h4>
              <ul class=" list-group list-unstyled comment-lists "></ul>
              <h3 class=" my-3" add-comment>Add a comment</h3>
              <form class="align-items-start d-flex flex-column align-items-start" action="#">
                <input
                    id="commenter-name"
                    type="text"
                    name="name"
                    placeholder="Your name"
                /><br />
                <textarea
                    id="commenter-insight"
                    type="text"
                    name="commenter-insight"
                    placeholder="Your insights"
                    rows="3" 
                    cols="48"
                ></textarea><br />
                <input id="submit-btn" type="submit" value="Comment" />
            </form>
        </div>
      `;
  const ul = document.querySelector('.comment-lists');
  addItemToList(ul, commentsInformation);

  const closeButton = document.querySelector('.popup-close');
  closeButton.addEventListener('click', () => modalComment.classList.remove('active'));
}
