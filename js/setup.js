'use strict';
(function () {
  var setup = document.querySelector('.setup');
  document.querySelector('.setup-similar').classList.remove('hidden');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
// Создаем массив с магами и заполняем его данными
  var wizards = [];
  for (var i = 0; i < window.const.WIZARD_COUNT; i++) {
    wizards.push(
        {name: window.utils.getRandomValue(window.const.WIZARD_NAMES) + ' ' + window.utils.getRandomValue(window.const.WIZARD_SURNAMES),
          coatColor: window.utils.getRandomValue(window.const.COAT_COLOR),
          eyesColor: window.utils.getRandomValue(window.const.EYES_COLOR)
        });
  }
// Клонируем магов совсеми характеристиками и заполняем их данными
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
// создаем фрагмент из заполненного массива
  var fragment = document.createDocumentFragment();
  for (i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }
  similarListElement.appendChild(fragment);
  document.querySelector('.setup-similar').classList.remove('hidden');
})();
