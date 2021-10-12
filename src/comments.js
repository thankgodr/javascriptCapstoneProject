class CommentsPage {
  URL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/';

	constructor(image, showName) {
    this.image = image;
    
    this.showName = showName;

    this.comments = [];
	}

  async fetchAllComments() {
    const comments = await fetch(URL);

    this.comments.push(comments);
  }

	render() {
		const template = `
			<div class="comments-section">
        <img src="${this.image}">

        <h1>${this.showName}</h1>

        <div>
          <h2>Comments ${this.comments.length}</h2>

          <div id="comments-box">
          
          </div>

        </div>

        <div>
          <h2>Add a comment</h2>

          <input type="text" placeholder="Your name">

          <textarea placeholder="Your comments"></textarea>

          <button type="button">Comment</button>
        </div>

			</div>`;

    const commentsBox = document.getElementById('comments-box');

		for(let i = 0; i < this.comments.length; i++) {
      const commentP = document.createElement('p');

      const commentDate = document.createElement('span');

      const commentContent = document.createElement('span');

      commentDate.innerHTML = ``;
      commentContent.innerHTML = `${username} ${comment}`;

      commentP.appendChild(commentDate);
      commentP.appendChild(commentContent);
			commentsBox.appendChild(commentP);
		}
	}

  async init() {
    await this.fetchAllComments();
  }
}

const comments = new CommentsPage(image, showName);
comments.init();


export default CommentsPage;