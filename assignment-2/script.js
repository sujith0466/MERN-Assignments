// Initialize the start time when the shape appears
var start=new Date().getTime();

// Function to generate a random hex color
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Function to randomly change the shape's position, size, color, and show it
function colorChange() {
    var left = Math.random() * 300; // Random left position
    var top = Math.random() * 300;  // Random top position
    var wh = (Math.random() * 400) + 100; // Random width/height
    var shape = document.getElementById("shape");
    shape.style.left = left + "px";
    shape.style.top = top + "px";
    shape.style.width = wh + "px";
    shape.style.height = wh + "px";
    shape.style.display = "block";
    shape.style.backgroundColor = getRandomColor(); // Set random color
    start = new Date().getTime(); // Update start time
}

// Show the shape for the first time
colorChange();

// On shape click: hide it, show reaction time, and show a new shape
document.getElementById("shape").onclick = function() {
    document.getElementById("shape").style.display = "none";
    var end = new Date().getTime();
    var timeTaken = (end - start) / 1000;
    alert("Your reaction time is " + timeTaken + " seconds");
    colorChange();
};