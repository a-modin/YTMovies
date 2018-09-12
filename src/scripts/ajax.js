module.exports.get = (url) => {

  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();

    request.open('GET', url, true);

    request.onload = (e) => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(JSON.parse(request.responseText));

        } else {
          reject(request.statusText);
        }
      }
    };

    request.onerror = (e) => {
      reject(request.statusText);
    };

    request.send(null);
  });

};