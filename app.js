import { fiveSyllables, sevenSyllables, description } from './data';

const buttonEl = document.getElementById('button-element');
const instructionEl = document.getElementById('instruction');
const wrapperEl = document.getElementById('wrapper');
const history = document.getElementBById('history');

buttonEl.addEventListener('click', buttonClick());

const buttonClick = function() {
  wrapperEl.children ? displayHaiku() : resetButton();
}

const toggleButtonText = function() {
  if (buttonEl.textContent === 'create') {
    buttonEl.textContent = 'reset';
  } else if (buttonEl.textContent === 'reset') {
    buttonEl.textContent = 'create';
  }
};

const displayHaiku = function() {
  toggleButtonText();
  instructionEl.classList.add('hidden');

  const pElOne = document.createElement('p');
  const pElTwo = document.createElement('p');
  const pElThree = document.createElement('p');

  pElOne.textContent = randomPhrase(fiveSyllables);
  pElTwo.textContent = randomPhrase(sevenSyllables);
  pElThree.textContent = randomPhrase(fiveSyllables);

  wrapperEl.append(pElOne, pElTwo, pElThree);

  return wrapperEl;
};

const randomPhrase = (arr) => {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
};

const resetButton = function() {
  toggleButtonText();
  instructionEl.classList.remove('hidden');
  pElOne.remove;
  pElTwo.remove;
  pElThree.remove;
}

const renderHistory = function() {
  const divEl = document.createElement('div');
  divEl.textContent = description;
  history.append(divEl);
  return history;
}

renderHistory();