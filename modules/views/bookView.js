class BookView {
  #parentEl = document.querySelector('.books-container');

  render(books) {
    this.#parentEl.innerHTML = '';
    if (!books) return;
    books.forEach((book) => {
      const builder = `
      <div class="book">
        <p class="book-info">"${book.title}" by ${book.author}</p>
        <button type="button" class="remove" data-bookid="${book.id}">Remove</button>
      </div>
      `;
      this.#parentEl.insertAdjacentHTML('beforeend', builder);
    });
  }

  addHandlerRemover(handler) {
    this.#parentEl.addEventListener('click', (e) => {
      const btn = e.target.closest('.remove');
      if (!btn) return;
      const bookId = +btn.dataset.bookid;

      handler(bookId);
    });
  }
}

export default new BookView();
