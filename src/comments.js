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

	createUI() {
		const commentPopupSection = document.createElement('section');

		// Header
		const img = document.createElement('img');

		const h1 = document.createElement('h1');

		// Comments
		const divComments = document.createElement('div');

		const h2Comments = document.createElement('h2');

		const divCommentsContainer = document.createElement('div');

		// Add a comment
		const divAddComment = document.createElement('div');

		const h2AddComment = document.createElement('h2');

		const nameInput = document.createElement('input');

		const textArea = document.createElement('textarea');

		const button = document.createElement('button');


		// Adding content
		img.src = this.image;

		h1.innerHTML = `${this.showName}`;

		h2Comments.innerHTML = `Comments ${this.commentsAmount}`;

		h2AddComment.innerHTML = "Add a comment";

		nameInput.placeholder = "Your name";

		textArea.placeholder = "Your comments";

		button.innerHTML = "Comment";




		commentPopupSection.appendChild(img);

		commentPopupSection.appendChild(h1);

    commentPopupSection.appendChild(divComments);

    divComments.appendChild(h2Comments);
    


    this.comments
		for(let i = 0; i < commentsAmount; i++) {
      const comment = document.createElement('p');

      const commentDate = document.createElement('span');

      const commentContent = document.createElement('span');

      commentDate.innerHTML = ``

			divCommentsContainer.appendChild()
		}
	}

  async init() {
    await this.fetchAllComments();
  }
}

const comments = new CommentsPage(image, showName);
comments.init();


export default CommentsPage;