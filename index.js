/* DOM */
const button = document.getElementById('button-element');
/* State */

const linesOneAndThree = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k'];
const lineTwo = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

/* Display */

function displayHaiku() {
  // hide instruction
  const instruction = document.getElementById('instruction');
  instruction.classList.add('hidden');

  const haikuEl = document.getElementById('haiku-section');

  // create haiku section
  const wrapper = document.createElement('div');
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

  // append nodes
  wrapper.append(firstPhrase, secondPhrase, thirdPhrase);
  haikuEl.append(wrapper);

  return haikuEl;
}

function tgl() {
  if (button.textContent === 'create') {
    button.textContent = 'reset';
  } else if  (button.textContent === 'reset') {
    button.textContent = 'create';
  }
}

/* Utilities */

/* function to generate a string from array in State above. */
function generateIndexValue(array) {
  const integer = Math.floor(Math.random() * array.length);
  const string = array[integer];
  return string;
}

button.addEventListener('click', () => {
  displayHaiku();
  tgl();
})


