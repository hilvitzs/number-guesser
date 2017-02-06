var guess = document.querySelector('#guess');
var fullNumber;
var randomNumber;
var userInput = document.querySelector('.inputField');
var clear = document.querySelector('#clear');
var resetButton = document.querySelector('#reset');

function getRandom() {
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
  console.log(randomNumber);
};



window.onload = function() {
  getRandom();
};



guess.addEventListener('click', function() {
  var userInput = document.querySelector('.inputField').value;
  var output = parseInt(userInput);
  var empty = document.querySelector('.empty');
  empty.innerText = output;
  if (Number.isNaN(output) == true) {
    alert('Please enter a number');
    document.querySelector('input').value = "";
  }
});

guess.addEventListener('click', function() {
  if (userInput.value == randomNumber) {
    document.querySelector('h3').innerText = "BOOM!";
  }
  else if (userInput.value < randomNumber) {
    document.querySelector('h3').innerText = "Your guess is too low.";
  }
  else if (userInput.value > randomNumber) {
    document.querySelector('h3').innerText = "Your guess is too high.";
  }
});

guess.addEventListener('click', function() {
  if (userInput.value > 100) {
    document.querySelector('.empty').innerText = "";
    document.querySelector('h3').innerText = "Out of Range";
  } else if (userInput.value < 1) {
    document.querySelector('.empty').innerText = "";
    document.querySelector('h3').innerText = "Out of Range";
  }
});

clear.addEventListener('click', function () {
  document.querySelector('input').value = "";
  clear.disabled = true;
  guess.disabled = true;
});

resetButton.addEventListener('click', function() {
  window.location.reload();
});

userInput.addEventListener('keyup', function() {
  if (userInput.value === "") {
     clear.disabled = true;
     guess.disabled = true;
   }
   else {
     clear.disabled = false;
     guess.disabled = false;
     resetButton.disabled = false;
   }
 });
