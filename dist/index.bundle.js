(self["webpackChunkset_up_project_with_webpack"] = self["webpackChunkset_up_project_with_webpack"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/

module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _assets_css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/css/style.css */ "./src/assets/css/style.css");
/* harmony import */ var _modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api/showApi.js */ "./src/modules/api/showApi.js");
/* harmony import */ var _modules_home_page_show_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/home-page/show.js */ "./src/modules/home-page/show.js");
/* harmony import */ var _modules_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/api/involmentApi.js */ "./src/modules/api/involmentApi.js");
/* harmony import */ var _modules_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_modules_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_3__);




const moviesShows = [];
document.addEventListener('DOMContentLoaded', async () => {
  moviesShows.push(await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(90), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(91), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(92), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(93), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(94), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(95), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(96), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(1), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(98), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(99), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(11), await (0,_modules_api_showApi_js__WEBPACK_IMPORTED_MODULE_1__.lookupFetch)(111));
  await (0,_modules_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_3__.createMoviesApp)();
  await (0,_modules_home_page_show_js__WEBPACK_IMPORTED_MODULE_2__.displayShows)(moviesShows);
});

/***/ }),

/***/ "./src/modules/api/involmentApi.js":
/*!*****************************************!*\
  !*** ./src/modules/api/involmentApi.js ***!
  \*****************************************/
/***/ ((module) => {

const mainUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi';

const createMoviesApp = async () => {
  const response = await fetch(`${mainUrl}/apps`, {
    method: 'POST'
  });
  const moviesAppId = await response.text();
  if (!localStorage.getItem('appId')) localStorage.setItem('appId', moviesAppId);
};

const likeMovie = async movieId => {
  const appId = localStorage.getItem('appId');
  const response = await fetch(`${mainUrl}/apps/${appId}/likes`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: movieId
    })
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

module.exports = {
  createMoviesApp,
  likeMovie,
  getLikes
};

/***/ }),

/***/ "./src/modules/api/showApi.js":
/*!************************************!*\
  !*** ./src/modules/api/showApi.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fetchComments": () => (/* binding */ fetchComments),
/* harmony export */   "lookupFetch": () => (/* binding */ lookupFetch),
/* harmony export */   "showCommentsInApi": () => (/* binding */ showCommentsInApi)
/* harmony export */ });
const mainUrl = 'https://api.tvmaze.com';
const involvementMainUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps';
const apiId = 'iagFZ6Xd4kMX1u8bmGvZ';

const lookupFetch = async showId => {
  const url = `${mainUrl}/shows/${showId}`;
  let show = await fetch(url);
  show = await show.json();
  return show;
};

const fetchComments = async showId => {
  const url = `${involvementMainUrl}/${apiId}/comments?item_id=${showId}`;
  let comments = await fetch(url);
  comments = await comments.json();
  return comments;
};

const showCommentsInApi = async (showId, name, insight) => {
  const url = `${involvementMainUrl}/${apiId}/comments`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      item_id: `${showId}`,
      username: name,
      comment: insight
    })
  });
  return response.json();
};



/***/ }),

/***/ "./src/modules/comment/commentPopup.js":
/*!*********************************************!*\
  !*** ./src/modules/comment/commentPopup.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ showCommentPage),
/* harmony export */   "getCounts": () => (/* binding */ getCounts)
/* harmony export */ });
/* harmony import */ var _api_showApi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/showApi.js */ "./src/modules/api/showApi.js");


const addComments = async (ul, arr) => {
  arr.forEach(element => {
    ul.innerHTML += `<li class="list-items-comments my-1">${element.creation_date} ${element.username}: ${element.comment}</li>`;
  });
};

const getCounts = arr => arr.length;

const counterIncrement = (commentTitle, commentsInfo) => {
  const commentValue = getCounts(commentsInfo) + 1;
  commentTitle.textContent = `Comments (${commentValue})`;
};

async function showCommentPage(showId) {
  const showInformation = await (0,_api_showApi_js__WEBPACK_IMPORTED_MODULE_0__.lookupFetch)(showId);
  const commentsInformation = await (0,_api_showApi_js__WEBPACK_IMPORTED_MODULE_0__.fetchComments)(showId);
  const modalComment = document.querySelector('.modal-comment');
  const overlayModal = document.querySelector('#overlay');
  modalComment.classList.add('active');
  overlayModal.classList.add('active');
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
                  <h5>Release Date : ${showInformation.premiered.split('-')[0]}</h5>
                  <h5>Rating : ${showInformation.rating.average}</h5>
                </div>
              </div>
              <h4 class="comments-title my-2">Comments (${getCounts(commentsInformation)})</h4>
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
  closeButton.addEventListener('click', () => modalComment.classList.remove('active'), overlayModal.classList.remove('active'));
  const commenterName = document.querySelector('#name');
  const UserInsight = document.querySelector('#insight');
  const commentForm = document.querySelector('form');
  const commentTitle = document.querySelector('.comments-title');
  commentForm.addEventListener('submit', async e => {
    e.preventDefault();
    (0,_api_showApi_js__WEBPACK_IMPORTED_MODULE_0__.showCommentsInApi)(showId, commenterName.value, UserInsight.value);
    addComments(ul, [{
      creation_date: '2022-08-30',
      username: commenterName.value,
      comment: UserInsight.value
    }]);
    commenterName.value = '';
    UserInsight.value = '';
    counterIncrement(commentTitle, commentsInformation);
  });
}

/***/ }),

/***/ "./src/modules/home-page/show.js":
/*!***************************************!*\
  !*** ./src/modules/home-page/show.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "countItems": () => (/* binding */ countItems),
