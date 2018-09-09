var colors = generateRandomColors(6);
var pickedColor = pickColor();
var numSquares = 6;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("messageDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

for (var i = 0; i < modeButton.length; i++){
	modeButton[i].addEventListener("click", function(){
		modeButton[0].classList.remove("selected");
		modeButton[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
		reset();
	});
};

// easyBtn.addEventListener("click", function(){
// 	hardBtn.classList.remove("selected");
// 	easyBtn.classList.add("selected");
// 	numSquares = 3
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < square.length; i++){
// 		if (colors[i]){
// 			square[i].style.backgroundColor = colors[i];
// 		} else {
// 			square[i].style.display = "none";
// 		}
// 	}
// });

// hardBtn.addEventListener("click", function(){
// 	easyBtn.classList.remove("selected");
// 	hardBtn.classList.add("selected");
// 	numSquares = 6;
// 	colors = generateRandomColors(numSquares);
// 	pickedColor = pickColor();
// 	colorDisplay.textContent = pickedColor;
// 	for (var i = 0; i < square.length; i++){
// 			square[i].style.backgroundColor = colors[i];
// 			square[i].style.display = "block";
// 	}
// });

resetButton.addEventListener("click", function(){
	reset();
});
	

colorDisplay.textContent = pickedColor;

for (var i = 0; i < square.length; i++){
	// add color to squares
	square[i].style.backgroundColor = colors[i];

	// add click listeners to squares
	square[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if (clickedColor == pickedColor){
			messageDisplay.textContent = "Correct!";
			changeColors(clickedColor);
			h1.style.backgroundColor = clickedColor;
			resetButton.textContent = "Play Again?";
		}
		else {
			this.style.backgroundColor = "#333333";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	// loop through all squares
	// change each color to match given color
	for (var i = 0; i < square.length; i++){
		square[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = [];
	// add num random colors to array
	for (var i = 0; i < num; i++){
		arr.push(randomColors());
	}
	return arr;
}

function randomColors(){
	// generate random colors for R, G, B
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset(){
	// generate all new colors
	colors = generateRandomColors(numSquares);
	// pick new random color from array
	pickedColor = pickColor();
	// change colorDisplay to match picked color
	colorDisplay.textContent = pickedColor;
	// change messageDisplay
	messageDisplay.textContent = "";
	// change h1 color
	h1.style.backgroundColor = "#CD87C7";
	// change resetButton text
	resetButton.textContent = "Reset Colors";
	// change colors of squares
	for (var i = 0; i < square.length; i++){
		if (colors[i]){
			square[i].style.display = "block";
			square[i].style.backgroundColor = colors[i];
		} else {
			square[i].style.display = "none";
		}
		square[i].style.backgroundColor = colors[i];
	}
}