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
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  // создаем фрагмент из заполненного массива

  var form = setup.querySelector('.setup-wizard-form');
  form.addEventListener('submit', function (evt) {
    window.backend.save(new FormData(form), function (response) {
      document.querySelector('.overlay').classList.add('hidden');
    });
    evt.preventDefault();
  });

  var succesHandler = function (wizards) {
    var fragment = document.createDocumentFragment();
    for (i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    similarListElement.appendChild(fragment);
    document.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function (errorMessage) {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(succesHandler, errorHandler);
})();