/* harmony export */   "displayShows": () => (/* binding */ displayShows)
/* harmony export */ });
/* harmony import */ var _comment_commentPopup_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../comment/commentPopup.js */ "./src/modules/comment/commentPopup.js");
/* harmony import */ var _api_involmentApi_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/involmentApi.js */ "./src/modules/api/involmentApi.js");
/* harmony import */ var _api_involmentApi_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_1__);



class ShowMoviesContainer {
  constructor(showImage, showName, showLikes, showId) {
    this.showImage = showImage;
    this.showName = showName;
    this.showLikes = showLikes;
    this.updateLikes = this.updateLikes.bind(this);
    this.updateLikes.numLikesDisplay = null;
    this.showId = showId;
  } // update number of likes


  updateLikes() {
    this.numLikesDisplay.innerText = this.showLikes === 1 ? `${this.showLikes} Like` : `${this.showLikes} Likes`;
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
      const status = await (0,_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_1__.likeMovie)(this.showId);

      if (status === 201) {
        this.showLikes += 1;
        this.updateLikes();
      }
    });
    const divInfo = document.createElement('div');
    divInfo.classList.add('d-flex', 'justify-content-between', 'align-items-baseline', 'mt-2');
    divInfo.append(showTitle, likeButton);
    const commentButton = document.createElement('button');
    commentButton.classList.add('mt-2');
    commentButton.innerText = 'Comment';
    commentButton.addEventListener('click', () => (0,_comment_commentPopup_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.showId));
    container.append(showImg, divInfo, numLikes, commentButton);
    showsPanel.append(container);
    this.updateLikes();
  }

}

const displayShows = async shows => {
  const result = await (0,_api_involmentApi_js__WEBPACK_IMPORTED_MODULE_1__.getLikes)();
  shows.forEach(show => {
    let numLikes = 0; // counter number of likes

    numLikes = result.likes.find(item => item.item_id === show.id) ? result.likes.find(item => item.item_id === show.id).likes : 0;
    const showMoviesContainer = new ShowMoviesContainer(show.image.original, show.name, numLikes, show.id);
    showMoviesContainer.displayMovies();
  });
};

