'use strict';

// document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var userDialog = document.querySelector('.setup');
//userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLOR = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLOR = ['black', 'red', 'blue', 'yellow', 'green'];
var WIZARD_COUNT = 4;

var getRandomValue = function (arr) {
  return arr[Math.floor(Math.random() * arr.length)];
};

var wizards = [];
for (var i = 0; i < WIZARD_COUNT; i++) {
  wizards.push(
      {name: getRandomValue(WIZARD_NAMES) + ' ' + getRandomValue(WIZARD_SURNAMES),
        coatColor: getRandomValue(COAT_COLOR),
        eyesColor: getRandomValue(EYES_COLOR)
      });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');







//_________________________________________________________________
// Задание обработка событий

var ESC_KEY = 'Escape';
var ENTER_KEY = 'Enter';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var setupWizard =  document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireballWrap =document.querySelector('.setup-fireball-wrap');

var FIREBALL_COLOR = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

wizardCoat.addEventListener('click', function () {
  wizardCoat.style.fill = getRandomValue(COAT_COLOR);
});

wizardEyes.addEventListener('click', function () {
  wizardEyes.style.fill = getRandomValue(EYES_COLOR);
});

setupFireballWrap.addEventListener('click', function (){
  setupFireballWrap.style.backgroundColor = getRandomValue(FIREBALL_COLOR);
});

var onPopupEscPress = function (evt) {
  if (evt.key === ESC_KEY) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');

  document.addEventListener('keydown', onPopupEscPress);
  /* function (evt) {
    if (evt.key === 'Escape') {
      closePopup(); */
};

var closePopup = function () {
  setup.classList.add('hidden');

  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});
// setupOpen.addEventListener('click', function () {
//   setup.classList.remove('hidden');

//   document.addEventListener('keydown', function (evt) {
//     if (evt.key === 'Escape') {
//       setup.classList.add('hidden');
//     }
//   });
// });
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    openPopup();
  }
});
// setupOpen.addEventListener('keydown', function (evt) {
//   if (evt.key === 'Enter') {
//     setup.classList.remove('hidden');
//   }
// });
setupClose.addEventListener('click', function () {
  closePopup();
});
// setupClose.addEventListener('click', function () {
//   setup.classList.add('hidden');
// });
setupClose.addEventListener('keydown', function (evt) {
  if (evt.key === ENTER_KEY) {
    closePopup();
  }
});
// setupClose.addEventListener('keydown', function(evt) {
//   if (evt.key === 'Enter') {
//     setup.classList.add('hidden');
//   }
// });



var userNameInput = setup.querySelector('.setup-user-name');
userNameInput.addEventListener('invalid', function(evt){
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.tooLong) {
    userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
});

userNameInput.addEventListener('input', function(evt){
  var target = evt.target;
  if (target.value.length < MIN_NAME_LENGTH) {
    target.setCustomValidity(
      'Имя должно состоять минимуи из ' +
      MIN_NAME_LENGTH +
      '-х символов'
      );
  } else {
    target.setCustomValidity('');
  }
});
