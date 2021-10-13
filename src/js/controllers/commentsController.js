import NetworkCall from '../helpers/networkcall';

class CommentsPage {
  URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  constructor(shows, btn) {
    this.show = shows.moviesArray.filter((show) => show.id === +btn.id)[0];
  }

  render() {
    const template = `
			<div class="popup-section mx-auto">
        <div class="header">
          <img src="${this.show.image.medium}">

          <h1>${this.show.name}</h1>

          <div class="show-data">
            <span class="show-status">Status: ${this.show.status}</span>
            <div id="genres"></div>
            <span class="rating">Rating: ${this.show.rating.average}</span>

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

          <button type="button btn btn-primary">Comment</button>
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
        span.innerHTML = `${genre} `;
        genresDiv.appendChild(span);
      });
  }
}

export default CommentsPage;

// {
//   "id": 30,
//   "url": "https://www.tvmaze.com/shows/30/american-horror-story",
//   "name": "American Horror Story",
//   "type": "Scripted",
//   "language": "English",
//   "genres": [
//       "Drama",
//       "Horror",
//       "Thriller"
//   ],
//   "status": "Running",
//   "runtime": 60,
//   "averageRuntime": 61,
//   "premiered": "2011-10-05",
//   "ended": null,
//   "officialSite": "http://www.fxnetworks.com/shows/american-horror-story",
//   "schedule": {
//       "time": "22:00",
//       "days": [
//           "Wednesday"
//       ]
//   },
//   "rating": {
//       "average": 7.8
//   },
//   "weight": 100,
//   "network": {
//       "id": 13,
//       "name": "FX",
//       "country": {
//           "name": "United States",
//           "code": "US",
//           "timezone": "America/New_York"
//       }
//   },
//   "webChannel": null,
//   "dvdCountry": null,
//   "externals": {
//       "tvrage": 28776,
//       "thetvdb": 250487,
//       "imdb": "tt1844624"
//   },
//   "image": {
//       "medium": "https://static.tvmaze.com/uploads/images/medium_portrait/348/870947.jpg",
//       "original": "https://static.tvmaze.com/uploads/images/original_untouched/348/870947.jpg"
//   },
//   "summary": "<p><b>American Horror Story </b>is an horror television anthology series. Each season is conceived as a self-contained miniseries, following a disparate set of characters and settings, and a storyline with its own beginning, middle, and end. While some actors appear for more than one year, they play completely different roles in each season.</p>",
//   "updated": 1633610122,
//   "_links": {
//       "self": {
//           "href": "https://api.tvmaze.com/shows/30"
//       },
//       "previousepisode": {
//           "href": "https://api.tvmaze.com/episodes/2149199"
//       },
//       "nextepisode": {
//           "href": "https://api.tvmaze.com/episodes/2182798"
//       }
//   }
// }