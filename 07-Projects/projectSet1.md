# Projects related to DOM

## project Link
[Click Here For My project](https://stackblitz.com/edit/stackblitz-starters-2uecn3?description=HTML/CSS/JS%20Starter&file=script.js,styles.css,index.html&terminalHeight=10&title=Static%20Starter)

[Click Here For Hitesh Choudary Project](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# solution code

### project 1

```Javascript
console.log("Naveen");

const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e);
    console.log(e.target);
    if(e.target.id === 'grey'){
      body.style.backgroundColor = 'grey';
    }
    else if(e.target.id === 'white'){
      body.style.backgroundColor = 'white';
    }
    else if(e.target.id === 'blue'){
      body.style.backgroundColor = 'blue';
    }
    else{
      body.style.backgroundColor = 'yellow';
    }
  })
})

```


### Project 2 Solution
```Javascript
const form = document.querySelector('form');
// this usecase will give you empty
//const height = parseInt(document.querySelector('#height').value);

form.addEventListener('submit',function(e){
 e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if(height == '' || height <= 0 || isNaN(height)){
    results.innerHTML = "!!Please enter valid height";
  }

  else if(weight == '' || weight <= 0 || isNaN(weight)){
    results.innerHTML = "!!Please enter valid weight";
  }

  else{
    const bmi = (weight/ ((height * height)/10000)).toFixed(2);
    results.innerHTML = bmi;
  }
})

```

### Project 3 Solution

```Javascript
const clock = document.getElementById('clock');

setInterval(function(){
  let date = new Date();
  //console.log(date.toLocaleTimeString());
  clock.innerHTML = date.toLocaleTimeString();
},1000) 

```

## Project 4 Solution

```Javascript
let randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');
const userInput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowOrHi = document.querySelector('.lowOrHi');
const startOver = document.querySelector('.resultParas');

const p = document.createElement('p');

const prevGuess = [];
let numGuess = 1;

let playGame = true;

if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    console.log('Please Enter a Valid Number!!');
  } else if (guess < 1) {
    console.log('Please Enter a Valid Number!!');
  } else if (guess > 100) {
    console.log('Please Enter a Number less than 100!!');
  } else {
    prevGuess.push(guess)
    if (numGuess === 11) {
      displayGuess(guess)
      displayMessage(`Game Over!. Random Number was ${randomNumber}`);
      endGame()
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if(guess === randomNumber){
    displayMessage("You Guessed it Right!!")
    endGame();
  }
  else if(guess < randomNumber){
    displayMessage("Number is LOW")
  }
  else if(guess > randomNumber){
    displayMessage("Number is High")
  }

}

function displayGuess(guess) {
  userInput.value = "";
  guessSlot.innerHTML += `${guess},  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  lowOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userInput.value = "";
  userInput.setAttribute('disabled','');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p);
  playGame = flase;
  newGame();
}

function newGame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = '';
    userInput.removeAttribute('disabled');
    startOver.replaceChild(p);
    playGame = true;
  })
}

```


## Project 5 Solution

```javascript
// generate random color

const random = function(){
  const hex = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0 ; i < 6 ; i++){
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};

let intervalId;
const startChangingColor = function(){
    intervalId = setInterval(changeBgColor,1000);

    function changeBgColor(){
      document.body.style.backgroundColor = random() ;
    }
};

const stopChangingColor = function() {
  clearInterval(intervalId);
}

document.querySelector('#start').addEventListener('click',startChangingColor);

document.querySelector('#stop').addEventListener('click',stopChangingColor);

```

## Project 6 Solution

```javascript
const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
  insert.innerHTML = `
  <div class = 'color'>
  <table>
  <tr>
    <th>key</th>
    <th>keyCode</th>
    <th>Code</th>
  </tr>
  <tr>
    <td>${e.key === ' ' ? 'space' : 'key'}</td>
    <td>${e.keyCode}</td>
    <td>${e.code}</td>
  </tr>
</table>
  </div>
  `;
});


```