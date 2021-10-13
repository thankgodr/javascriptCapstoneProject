import './css/style.css';

import ShowController from './js/controllers/showscontroller';

import CommentsController from './js/controllers/commentsController';

const shows = new ShowController([]);



shows.fetchRange(30, 100);

function commentPopupHandler() {
  if (shows.moviesArray.length) {
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


