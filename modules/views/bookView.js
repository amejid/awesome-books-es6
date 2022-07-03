class BookView {
  #parentEl = document.querySelector('.books-container');

  #targetId;

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

  getRemovedId(e) {
    if (e.target.classList.contains('remove')) {
      this.#targetId = +e.target.dataset.bookid;
    }
    return this.#targetId;
  }

  addHandlerRemover(handler) {
    this.#parentEl.addEventListener('click', handler);
  }
}

export default new BookView();
