module.exports.getParams = () => {
  const search = window.location.search;
  const paramsArray = search.slice(1).split('&');
  const paramsObj = {};

  for(let param of paramsArray) {
    paramsObj[param.split('=')[0]] = param.split('=')[1];
  }

  return paramsObj;
};