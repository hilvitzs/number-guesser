# number-guesser

The Number Guesser Project's aim was to utilize HTML, CSS, and JavaScript languages to create a game that generated a Random Number that the user was supposed to guess.

The first portion of the project involved writing HTML code that put an input field, a guess button, a clear button, and a reset button. It was also necessary to display the user's guess and give them a clue about whether their guess was too high or too low. All of the elements were then styled using CSS code.

Next, we had to generate a random number using Javascript code. This involved using the math.Random function as well as Math.floor to get a straight integer, as well as multiplying the decimal between 0 and 1, to get a number between 1 and 100.

Using JavaScript, we had to ensure that buttons were disabled at the proper time or enabled to make sure that the user could press them when necessary. If they gave an input that was not allowed then we had to give them a warning, explaining to them that they needed to input another number. On page load, all buttons are disabled. They are not allowed to enter text that is not a number as the type is set to number. When a number is entered then they can click on Guess or Clear. Clear will clear the number from the input field and then disable the Guess and Clear buttons. The Return button is enabled and stays enabled until they click on it. The Return Button will generate a new Random Number and set all the buttons to disabled.
