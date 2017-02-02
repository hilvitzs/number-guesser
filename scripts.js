var guess = document.querySelector('#guess');
var fullNumber;
var randomNumber;
var userInput = document.querySelector('.inputField');
var clear = document.querySelector('#clear');
var resetButton = document.querySelector('#reset');


resetButton.addEventListener('click', function() {
  window.location.reload();
});

function getRandom() {
  randomNumber = Math.floor(Math.random() * (100 - 1) + 1);
}

window.onload = function() {
  getRandom();
}

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

clear.addEventListener('click', function () {
  document.querySelector('input').value = "";
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
})

guess.addEventListener('click', function() {
  if (userInput.value > 100) {
    document.querySelector('.empty').innerText = "";
    document.querySelector('h3').innerText = "Out of Range";
  } else if (userInput.value < 1) {
    document.querySelector('.empty').innerText = "";
    document.querySelector('h3').innerText = "Out of Range";
  }
})

function enableButtons() {
  guess.disabled = false;
  clear.disabled = false;
  resetButton.disabled = false;
}

function disableButtons() {
    guess.disabled = true;
    clear.disabled = true;
    resetButton.disabled = true;
  }

userInput.addEventListener('keyup', function() {
  enableButtons();
})


clear.addEventListener('click', function() {
  if (userInput.value === "") {
     clear.disabled = true;
     guess.disabled = true;
   }
   else {
     clear.disabled = false;
   }
 });
