'use strict';
function askLocation (){
  let location = prompt('Do I live in California? Y or N');
  let locationAnswer = location.toUpperCase();

  if (locationAnswer === "Y"){
    alert('you are correct');
  }else{
    alert('wrong answer');
  }
}

function askCode (){
  let code = prompt('Am I learning how to code? Y or N');
  let codeAnswer = code.toUpperCase();

  if (codeAnswer === "Y"){
    alert('you are correct');
  }else{
    alert('wrong answer');
  }
}

function askPets (){
  let pet = prompt('Do I have any pets? Y or N');
  let petAnswer = pet.toUpperCase();

  if (petAnswer === "N"){
    alert('you are correct');
  }else{
    alert('wrong answer');
  }
}

function askBuild (){
  let build = prompt('Have I ever helped build a home? Y or N');
  let buildAnswer = build.toUpperCase();

  if (buildAnswer === "Y"){
    alert('you are correct');
  }else{
    alert('wrong answer'); 
  }
}

function askLanguage (){
  let language = prompt('Do I speak another language? Y or N');
  let languageAnswer = language.toUpperCase();

  if (languageAnswer === "Y"){
    alert('you are correct');
  }else{
    alert('wrong answer');
  }
}
function getName(){
  let userName = prompt('What is your name?');
  alert('Hello, ' + userName + ' welcome to my about me site.');
  alert('Thanks for taking the time to get to know me ' + userName + '. I would like to get to know you too.' );
  return userName;
}
askLocation();
askCode();
askPets();
askBuild();
askLanguage();
getName();
