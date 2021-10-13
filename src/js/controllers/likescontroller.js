import NetworkCall from '../helpers/networkcall';

export default class LikesControllers {
  #appid = 'f2Nvc7oVyb6NlmnKre2d';
  #notionUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

  constructor() {
    this.getLikes();
  }
  sendLike(movieID) {
    const networkCall = new NetworkCall(this.#notionUrl);
    return networkCall
      .postRequest(
        {
          item_id: movieID,
        },
        `apps/${this.#appid}/likes/`
      )
      .then((outcome) => outcome)
      .catch((error) => error);
  }

  getLikes() {
    const networkCall = new NetworkCall(this.#notionUrl);
    return networkCall
      .getRequestNoCors(`/apps/${this.#appid}/likes`)
      .then((res) => {
        this.likesArray = res;
        return res;
      })
      .catch((err) => err);
  }
}
