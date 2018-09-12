import '../styles/index.scss';

import Movies from './movies.js';
import DOM from './dom.js';

const APP = {};

APP.data = [];
APP.container = document.getElementById('app');

Movies.getData().then(res => {
  APP.data = res;
  APP.container.appendChild(DOM.create(APP.data));
  addEvents();
});

let openedPreview = null;

const addEvents = () => {
  const previews = document.getElementsByClassName('preview');

  for (let preview of previews) {
    preview.onclick = () => {
      unselect(openedPreview);
      select(preview);
    };
  }
};

const select = (preview) => {
  openedPreview = preview;
  DOM.selectPreview(preview);
};

const unselect = (preview) => {
  if (!preview) {
    return;
  }

  DOM.unselectPreview(preview);
  openedPreview = null;
};
