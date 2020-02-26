'use strict';

(function () {
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var WIZARD_COUNT = 4;

  var ESC_KEY = 'Escape';
  var ENTER_KEY = 'Enter';
  var MIN_NAME_LENGTH = 2;

  var URL = 'https://js.dump.academy/code-and-magick.';
  var URL_DATA = 'https://js.dump.academy/code-and-magick/data';

  window.const = {
    WIZARD_NAMES: WIZARD_NAMES,
    WIZARD_SURNAMES: WIZARD_SURNAMES,
    COAT_COLOR: COAT_COLOR,
    EYES_COLOR: EYES_COLOR,
    FIREBALL_COLOR: FIREBALL_COLOR,
    WIZARD_COUNT: WIZARD_COUNT,
    ESC_KEY: ESC_KEY,
    ENTER_KEY: ENTER_KEY,
    MIN_NAME_LENGTH: MIN_NAME_LENGTH,
    URL: URL,
    URL_DATA: URL_DATA
  };
})();
