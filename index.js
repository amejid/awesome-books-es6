/* eslint-disable import/extensions */
import bookAddView from './modules/views/bookAddView.js';
import bookView from './modules/views/bookView.js';
import * as model from './modules/model.js';
import navigationView from './modules/views/navigationView.js';
import { DateTime } from './modules/luxon.js';

const addBook = () => {
  const [title, author] = bookAddView.getFormValues();
  if (!title || !author) return;
  model.addBook(title, author);
  bookView.render(model.state.books);
};

const removeBook = (id) => {
  model.removeBook(id);
  bookView.render(model.state.books);
};

const init = () => {
  model.loadBooks();
  bookView.render(model.state.books);
  navigationView.navigate();

  navigationView.setYear(DateTime.now());

  bookAddView.addHandlerAdder(addBook);
  bookView.addHandlerRemover(removeBook);
};

init();
