import { linesOneAndThree, lineTwo } from './data.js';

/* DOM */
const button = document.getElementById('button-element');

/* Listener */
button.addEventListener('click', (e) => {
  if (e.target.textContent === 'create') {
    displayHaiku();
  } else {
    resetButton();
  }
});

/* Display Functions*/

function displayHaiku() {

  // change button text
  tgl();

  // hide instruction
  const instruction = document.getElementById('instruction');
  instruction.classList.add('hidden');
  const wrapper = document.getElementById('wrapper');

  // create haiku section
  const firstPhrase = document.createElement('p');
  const secondPhrase = document.createElement('p');
  const thirdPhrase = document.createElement('p');
  firstPhrase.classList.add('phrase');
  secondPhrase.classList.add('phrase');
  thirdPhrase.classList.add('phrase');

  // set haiku text
  firstPhrase.textContent = generateIndexValue(linesOneAndThree);
  secondPhrase.textContent = generateIndexValue(lineTwo);
  thirdPhrase.textContent = generateIndexValue(linesOneAndThree);

  // append
  wrapper.append(firstPhrase, secondPhrase, thirdPhrase);
  haikuEl.append(wrapper);
  return haikuEl;
}

function resetButton() {
  // change button text
  tgl();
  const haikuEl = document.getElementById('haiku-section');

  // remove hidden class from instruction
  const instruction = document.getElementById('instruction');
  instruction.classList.remove('hidden');
  phrases = document.getElementsByClassName('phrase');
  phrases.textContent = '';
  // remove children from haiku element
  const wrap = document.getElementById('wrapper');
  wrap.childNodes.remove();

  return wrap;
}

function generateIndexValue(array) {
  const integer = Math.floor(Math.random() * array.length);
  const string = array[integer];
  return string;
}

function tgl() {
 
  if (button.textContent === 'create') {
    button.textContent = 'reset';
  } else if (button.textContent === 'reset') {
    button.textContent = 'create';
  }
}
