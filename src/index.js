import './css/style.css';

import ShowController from './js/controllers/showscontroller.js';

import CommentsController from './js/controllers/commentsController.js';

const shows = new ShowController([]);

const start = 1;

const end = 30;

shows.fetchRange(start, end);

function commentPopupHandler() {
  if (shows.moviesArray.length === end - start) {
    const allCommentButtons = document.querySelectorAll('.comment-button');

    allCommentButtons.forEach((button) => {
      button.addEventListener('click', () => {
        const commentPopup = new CommentsController(shows, button);
        commentPopup.render();
      });
    });
  } else {
    setTimeout(commentPopupHandler, 15);
  }
}

commentPopupHandler();
