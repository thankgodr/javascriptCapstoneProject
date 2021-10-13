import NetworkCall from '../helpers/networkcall';

class CommentsPage {
  URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  constructor(shows, btn) {
    this.show = shows.moviesArray.filter((show) => show.id === +btn.id)[0];
  }

  render() {
    const template = `<div class="popup-section">
        <div class="header">
          <img src="${this.show.image.medium}">

          <h1>${this.show.name}</h1>

          <div class="show-data">
            <span class="show-status"><b>Status:</b> ${this.show.status}</span>
            <div id="genres"></div>
            <span class="rating"><b>Rating:</b> ${this.show.rating.average}</span>

            <div id="summary-container"></div>
          </div>
        </div>

        <div class="comments-container">
          <h2>Comments 10</h2>

          <div id="comments-box">
          
          </div>

        </div>

        <div class="add-comment-container">
          <h2>Add a comment</h2>

          <input type="text" placeholder="Your name">

          <textarea placeholder="Your comments"></textarea>

          <button type="button" class="btn btn-primary commentPopup-button">Comment</button>
        </div>

      </div>`;

      const commentsPage = document.getElementById('commentsPage');
      const modalBody = commentsPage.querySelector('.modal-body');
      modalBody.innerHTML = template;

      const summaryContainer = document.getElementById('summary-container');
      summaryContainer.innerHTML = this.show.summary;

      const genresDiv = document.getElementById('genres');
      this.show.genres.forEach((genre) => {
        const span = document.createElement('span');
        span.innerHTML = `<b>Genres</b>: ${genre} `;
        genresDiv.appendChild(span);
      });
  }
}

export default CommentsPage;


