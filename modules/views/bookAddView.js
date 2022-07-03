class BookAddView {
  #titleEl = document.querySelector('#title');

  #authorEl = document.querySelector('#author');

  #btnAddEl = document.querySelector('.btn-submit');

  clearInputs() {
    this.#titleEl.value = '';
    this.#authorEl.value = '';
  }

  getFormValues() {
    return [this.#titleEl.value.trim(), this.#authorEl.value.trim()];
  }

  addHandlerAdder(handler) {
    this.#btnAddEl.addEventListener('click', handler);
  }
}

export default new BookAddView();
