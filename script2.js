// Get the canvas element and set its size
let canvas = document.getElementById("doodle-canvas");
canvas.width = 600;
canvas.height = 600;

// Get the canvas context
let ctx = canvas.getContext("2d");

// Set initial drawing color
let currentColor = "#000000";

// Set up event listeners for mouse movement
canvas.addEventListener("mousemove", drawLine);
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);

let isDrawing = false;

function startDrawing(event) {
	isDrawing = true;
	drawLine(event);
}

function drawLine(event) {
	if (isDrawing) {
		ctx.beginPath();
		ctx.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
		ctx.lineTo(event.clientX - canvas.offsetLeft + 1, event.clientY - canvas.offsetTop + 1);
		ctx.strokeStyle = currentColor;
		ctx.stroke();
	}
}

function stopDrawing(event) {
	isDrawing = false;
}

// Set up event listeners for color palette
let colorOptions = document.getElementsByClassName("color-option");

for (let i = 0; i < colorOptions.length; i++) {
	colorOptions[i].addEventListener("click", function() {
		currentColor = colorOptions[i].style.backgroundColor;
	});
}
