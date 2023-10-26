'use strict';

let correctGuesses = 0;


function askLocation() {
  let location = prompt('Am I from California? Y or N');
  location = location.toUpperCase();


  if (location === "Y") {
    alert('you are correct');
    correctGuesses += 1;
    console.log(correctGuesses);
  } else {
    alert('wrong answer');
  }
}

function askCode() {
  let code = prompt('Am I learning how to code? Y or N');
  code = code.toUpperCase();

  if (code === "Y") {
    alert('you are correct');
    correctGuesses += 1;
    console.log(correctGuesses)
  } else {
    alert('wrong answer');
  }
}

function askPets() {
  let pet = prompt('Do I have any pets? Y or N');
  pet = pet.toUpperCase();

  if (pet === "N") {
    alert('you are correct');
    correctGuesses += 1;
  } else {
    alert('wrong answer');
  }
}

function askBuild() {
  let build = prompt('Have I ever helped build a home? Y or N');
  build = build.toUpperCase();

  if (build === "Y") {
    alert('you are correct');
    correctGuesses += 1;
  } else {
    alert('wrong answer');
  }
}

function askLanguage() {
  let language = prompt('Do I speak another language? Y or N');
  language = language.toUpperCase();

  if (language === "Y") {
    alert('you are correct');
    correctGuesses += 1;
  } else {
    alert('wrong answer');
  }
}

function years() {
  let yearString = prompt('How many years have I lived in Oklahoma? You get 4 guesses.');
  let yearNumber = parseInt(yearString);
  let guess = 0;
  for (let i = 0; i < 4; i++) {
    if (yearNumber < 2) {
      alert('Too low');
      guess++;
      yearNumber = prompt('try again');
    } else if (yearNumber > 2) {
      alert('Too high');
      guess++;
      yearNumber = prompt('try again');
    } else {
      alert('correct');
      correctGuesses += 1;
      guess++;
      break;
    }
  } alert('You used ' + guess + ' guesses.');
  return years;
}

function states() {
  let guess = 0;
  let statesLivedIn = ['CA', 'OR', 'NV', 'AZ', 'NM', 'TX', 'AR', 'OK'];
  while (guess < 6) {
    guess++;
    let askState = prompt('Guess which States that I have lived in? Please use state abbreviations.You get 6 guesses.');
    askState = askState.toUpperCase();
    for (let i = 0; i < statesLivedIn.length; i++) {
      if (askState === statesLivedIn[i]) {
        alert('correct');
      }
    } break;
  } 
}


function getName() {
  let userName = prompt('What is your name?');
  alert('Hello, ' + userName + ' welcome to my about me site.');
  alert('You got ' + correctGuesses + ' guesses right.')
  alert('Thanks for taking the time to get to know me ' + userName + '. I would like to get to know you too.');
  return userName;
}
//askLocation();
//askCode();
//askPets();
//askBuild();
//askLanguage();
//years();
states();
//getName();
