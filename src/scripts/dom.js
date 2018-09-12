const stringToNode = (string) => {
  const template = document.createElement('div');
  template.innerHTML = string;
  return template.children[0];
};

const createMoviePreview = (title, img, id, click) => {

  const html = `
    <div class="preview" id="${id}">
      <div class="preview-inner">
        <div class="preview-content">
          <div class="preview-title">
            <span>${title}</span>
            <div class="preview-title-back"></div>
          </div>
          <img src="${img}" class="preview-img"> </img>
        </div>
      </div>
    </div>
  `;

  return stringToNode(html);
};

module.exports.create = (data) => {
  const wrapper = stringToNode('<div class="wrapper"> </div>');

  for (let item of data) {
    wrapper.appendChild(createMoviePreview(item.title, item.previewUrl, item.id));
  }

  return wrapper;
};

module.exports.selectPreview = (preview) => {
  const id = preview.getAttribute('id');
  const iframe = stringToNode(`<iframe src="//www.youtube.com/embed/${id}?autoplay=1" frameborder="0" allowfullscreen class="preview-video" ></iframe>`);
  const content = preview.getElementsByClassName('preview-content')[0];
  content.appendChild(iframe);
  preview.classList.add("preview--selected");
};

module.exports.unselectPreview = (preview) => {
  const iframe = preview.getElementsByTagName('iframe')[0];
  const content = preview.getElementsByClassName('preview-content')[0];
  content.removeChild(iframe);
  preview.classList.remove("preview--selected");
};
