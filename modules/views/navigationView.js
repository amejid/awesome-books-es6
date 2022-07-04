class NavigationView {
  #navLinksEl = document.querySelector('.nav-links');

  #navLinkEl = document.querySelectorAll('.nav-link');

  #sectionEl = document.querySelectorAll('.section');

  #yearEl = document.querySelector('.year');

  setYear(now) {
    this.#yearEl.textContent = `${now.day}-${now.month}-${now.year}, ${now.hour}:${now.minute}`;
  }

  navigate() {
    this.#navLinksEl.addEventListener('click', (e) => {
      const clicked = e.target;
      if (!clicked.classList.contains('nav-link')) return;

      const { sect } = clicked.dataset;
      this.#navLinkEl.forEach((link) => link.classList.remove('nav-link--active'));
      clicked.classList.add('nav-link--active');

      this.#sectionEl.forEach((link) => link.classList.remove('section--active'));

      document.querySelector(`.section-${sect}`).classList.add('section--active');
    });
  }
}

export default new NavigationView();
