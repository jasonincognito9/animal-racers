// Creating the Animal class
function Animal(name, speed, focus) {
	
	this.name = name;
	this.speed = speed;
	this.focus = focus;
	this.position = 0;

	// This method determines whether or not the animal is "focused"
	this.isFocused = function() {
		return (Math.floor(Math.random() * 10) < this.focus);
		// This code checks a random between 1-10, compares to focus
		// Returns either true or false
	}

	// This method determines how far the animal advances
	this.advance = function() {
		if (this.isFocused()) {	
			this.position += this.speed;
		}
	}

}

// Instantiate the Animal objects
var rabbit = new Animal(prompt("Name your rabbit"), 10, 1);
var turtle = new Animal(prompt("Name your turtle"), 2, 10);
var snake = new Animal(prompt("Name your snake"), 3, 6);

// Asking the user how long the race should be
var raceLength = prompt("How many laps should they race?");

// Make sure that the length of the race is a number at least 10
function validatedInput(length) {
	while (isNaN(length)) {
		length = prompt("That's not a number! How many laps should they race?");
	};

	while (length < 10) {
		length = prompt("Must be at least 10 laps!");
	}
	return length;
}

// Needed to store the name of the winner as global
var winner;

// Main race function
var race = function(duration) {

	do {
		rabbit.advance();
		turtle.advance();
		snake.advance();
	} while (rabbit.position < duration && turtle.position < duration && snake.position < duration);

	if (rabbit.position > turtle.position) {
		if (rabbit.position > snake.position) {
			winner = rabbit.name;
		} else {
			winner = snake.name;
		}
	} else {
		if (turtle.position > snake.position) {
			winner = turtle.name;
		} else {
			winner = snake.name;
		}
	}
	return;
}

// run the race
race(validatedInput(raceLength));

// update page content
var elRabbit = document.getElementById('rabbit');
elRabbit.textContent = rabbit.name + " the rabbit finished " + rabbit.position + " laps.";

var elTurtle = document.getElementById('turtle');
elTurtle.textContent = turtle.name + " the turtle finished " + turtle.position + " laps.";

var elSnake = document.getElementById('snake');
elSnake.textContent = snake.name + " the snake finished " + snake.position + " laps.";

var elWinner = document.getElementById('winner');
elWinner.textContent = "And the winner is ... " + winner + "!";

