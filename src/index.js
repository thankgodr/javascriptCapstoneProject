import './css/style.css';

import ShowController from './js/controllers/showscontroller';

import CommentsController from './js/controllers/commentsController';

const shows = new ShowController([]);

const start = 30;

const end = 100;

shows.fetchRange(start, end);

function commentPopupHandler() {
  if (shows.moviesArray.length === (end - start)) {
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


