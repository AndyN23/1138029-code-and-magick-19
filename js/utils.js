'use strict';
(function () {

  var getRandomValue = function (arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  };

window.utils = {
  getRandomValue: getRandomValue,
  isEscEvent: function (evt, action) {
    if (evt.key === window.const.ESC_KEY){
      action();
    }
  },
  isEnterEvent: function (evt, action) {
    if (evt.key === window.const.ENTER_KEY) {
      action();
    }
  },
};
}) ();
