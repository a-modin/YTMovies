import Ajax from './ajax.js';
import Router from './router.js';

const params = Router.getParams();
const ids = params.id.split(',');

const getMovieById = (id) => {
  return new Promise((resolve, reject) => {
    const videoUrl = encodeURIComponent(`http://www.youtube.com/watch?v=${id}`);
   
    Ajax.get(`https://noembed.com/embed?url=${videoUrl}`).then(res => {
      resolve({
        id: id,
        title: res.title,
        previewUrl: `http://i.ytimg.com/vi/${id}/hqdefault.jpg`,
        videoUrl: `http://www.youtube.com/watch?v=${id}`,
      });
    });
  });
};

module.exports.getData = () => {
  let getMoviesPromises = [];

  for (let id of ids) {
    getMoviesPromises.push(getMovieById(id));
  }

  return Promise.all(getMoviesPromises);
};