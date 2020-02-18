'use strict';

(function () {
  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

  wizardCoat.addEventListener('click', function () {
    wizardCoat.style.fill = window.utils.getRandomValue(window.const.COAT_COLOR);
    document.querySelector('input[name=coat-color]').value = wizardCoat.style.fill;
  });

  wizardEyes.addEventListener('click', function () {
    wizardEyes.style.fill = window.utils.getRandomValue(window.const.EYES_COLOR);
    document.querySelector('input[name=eyes-color]').value = wizardEyes.style.fill;
  });

  setupFireballWrap.addEventListener('click', function () {
    setupFireballWrap.style.backgroundColor = window.utils.getRandomValue(window.const.FIREBALL_COLOR);
    setupFireballWrap.querySelector('input[name=fireball-color]').value = setupFireballWrap.style.backgroundColor;
  });

}) ();
