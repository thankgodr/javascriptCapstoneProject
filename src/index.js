import './style.css';
import './css/style.css';
import ShowController from './js/controllers/showscontroller';

const shows = new ShowController([]);

shows.fetchRange(30, 100);
