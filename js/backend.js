'use strict';
(function () {

  window.backend = {
    save: function (data, onSuccess/* , onError*/) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      // xhr.timeout = 15000; // 15s

      xhr.addEventListener('load', function () {
        onSuccess(xhr.response);
      });
      //   if (xhr.status === 200) {
      //     onLoad(xhr.response);
      //   } else {
      //     onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      //   }
      // });

      // xhr.addEventListener('error', function () {
      //   onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      // });

      // xhr.addEventListener('error', function () {
      //   onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      // });

      xhr.open('POST', window.const.URL);
      xhr.send(data);
    },
    load: function (onLoad, onError) {
      var xhr = new XMLHttpRequest();
      xhr.responseType = 'json';
      xhr.timeout = 10000; // 10s
      xhr.open('GET', window.const.URL_DATA);

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          onLoad(xhr.response);
        } else {
          onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
        }
      });

      xhr.addEventListener('error', function () {
        onError('Произошла ошибка соединения');
      });

      xhr.addEventListener('timeout', function () {
        onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
      });

      // xhr.open('GET', URL);
      xhr.send();
    }
  };
})();
