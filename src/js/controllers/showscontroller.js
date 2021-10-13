import NetworkCall from '../helpers/networkcall.js';

export default class ShowController {
  constructor(moviesArray) {
    this.moviesArray = moviesArray;
  }

  fetchRange(start = 1, end = 50) {
    const networkCall = new NetworkCall();
    while (start < end) {
      const response = networkCall.getRequest(`shows/${start}`);
      response.then((result) => {
        const movie = JSON.parse(result);
        this.moviesArray.push(movie);

        const divHolder = document.createElement('div');
        divHolder.className = 'col-md-4 mt-2';
        if (movie.image) {
          divHolder.innerHTML = `<div class="card">
          <div class="card-body">
            <div class="card-img-actions">
              <img
                src="${movie.image.original}"
                class="card-img img-fluid"
                width="348"
                height="241"
                alt=""
              />
            </div>
          </div>
          <div class="card-body bg-light text-center">
            <div class="mb-2 row">
              <div class="col-md-6">
                <h6 class="font-weight-semibold mb-2">
                  <a href="#" class="text-default mb-2" data-abc="true">${movie.name}</a>
                </h6>
              </div>
              <div class="col-md-6">
                <h6 class="font-weight-semibold mb-2">
                  <i class="fa fa-heart love"></i>
                  <br />
                  <small>5 likes</small>
                </h6>
              </div>
            </div>
            <button id=${movie.id} type="button" class="mt-3 btn btn-info comment-button" data-bs-toggle="modal" data-bs-target="#commentsPage">
              <i class="fa fa-comments mr-4"></i> Comments
            </button>
            <button type="button" class="mt-3 btn btn-secondary">
              <i class="fas fa-ticket-alt mr-4"></i> Reservations
            </button>
          </div>
        </div>`;
        }

        document.getElementById('cardHolder').appendChild(divHolder);
      }).catch((error) => {
        throw new Error(error);
      });

      start += 1;
    }
  }
}
