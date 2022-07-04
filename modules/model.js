export const state = {
  books: [],
};

const uploadBook = () => {
  localStorage.setItem('booksInfo', JSON.stringify(state.books));
};

export const loadBooks = () => {
  const data = JSON.parse(localStorage.getItem('booksInfo')) || [];
  state.books = data;
};

export const addBook = (title, author) => {
  const book = { title, author, id: Date.now() };
  state.books = [...state.books, book];
  uploadBook();
};

export const removeBook = (id) => {
  const modified = state.books.filter((book) => book !== state.books.find((el) => el.id === id));
  state.books = modified;
  uploadBook();
};
