/* DOM */
const controlEl = document.getElementById('control-section');
/* State */
const linesOneAndThree = [];
const lineTwo = [];

/* Listeners */




/* Displays */


const displayHaiku = () => {
  const haikuEl = document.getElementById('haiku');

  const wrapper = document.createElement('div');
  const firstPhrase = document.createElement('p');
  const secondPhrase = document.createElement('p');
  const thirdPhrase = document.createElement('p');

  firstPhrase.classList.add('phrase');
  secondPhrase.classList.add('phrase');
  thirdPhrase.classList.add('phrase');

  firstPhrase.textContent = generateIndexValue(linesOneAndThree);
  secondPhrase.textContent = generateIndexValue(lineTwo);
  thirdPhrase.textContent = generateIndexValue(linesOneAndThree);

  wrapper.append(firstPhrase, secondPhrase, thirdPhrase);
  haikuEl.append(wrapper);

  return haikuEl;
}


/* Utilities */

/* function to generate a string from array in State above. */
function generateIndexValue(array) {
  const integer = Math.floor(Math.random() * array.length);
  const string = array[integer];
  return string;
}


