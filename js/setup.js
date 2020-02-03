'use strict';

document.querySelector('.setup').classList.remove('hidden');
document.querySelector('.setup-similar').classList.remove('hidden');

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var wizardNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var wizardSurnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var wizardCoatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyesColor = ['black', 'red', 'blue', 'yellow', 'green'];

var wizName = function () {
  var randName = Math.floor(Math.random() * (wizardNames.length - 1) + 1);
  return wizardNames [randName];
};
var wizSurname = function () {
  var randSur = Math.floor(Math.random() * (wizardSurnames.length - 1) + 1);
  return wizardSurnames [randSur];
};
var wizCoatColor = function () {
  var randCoatColor = Math.floor(Math.random() * (wizardCoatColor.length - 1) + 1);
  return wizardCoatColor [randCoatColor];
};
var wizEyesColor = function () {
  var randEyesColor = Math.floor(Math.random() * (wizardEyesColor.length - 1) + 1);
  return wizardEyesColor [randEyesColor];
};

var wizards = [
  {
    name: wizName() + ' ' + wizSurname(),
    coatColor: wizCoatColor(),
    eyesColor: wizEyesColor()
  },
  {
    name: wizName() + ' ' + wizSurname(),
    coatColor: wizCoatColor(),
    eyesColor: wizEyesColor()
  },
  {
    name: wizName() + ' ' + wizSurname(),
    coatColor: wizCoatColor(),
    eyesColor: wizEyesColor()
  },
  {
    name: wizName() + ' ' + wizSurname(),
    coatColor: wizCoatColor(),
    eyesColor: wizEyesColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