const countItems = movies => movies.length;



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".nav-div {\r\n  margin-top: 32px;\r\n}\r\n\r\n.nav-bar ul li a {\r\n  margin-right: 152px;\r\n}\r\n\r\n.logo-img {\r\n  width: 105px;\r\n  margin-left: 180px;\r\n  margin-right: 105px;\r\n}\r\n\r\n.movies {\r\n  margin-left: 0;\r\n}\r\n\r\n.w-200px {\r\n  width: 200px;\r\n}\r\n\r\n.w-750px {\r\n  width: 750px;\r\n}\r\n\r\n/* Comments popup */\r\n.modal-comment {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.active {\r\n  display: block;\r\n}\r\n\r\n#overlay {\r\n  backdrop-filter: blur(8px);\r\n  position: fixed;\r\n  opacity: 0;\r\n  transition: 200ms ease-in-out;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 13;\r\n  display: none;\r\n  pointer-events: all;\r\n}\r\n\r\n#overlay.active {\r\n  display: block;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 1% auto;\r\n  padding: 2% 5%;\r\n  border: 1px solid #888;\r\n  width: 60%;\r\n}\r\n\r\n.popup-image {\r\n  border-radius: 5%;\r\n  width: 50%;\r\n}\r\n\r\n.popup-close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-close:hover,\r\n.popup-close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-items-comments {\r\n  text-align: start !important;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 1% auto;\r\n    padding: 2% 5%;\r\n    border: 1px solid #888;\r\n    max-width: 100%;\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/assets/css/style.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,eAAe;EACf,YAAY;EACZ,OAAO;EACP,MAAM;EACN,WAAW;EACX,YAAY;EACZ,cAAc;EACd,oCAAoC;AACtC;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,0BAA0B;EAC1B,eAAe;EACf,UAAU;EACV,6BAA6B;EAC7B,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,oCAAoC;EACpC,WAAW;EACX,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,yBAAyB;EACzB,eAAe;EACf,cAAc;EACd,sBAAsB;EACtB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,WAAW;EACX,eAAe;EACf,iBAAiB;AACnB;;AAEA;;EAEE,YAAY;EACZ,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,4BAA4B;AAC9B;;AAEA;EACE;IACE,yBAAyB;IACzB,eAAe;IACf,cAAc;IACd,sBAAsB;IACtB,eAAe;EACjB;AACF","sourcesContent":[".nav-div {\r\n  margin-top: 32px;\r\n}\r\n\r\n.nav-bar ul li a {\r\n  margin-right: 152px;\r\n}\r\n\r\n.logo-img {\r\n  width: 105px;\r\n  margin-left: 180px;\r\n  margin-right: 105px;\r\n}\r\n\r\n.movies {\r\n  margin-left: 0;\r\n}\r\n\r\n.w-200px {\r\n  width: 200px;\r\n}\r\n\r\n.w-750px {\r\n  width: 750px;\r\n}\r\n\r\n/* Comments popup */\r\n.modal-comment {\r\n  display: none;\r\n  position: fixed;\r\n  z-index: 100;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow: auto;\r\n  background-color: rgba(0, 0, 0, 0.4);\r\n}\r\n\r\n.active {\r\n  display: block;\r\n}\r\n\r\n#overlay {\r\n  backdrop-filter: blur(8px);\r\n  position: fixed;\r\n  opacity: 0;\r\n  transition: 200ms ease-in-out;\r\n  top: 0;\r\n  left: 0;\r\n  right: 0;\r\n  bottom: 0;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n  z-index: 13;\r\n  display: none;\r\n  pointer-events: all;\r\n}\r\n\r\n#overlay.active {\r\n  display: block;\r\n}\r\n\r\n.modal-content {\r\n  background-color: #fefefe;\r\n  margin: 1% auto;\r\n  padding: 2% 5%;\r\n  border: 1px solid #888;\r\n  width: 60%;\r\n}\r\n\r\n.popup-image {\r\n  border-radius: 5%;\r\n  width: 50%;\r\n}\r\n\r\n.popup-close {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 10px;\r\n  font-size: 28px;\r\n  font-weight: bold;\r\n}\r\n\r\n.popup-close:hover,\r\n.popup-close:focus {\r\n  color: black;\r\n  text-decoration: none;\r\n  cursor: pointer;\r\n}\r\n\r\n.list-items-comments {\r\n  text-align: start !important;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .modal-content {\r\n    background-color: #fefefe;\r\n    margin: 1% auto;\r\n    padding: 2% 5%;\r\n    border: 1px solid #888;\r\n    max-width: 100%;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/style.css":
/*!**********************************!*\
  !*** ./src/assets/css/style.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2pGOztBQUVBOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYTtBQUNiOztBQUVBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELElBQUk7O0FBRUo7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUNyRWE7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9tb2R1bGVzL2FwaS9pbnZvbG1lbnRBcGkuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvYXBpL3Nob3dBcGkuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvY29tbWVudC9jb21tZW50UG9wdXAuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL21vZHVsZXMvaG9tZS1wYWdlL3Nob3cuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL3NyYy9hc3NldHMvY3NzL3N0eWxlLmNzcz9jZGQ2Iiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3NldC11cC1wcm9qZWN0LXdpdGgtd2VicGFjay8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9zZXQtdXAtcHJvamVjdC13aXRoLXdlYnBhY2svLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vc2V0LXVwLXByb2plY3Qtd2l0aC13ZWJwYWNrLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiaW1wb3J0ICcuL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzJztcclxuaW1wb3J0IHsgbG9va3VwRmV0Y2ggfSBmcm9tICcuL21vZHVsZXMvYXBpL3Nob3dBcGkuanMnO1xyXG5pbXBvcnQgeyBkaXNwbGF5U2hvd3MsIGNvdW50SXRlbXMgfSBmcm9tICcuL21vZHVsZXMvaG9tZS1wYWdlL3Nob3cuanMnO1xyXG5pbXBvcnQgeyBjcmVhdGVNb3ZpZXNBcHAgfSBmcm9tICcuL21vZHVsZXMvYXBpL2ludm9sbWVudEFwaS5qcyc7XHJcblxyXG5jb25zdCBtb3ZpZXNTaG93cyA9IFtdO1xyXG5cclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIGFzeW5jICgpID0+IHtcclxuICBtb3ZpZXNTaG93cy5wdXNoKFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTApLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTEpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTIpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTMpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTQpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTUpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goOTYpLFxyXG4gICAgYXdhaXQgbG9va3VwRmV0Y2goMSksXHJcbiAgICBhd2FpdCBsb29rdXBGZXRjaCg5OCksXHJcbiAgICBhd2FpdCBsb29rdXBGZXRjaCg5OSksXHJcbiAgICBhd2FpdCBsb29rdXBGZXRjaCgxMSksXHJcbiAgICBhd2FpdCBsb29rdXBGZXRjaCgxMTEpLFxyXG4gICk7XHJcbiAgYXdhaXQgY3JlYXRlTW92aWVzQXBwKCk7XHJcbiAgYXdhaXQgZGlzcGxheVNob3dzKG1vdmllc1Nob3dzKTtcclxufSk7XHJcbiIsImNvbnN0IG1haW5VcmwgPSAnaHR0cHM6Ly91cy1jZW50cmFsMS1pbnZvbHZlbWVudC1hcGkuY2xvdWRmdW5jdGlvbnMubmV0L2NhcHN0b25lQXBpJztcblxuY29uc3QgY3JlYXRlTW92aWVzQXBwID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke21haW5Vcmx9L2FwcHNgLCB7IG1ldGhvZDogJ1BPU1QnIH0pO1xuICBjb25zdCBtb3ZpZXNBcHBJZCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgaWYgKCFsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwcElkJywgbW92aWVzQXBwSWQpO1xufTtcblxuY29uc3QgbGlrZU1vdmllID0gYXN5bmMgKG1vdmllSWQpID0+IHtcbiAgY29uc3QgYXBwSWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYXBwSWQnKTtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHttYWluVXJsfS9hcHBzLyR7YXBwSWR9L2xpa2VzYCwge1xuICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgIGhlYWRlcnM6IHtcbiAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgfSxcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICBpdGVtX2lkOiBtb3ZpZUlkLFxuICAgIH0pLFxuICB9KTtcbiAgY29uc3Qgc3RhdHVzID0gYXdhaXQgcmVzcG9uc2Uuc3RhdHVzO1xuICByZXR1cm4gc3RhdHVzO1xufTtcblxuY29uc3QgZ2V0TGlrZXMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IGFwcElkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcElkJyk7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7bWFpblVybH0vYXBwcy8ke2FwcElkfS9saWtlc2ApO1xuICBsZXQgbGlrZXMgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gIGlmIChsaWtlcy5sZW5ndGggPT09IDApIGxpa2VzID0gJ1tdJztcbiAgcmV0dXJuIEpTT04ucGFyc2UoYHtcImxpa2VzXCI6ICR7bGlrZXN9fWApO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7IGNyZWF0ZU1vdmllc0FwcCwgbGlrZU1vdmllLCBnZXRMaWtlcyB9O1xuIiwiY29uc3QgbWFpblVybCA9ICdodHRwczovL2FwaS50dm1hemUuY29tJztcbmNvbnN0IGludm9sdmVtZW50TWFpblVybCA9ICdodHRwczovL3VzLWNlbnRyYWwxLWludm9sdmVtZW50LWFwaS5jbG91ZGZ1bmN0aW9ucy5uZXQvY2Fwc3RvbmVBcGkvYXBwcyc7XG5jb25zdCBhcGlJZCA9ICdpYWdGWjZYZDRrTVgxdThibUd2Wic7XG5jb25zdCBsb29rdXBGZXRjaCA9IGFzeW5jIChzaG93SWQpID0+IHtcbiAgY29uc3QgdXJsID0gYCR7bWFpblVybH0vc2hvd3MvJHtzaG93SWR9YDtcbiAgbGV0IHNob3cgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBzaG93ID0gYXdhaXQgc2hvdy5qc29uKCk7XG4gIHJldHVybiBzaG93O1xufTtcbmNvbnN0IGZldGNoQ29tbWVudHMgPSBhc3luYyAoc2hvd0lkKSA9PiB7XG4gIGNvbnN0IHVybCA9IGAke2ludm9sdmVtZW50TWFpblVybH0vJHthcGlJZH0vY29tbWVudHM/aXRlbV9pZD0ke3Nob3dJZH1gO1xuICBsZXQgY29tbWVudHMgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICBjb21tZW50cyA9IGF3YWl0IGNvbW1lbnRzLmpzb24oKTtcbiAgcmV0dXJuIGNvbW1lbnRzO1xufTtcbmNvbnN0IHNob3dDb21tZW50c0luQXBpID0gYXN5bmMgKHNob3dJZCwgbmFtZSwgaW5zaWdodCkgPT4ge1xuICBjb25zdCB1cmwgPSBgJHtpbnZvbHZlbWVudE1haW5Vcmx9LyR7YXBpSWR9L2NvbW1lbnRzYDtcbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgIH0sXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgaXRlbV9pZDogYCR7c2hvd0lkfWAsXG4gICAgICB1c2VybmFtZTogbmFtZSxcbiAgICAgIGNvbW1lbnQ6IGluc2lnaHQsXG4gICAgfSksXG4gIH0pO1xuICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xufTtcbmV4cG9ydCB7IGxvb2t1cEZldGNoLCBmZXRjaENvbW1lbnRzLCBzaG93Q29tbWVudHNJbkFwaSB9O1xuIiwiaW1wb3J0IHtcclxuICBsb29rdXBGZXRjaCxcclxuICBmZXRjaENvbW1lbnRzLFxyXG4gIHNob3dDb21tZW50c0luQXBpLFxyXG59IGZyb20gJy4uL2FwaS9zaG93QXBpLmpzJztcclxuXHJcbmNvbnN0IGFkZENvbW1lbnRzID0gYXN5bmMgKHVsLCBhcnIpID0+IHtcclxuICBhcnIuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xyXG4gICAgdWwuaW5uZXJIVE1MICs9IGA8bGkgY2xhc3M9XCJsaXN0LWl0ZW1zLWNvbW1lbnRzIG15LTFcIj4ke2VsZW1lbnQuY3JlYXRpb25fZGF0ZX0gJHtlbGVtZW50LnVzZXJuYW1lfTogJHtlbGVtZW50LmNvbW1lbnR9PC9saT5gO1xyXG4gIH0pO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvdW50cyA9IChhcnIpID0+IGFyci5sZW5ndGg7XHJcblxyXG5jb25zdCBjb3VudGVySW5jcmVtZW50ID0gKGNvbW1lbnRUaXRsZSwgY29tbWVudHNJbmZvKSA9PiB7XHJcbiAgY29uc3QgY29tbWVudFZhbHVlID0gZ2V0Q291bnRzKGNvbW1lbnRzSW5mbykgKyAxO1xyXG4gIGNvbW1lbnRUaXRsZS50ZXh0Q29udGVudCA9IGBDb21tZW50cyAoJHtjb21tZW50VmFsdWV9KWA7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBzaG93Q29tbWVudFBhZ2Uoc2hvd0lkKSB7XHJcbiAgY29uc3Qgc2hvd0luZm9ybWF0aW9uID0gYXdhaXQgbG9va3VwRmV0Y2goc2hvd0lkKTtcclxuICBjb25zdCBjb21tZW50c0luZm9ybWF0aW9uID0gYXdhaXQgZmV0Y2hDb21tZW50cyhzaG93SWQpO1xyXG4gIGNvbnN0IG1vZGFsQ29tbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb21tZW50Jyk7XHJcbiAgY29uc3Qgb3ZlcmxheU1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcclxuICBtb2RhbENvbW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XHJcbiAgb3ZlcmxheU1vZGFsLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG5cclxuICBtb2RhbENvbW1lbnQuaW5uZXJIVE1MID0gYFxyXG4gICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3M9XCJcclxuICAgICAgICAgICAgICAgIG1vZGFsLWNvbnRlbnRcclxuICAgICAgICAgICAgICAgIGQtZmxleFxyXG4gICAgICAgICAgICAgICAgZmxleC1jb2x1bW5cclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zLWNlbnRlclxyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50LWNlbnRlclxyXG4gICAgICAgICAgICAgIFwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZC1mbGV4IGZsZXgtcm93IHctMTAwIGp1c3RpZnktY29udGVudC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgc3JjPVwiJHtzaG93SW5mb3JtYXRpb24uaW1hZ2UubWVkaXVtfVwiXHJcbiAgICAgICAgICAgICAgICAgIGFsdD1cInNob3dzXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJwb3B1cC1pbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWNsb3NlXCI+JnRpbWVzOzwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxoMyBjbGFzcz1cInBvcHVwLXRpdGxlIG15LTRcIj4ke3Nob3dJbmZvcm1hdGlvbi5uYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8gZC1mbGV4IGZsZXgtcm93IG15LTIgdy03NVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhdGVnb3JpZXMgZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0IHctNTBcIj5cclxuICAgICAgICAgICAgICAgICAgPGg1PkdlbnJlIDogJHtzaG93SW5mb3JtYXRpb24uZ2VucmVzWzBdfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5MYW5ndWFnZSA6ICR7c2hvd0luZm9ybWF0aW9uLmxhbmd1YWdlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXRlZ29yaWVzIGQtZmxleCBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCB3LTUwXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoNT5SZWxlYXNlIERhdGUgOiAke1xyXG4gIHNob3dJbmZvcm1hdGlvbi5wcmVtaWVyZWQuc3BsaXQoJy0nKVswXVxyXG59PC9oNT5cclxuICAgICAgICAgICAgICAgICAgPGg1PlJhdGluZyA6ICR7c2hvd0luZm9ybWF0aW9uLnJhdGluZy5hdmVyYWdlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8aDQgY2xhc3M9XCJjb21tZW50cy10aXRsZSBteS0yXCI+Q29tbWVudHMgKCR7Z2V0Q291bnRzKFxyXG4gICAgY29tbWVudHNJbmZvcm1hdGlvbixcclxuICApfSk8L2g0PlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cImNvbW1lbnQtbGlzdHMgbGlzdC1ncm91cCBsaXN0LXVuc3R5bGVkXCI+PC91bD5cclxuICAgICAgICAgICAgICA8aDUgY2xhc3M9XCJhZGQtY29tbWVudCBteS00XCI+QWRkIGEgY29tbWVudDwvaDU+XHJcbiAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZC1mbGV4IGZsZXgtY29sdW1uIGFsaWduLWl0ZW1zLXN0YXJ0XCIgYWN0aW9uPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiXHJcbiAgICAgICAgICAgICAgICAvPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICBpZD1cImluc2lnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJpbnNpZ2h0XCJcclxuICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgaW5zaWdodHNcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJvd3M9XCIzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgY29scz1cIjQ4XCJcclxuICAgICAgICAgICAgICAgID48L3RleHRhcmVhPjxiciAvPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwiYnRuIGJ0bi1kYXJrXCIgdHlwZT1cInN1Ym1pdFwiIGlkPVwic3VibWl0LWJ0blwiIHZhbHVlPVwiQ29tbWVudFwiIC8+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICBjb25zdCB1bCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50LWxpc3RzJyk7XHJcbiAgYWRkQ29tbWVudHModWwsIGNvbW1lbnRzSW5mb3JtYXRpb24pO1xyXG5cclxuICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wb3B1cC1jbG9zZScpO1xyXG4gIGNsb3NlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gbW9kYWxDb21tZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpLFxyXG4gICAgb3ZlcmxheU1vZGFsLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpKTtcclxuXHJcbiAgY29uc3QgY29tbWVudGVyTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYW1lJyk7XHJcbiAgY29uc3QgVXNlckluc2lnaHQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5zaWdodCcpO1xyXG4gIGNvbnN0IGNvbW1lbnRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xyXG4gIGNvbnN0IGNvbW1lbnRUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb21tZW50cy10aXRsZScpO1xyXG4gIGNvbW1lbnRGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGFzeW5jIChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBzaG93Q29tbWVudHNJbkFwaShzaG93SWQsIGNvbW1lbnRlck5hbWUudmFsdWUsIFVzZXJJbnNpZ2h0LnZhbHVlKTtcclxuICAgIGFkZENvbW1lbnRzKHVsLCBbXHJcbiAgICAgIHtcclxuICAgICAgICBjcmVhdGlvbl9kYXRlOiAnMjAyMi0wOC0zMCcsXHJcbiAgICAgICAgdXNlcm5hbWU6IGNvbW1lbnRlck5hbWUudmFsdWUsXHJcbiAgICAgICAgY29tbWVudDogVXNlckluc2lnaHQudmFsdWUsXHJcbiAgICAgIH0sXHJcbiAgICBdKTtcclxuXHJcbiAgICBjb21tZW50ZXJOYW1lLnZhbHVlID0gJyc7XHJcbiAgICBVc2VySW5zaWdodC52YWx1ZSA9ICcnO1xyXG4gICAgY291bnRlckluY3JlbWVudChjb21tZW50VGl0bGUsIGNvbW1lbnRzSW5mb3JtYXRpb24pO1xyXG4gIH0pO1xyXG59XHJcbiIsImltcG9ydCBzaG93Q29tbWVudFBhZ2UgZnJvbSAnLi4vY29tbWVudC9jb21tZW50UG9wdXAuanMnO1xuaW1wb3J0IHsgbGlrZU1vdmllLCBnZXRMaWtlcyB9IGZyb20gJy4uL2FwaS9pbnZvbG1lbnRBcGkuanMnO1xuXG5jbGFzcyBTaG93TW92aWVzQ29udGFpbmVyIHtcbiAgY29uc3RydWN0b3Ioc2hvd0ltYWdlLCBzaG93TmFtZSwgc2hvd0xpa2VzLCBzaG93SWQpIHtcbiAgICB0aGlzLnNob3dJbWFnZSA9IHNob3dJbWFnZTtcbiAgICB0aGlzLnNob3dOYW1lID0gc2hvd05hbWU7XG4gICAgdGhpcy5zaG93TGlrZXMgPSBzaG93TGlrZXM7XG4gICAgdGhpcy51cGRhdGVMaWtlcyA9IHRoaXMudXBkYXRlTGlrZXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLnVwZGF0ZUxpa2VzLm51bUxpa2VzRGlzcGxheSA9IG51bGw7XG4gICAgdGhpcy5zaG93SWQgPSBzaG93SWQ7XG4gIH1cblxuICAvLyB1cGRhdGUgbnVtYmVyIG9mIGxpa2VzXG4gIHVwZGF0ZUxpa2VzKCkge1xuICAgIHRoaXMubnVtTGlrZXNEaXNwbGF5LmlubmVyVGV4dCA9IHRoaXMuc2hvd0xpa2VzID09PSAxXG4gICAgICA/IGAke3RoaXMuc2hvd0xpa2VzfSBMaWtlYFxuICAgICAgOiBgJHt0aGlzLnNob3dMaWtlc30gTGlrZXNgO1xuICB9XG5cbiAgZGlzcGxheU1vdmllcygpIHtcbiAgICBjb25zdCBzaG93c1BhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vdmllcy1kaXNwbGF5Jyk7XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2NvbC00JywgJ21iLTQnKTtcbiAgICBjb25zdCBzaG93SW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgc2hvd0ltZy5zcmMgPSB0aGlzLnNob3dJbWFnZTtcbiAgICBzaG93SW1nLmNsYXNzTGlzdC5hZGQoJ3ctMTAwJywgJ2gtYXV0bycpO1xuICAgIGNvbnN0IHNob3dUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICBzaG93VGl0bGUuY2xhc3NMaXN0LmFkZCgnbWItMCcpO1xuICAgIHNob3dUaXRsZS5pbm5lclRleHQgPSB0aGlzLnNob3dOYW1lO1xuICAgIGNvbnN0IG51bUxpa2VzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIG51bUxpa2VzLmNsYXNzTGlzdC5hZGQoJ3RleHQtZW5kJywgJ21iLTAnKTtcbiAgICBudW1MaWtlcy5pbm5lclRleHQgPSB0aGlzLnNob3dMaWtlcztcbiAgICB0aGlzLm51bUxpa2VzRGlzcGxheSA9IG51bUxpa2VzO1xuICAgIGNvbnN0IGxpa2VCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlrZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdmYScsICdmYS1oZWFydCcpO1xuICAgIGxpa2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBzdGF0dXMgPSBhd2FpdCBsaWtlTW92aWUodGhpcy5zaG93SWQpO1xuICAgICAgaWYgKHN0YXR1cyA9PT0gMjAxKSB7XG4gICAgICAgIHRoaXMuc2hvd0xpa2VzICs9IDE7XG4gICAgICAgIHRoaXMudXBkYXRlTGlrZXMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBkaXZJbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZGl2SW5mby5jbGFzc0xpc3QuYWRkKFxuICAgICAgJ2QtZmxleCcsXG4gICAgICAnanVzdGlmeS1jb250ZW50LWJldHdlZW4nLFxuICAgICAgJ2FsaWduLWl0ZW1zLWJhc2VsaW5lJyxcbiAgICAgICdtdC0yJyxcbiAgICApO1xuICAgIGRpdkluZm8uYXBwZW5kKHNob3dUaXRsZSwgbGlrZUJ1dHRvbik7XG4gICAgY29uc3QgY29tbWVudEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGNvbW1lbnRCdXR0b24uY2xhc3NMaXN0LmFkZCgnbXQtMicpO1xuICAgIGNvbW1lbnRCdXR0b24uaW5uZXJUZXh0ID0gJ0NvbW1lbnQnO1xuICAgIGNvbW1lbnRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBzaG93Q29tbWVudFBhZ2UodGhpcy5zaG93SWQpKTtcbiAgICBjb250YWluZXIuYXBwZW5kKHNob3dJbWcsIGRpdkluZm8sIG51bUxpa2VzLCBjb21tZW50QnV0dG9uKTtcbiAgICBzaG93c1BhbmVsLmFwcGVuZChjb250YWluZXIpO1xuICAgIHRoaXMudXBkYXRlTGlrZXMoKTtcbiAgfVxufVxuY29uc3QgZGlzcGxheVNob3dzID0gYXN5bmMgKHNob3dzKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldExpa2VzKCk7XG4gIHNob3dzLmZvckVhY2goKHNob3cpID0+IHtcbiAgICBsZXQgbnVtTGlrZXMgPSAwO1xuICAgIC8vIGNvdW50ZXIgbnVtYmVyIG9mIGxpa2VzXG4gICAgbnVtTGlrZXMgPSByZXN1bHQubGlrZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBzaG93LmlkKVxuICAgICAgPyByZXN1bHQubGlrZXMuZmluZCgoaXRlbSkgPT4gaXRlbS5pdGVtX2lkID09PSBzaG93LmlkKS5saWtlc1xuICAgICAgOiAwO1xuICAgIGNvbnN0IHNob3dNb3ZpZXNDb250YWluZXIgPSBuZXcgU2hvd01vdmllc0NvbnRhaW5lcihcbiAgICAgIHNob3cuaW1hZ2Uub3JpZ2luYWwsXG4gICAgICBzaG93Lm5hbWUsXG4gICAgICBudW1MaWtlcyxcbiAgICAgIHNob3cuaWQsXG4gICAgKTtcbiAgICBzaG93TW92aWVzQ29udGFpbmVyLmRpc3BsYXlNb3ZpZXMoKTtcbiAgfSk7XG59O1xuXG5jb25zdCBjb3VudEl0ZW1zID0gKG1vdmllcykgPT4gbW92aWVzLmxlbmd0aDtcblxuZXhwb3J0IHsgY291bnRJdGVtcywgZGlzcGxheVNob3dzIH07XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5uYXYtZGl2IHtcXHJcXG4gIG1hcmdpbi10b3A6IDMycHg7XFxyXFxufVxcclxcblxcclxcbi5uYXYtYmFyIHVsIGxpIGEge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxNTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxvZ28taW1nIHtcXHJcXG4gIHdpZHRoOiAxMDVweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxODBweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTA1cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZXMge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDA7XFxyXFxufVxcclxcblxcclxcbi53LTIwMHB4IHtcXHJcXG4gIHdpZHRoOiAyMDBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnctNzUwcHgge1xcclxcbiAgd2lkdGg6IDc1MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBDb21tZW50cyBwb3B1cCAqL1xcclxcbi5tb2RhbC1jb21tZW50IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogYXV0bztcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC40KTtcXHJcXG59XFxyXFxuXFxyXFxuLmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuI292ZXJsYXkge1xcclxcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDhweCk7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogMjAwbXMgZWFzZS1pbi1vdXQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgcmlnaHQ6IDA7XFxyXFxuICBib3R0b206IDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxuICB6LWluZGV4OiAxMztcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICBwb2ludGVyLWV2ZW50czogYWxsO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheS5hY3RpdmUge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5tb2RhbC1jb250ZW50IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICBtYXJnaW46IDElIGF1dG87XFxyXFxuICBwYWRkaW5nOiAyJSA1JTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICB3aWR0aDogNjAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtaW1hZ2Uge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNSU7XFxyXFxuICB3aWR0aDogNTAlO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2xvc2Uge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAwO1xcclxcbiAgcmlnaHQ6IDEwcHg7XFxyXFxuICBmb250LXNpemU6IDI4cHg7XFxyXFxuICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxuLnBvcHVwLWNsb3NlOmhvdmVyLFxcclxcbi5wb3B1cC1jbG9zZTpmb2N1cyB7XFxyXFxuICBjb2xvcjogYmxhY2s7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saXN0LWl0ZW1zLWNvbW1lbnRzIHtcXHJcXG4gIHRleHQtYWxpZ246IHN0YXJ0ICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XFxyXFxuICAubW9kYWwtY29udGVudCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZWZlZmU7XFxyXFxuICAgIG1hcmdpbjogMSUgYXV0bztcXHJcXG4gICAgcGFkZGluZzogMiUgNSU7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4ODg7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Fzc2V0cy9jc3Mvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBLG1CQUFtQjtBQUNuQjtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLE9BQU87RUFDUCxNQUFNO0VBQ04sV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixlQUFlO0VBQ2YsVUFBVTtFQUNWLDZCQUE2QjtFQUM3QixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1Qsb0NBQW9DO0VBQ3BDLFdBQVc7RUFDWCxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztFQUNkLHNCQUFzQjtFQUN0QixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLE1BQU07RUFDTixXQUFXO0VBQ1gsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0lBQ2YsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm5hdi1kaXYge1xcclxcbiAgbWFyZ2luLXRvcDogMzJweDtcXHJcXG59XFxyXFxuXFxyXFxuLm5hdi1iYXIgdWwgbGkgYSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDE1MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubG9nby1pbWcge1xcclxcbiAgd2lkdGg6IDEwNXB4O1xcclxcbiAgbWFyZ2luLWxlZnQ6IDE4MHB4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAxMDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllcyB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnctMjAwcHgge1xcclxcbiAgd2lkdGg6IDIwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4udy03NTBweCB7XFxyXFxuICB3aWR0aDogNzUwcHg7XFxyXFxufVxcclxcblxcclxcbi8qIENvbW1lbnRzIHBvcHVwICovXFxyXFxuLm1vZGFsLWNvbW1lbnQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHotaW5kZXg6IDEwMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjQpO1xcclxcbn1cXHJcXG5cXHJcXG4uYWN0aXZlIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4jb3ZlcmxheSB7XFxyXFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoOHB4KTtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiAyMDBtcyBlYXNlLWluLW91dDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICByaWdodDogMDtcXHJcXG4gIGJvdHRvbTogMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcXHJcXG4gIHotaW5kZXg6IDEzO1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHBvaW50ZXItZXZlbnRzOiBhbGw7XFxyXFxufVxcclxcblxcclxcbiNvdmVybGF5LmFjdGl2ZSB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vZGFsLWNvbnRlbnQge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gIG1hcmdpbjogMSUgYXV0bztcXHJcXG4gIHBhZGRpbmc6IDIlIDUlO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gIHdpZHRoOiA2MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1pbWFnZSB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1JTtcXHJcXG4gIHdpZHRoOiA1MCU7XFxyXFxufVxcclxcblxcclxcbi5wb3B1cC1jbG9zZSB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICByaWdodDogMTBweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjhweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG4ucG9wdXAtY2xvc2U6aG92ZXIsXFxyXFxuLnBvcHVwLWNsb3NlOmZvY3VzIHtcXHJcXG4gIGNvbG9yOiBibGFjaztcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuLmxpc3QtaXRlbXMtY29tbWVudHMge1xcclxcbiAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcXHJcXG4gIC5tb2RhbC1jb250ZW50IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcXHJcXG4gICAgbWFyZ2luOiAxJSBhdXRvO1xcclxcbiAgICBwYWRkaW5nOiAyJSA1JTtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyJdLCJuYW1lcyI6WyJtb2R1bGUiLCJleHBvcnRzIiwiY3NzV2l0aE1hcHBpbmdUb1N0cmluZyIsImxpc3QiLCJ0b1N0cmluZyIsIm1hcCIsIml0ZW0iLCJjb250ZW50IiwibmVlZExheWVyIiwiY29uY2F0IiwibGVuZ3RoIiwiam9pbiIsImkiLCJtb2R1bGVzIiwibWVkaWEiLCJkZWR1cGUiLCJzdXBwb3J0cyIsImxheWVyIiwidW5kZWZpbmVkIiwiYWxyZWFkeUltcG9ydGVkTW9kdWxlcyIsImsiLCJpZCIsIl9rIiwicHVzaCIsImNzc01hcHBpbmciLCJidG9hIiwiYmFzZTY0IiwidW5lc2NhcGUiLCJlbmNvZGVVUklDb21wb25lbnQiLCJKU09OIiwic3RyaW5naWZ5IiwiZGF0YSIsInNvdXJjZU1hcHBpbmciLCJzb3VyY2VVUkxzIiwic291cmNlcyIsInNvdXJjZSIsInNvdXJjZVJvb3QiLCJsb29rdXBGZXRjaCIsImRpc3BsYXlTaG93cyIsImNvdW50SXRlbXMiLCJjcmVhdGVNb3ZpZXNBcHAiLCJtb3ZpZXNTaG93cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1haW5VcmwiLCJyZXNwb25zZSIsImZldGNoIiwibWV0aG9kIiwibW92aWVzQXBwSWQiLCJ0ZXh0IiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNldEl0ZW0iLCJsaWtlTW92aWUiLCJtb3ZpZUlkIiwiYXBwSWQiLCJoZWFkZXJzIiwiYm9keSIsIml0ZW1faWQiLCJzdGF0dXMiLCJnZXRMaWtlcyIsImxpa2VzIiwicGFyc2UiLCJpbnZvbHZlbWVudE1haW5VcmwiLCJhcGlJZCIsInNob3dJZCIsInVybCIsInNob3ciLCJqc29uIiwiZmV0Y2hDb21tZW50cyIsImNvbW1lbnRzIiwic2hvd0NvbW1lbnRzSW5BcGkiLCJuYW1lIiwiaW5zaWdodCIsInVzZXJuYW1lIiwiY29tbWVudCIsImFkZENvbW1lbnRzIiwidWwiLCJhcnIiLCJmb3JFYWNoIiwiZWxlbWVudCIsImlubmVySFRNTCIsImNyZWF0aW9uX2RhdGUiLCJnZXRDb3VudHMiLCJjb3VudGVySW5jcmVtZW50IiwiY29tbWVudFRpdGxlIiwiY29tbWVudHNJbmZvIiwiY29tbWVudFZhbHVlIiwidGV4dENvbnRlbnQiLCJzaG93Q29tbWVudFBhZ2UiLCJzaG93SW5mb3JtYXRpb24iLCJjb21tZW50c0luZm9ybWF0aW9uIiwibW9kYWxDb21tZW50IiwicXVlcnlTZWxlY3RvciIsIm92ZXJsYXlNb2RhbCIsImNsYXNzTGlzdCIsImFkZCIsImltYWdlIiwibWVkaXVtIiwiZ2VucmVzIiwibGFuZ3VhZ2UiLCJwcmVtaWVyZWQiLCJzcGxpdCIsInJhdGluZyIsImF2ZXJhZ2UiLCJjbG9zZUJ1dHRvbiIsInJlbW92ZSIsImNvbW1lbnRlck5hbWUiLCJVc2VySW5zaWdodCIsImNvbW1lbnRGb3JtIiwiZSIsInByZXZlbnREZWZhdWx0IiwidmFsdWUiLCJTaG93TW92aWVzQ29udGFpbmVyIiwiY29uc3RydWN0b3IiLCJzaG93SW1hZ2UiLCJzaG93TmFtZSIsInNob3dMaWtlcyIsInVwZGF0ZUxpa2VzIiwiYmluZCIsIm51bUxpa2VzRGlzcGxheSIsImlubmVyVGV4dCIsImRpc3BsYXlNb3ZpZXMiLCJzaG93c1BhbmVsIiwiZ2V0RWxlbWVudEJ5SWQiLCJjb250YWluZXIiLCJjcmVhdGVFbGVtZW50Iiwic2hvd0ltZyIsInNyYyIsInNob3dUaXRsZSIsIm51bUxpa2VzIiwibGlrZUJ1dHRvbiIsImRpdkluZm8iLCJhcHBlbmQiLCJjb21tZW50QnV0dG9uIiwic2hvd3MiLCJyZXN1bHQiLCJmaW5kIiwic2hvd01vdmllc0NvbnRhaW5lciIsIm9yaWdpbmFsIiwibW92aWVzIl0sInNvdXJjZVJvb3QiOiIifQ==