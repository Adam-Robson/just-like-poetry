/* DOM */
const instruction = document.getElementById('instruction');

/* State */
const linesOneAndThree = [];
const lineTwo = [];
const buttonState = true;

/* Listeners */




/* Display */

const displayHaiku = () => {
  const haikuEl = document.getElementById('haiku-section');

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


function displayButton() {
  const buttonArticle = document.getElementById('button-article');
  const button = document.createElement('button');

  button.classList.add('button-element');

  if (buttonState) {
    button.textContent = 'create';
  } else {
    button.textContent = 'reset';
  }

  buttonArticle.append(button);
  return buttonArticle;

}
displayButton();



/* Utilities */

/* function to generate a string from array in State above. */
function generateIndexValue(array) {
  const integer = Math.floor(Math.random() * array.length);
  const string = array[integer];
  return string;
}

/* function to hide instruction when haiku displays */
function hideInstruction() {
  return instruction.classList.add('hidden');
}

