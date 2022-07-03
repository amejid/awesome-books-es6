class BookAddView {
  #titleEl = document.querySelector('#title');

  #authorEl = document.querySelector('#author');

  #btnAddEl = document.querySelector('.btn-submit');

  #clearInputs() {
    this.#titleEl.value = '';
    this.#authorEl.value = '';
  }

  getFormValues() {
    const info = [this.#titleEl.value.trim(), this.#authorEl.value.trim()];

    this.#clearInputs();
    return info;
  }

  addHandlerAdder(handler) {
    this.#btnAddEl.addEventListener('click', (e) => {
      e.preventDefault();
      handler();
    });
  }
}

export default new BookAddView();
