import {
  lookupFetch,
  fetchComments,
  showCommentsInApi,
} from '../api/showApi.js';

const addComments = async (ul, arr) => {
  arr.forEach((element) => {
    ul.innerHTML += `<li class="list-items-comments my-1">${element.creation_date} ${element.username}: ${element.comment}</li>`;
  });
};

export const getCounts = (arr) => arr.length;

const counterIncrement = (commentTitle, commentsInfo) => {
  const commentValue = getCounts(commentsInfo) + 1;
  commentTitle.textContent = `Comments (${commentValue})`;
};

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
                <div class="popup-close">&times;</div>
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
              <ul class="comment-lists list-group list-unstyled"></ul>
              <h5 class="add-comment my-4">Add a comment</h5>
            <form class="d-flex flex-column align-items-start" action="#">
                <input
                    class="form-control"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name"
                /><br />
                <textarea
                    class="form-control"
                    type="text"
                    id="insight"
                    name="insight"
                    placeholder="Your insights"
                    rows="3" 
                    cols="48"
                ></textarea><br />
                <input class="btn btn-dark" type="submit" id="submit-btn" value="Comment" />
            </form>
        </div>
      `;
  const ul = document.querySelector('.comment-lists');
  addComments(ul, commentsInformation);

  const closeButton = document.querySelector('.popup-close');
  closeButton.addEventListener('click', () => modalComment.classList.remove('active'));

  const commenterName = document.querySelector('#name');
  const UserInsight = document.querySelector('#insight');
  const commentForm = document.querySelector('form');
  const commentTitle = document.querySelector('.comments-title');
  commentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    showCommentsInApi(showId, commenterName.value, UserInsight.value);
    addComments(ul, [
      {
        creation_date: '2022-08-30',
        username: commenterName.value,
        comment: UserInsight.value,
      },
    ]);

    commenterName.value = '';
    UserInsight.value = '';
    counterIncrement(commentTitle, commentsInformation);
  });
}
