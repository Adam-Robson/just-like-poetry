import { fiveSyllables, sevenSyllables, description } from './data.js';

function renderHaiku() {
  const parElOne = document.createElement('p');
  const parElTwo = document.createElement('p');
  const parElThree = document.createElement('p');
  parElOne.id = 'phraseOne';
  parElTwo.id = 'phraseTwo';
  parElThree.id = 'phraseThree';
  const randomNumberOne = Math.floor(Math.random() * fiveSyllables.length);
  const randomNumberTwo = Math.floor(Math.random() * sevenSyllables.length);
  const randomNumberThree = Math.floor(Math.random() * fiveSyllables.length);
  let arrayItemOne = fiveSyllables[randomNumberOne];
  let arrayItemTwo = sevenSyllables[randomNumberTwo];
  let arrayItemThree =  fiveSyllables[randomNumberThree];
  parElOne.textContent = arrayItemOne;
  parElTwo.textContent = arrayItemTwo;
  parElThree.textContent = arrayItemThree;
  const instruction = document.getElementById('instruction');
  instruction.classList.add('hidden');

  const wrapper = document.getElementById('wrapper');
  wrapper.append(parElOne, parElTwo, parElThree);
  return wrapper;
}

let pageState = true;

const buttonEl = document.getElementById('button-element');
buttonEl.addEventListener('click', () => {
  pageState = !pageState;
  if (pageState === false) {
    renderHaiku();
    buttonEl.textContent = 'reset';
  } else if (pageState === true) {
    toggleButton();
    resetPage();
    buttonEl.textContent = 'create';
  }
});

function toggleButton() {
  if (buttonEl.textContent === 'create') {
    return buttonEl.textContent = 'reset';
  } else if (buttonEl.textContent === 'reset') {
    return buttonEl.textContent = 'create';
  }
}

function resetPage() {
  toggleButton();
  instruction.classList.remove('hidden');
  const wrapper = document.getElementById('wrapper');
  wrapper.innerHTML = '';
}
