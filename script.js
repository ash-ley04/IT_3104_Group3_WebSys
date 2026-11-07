const message = document.getElementById("message");
const messageButton = document.getElementById("messageButton");
const backgroundButton = document.getElementById("backgroundButton");

// Store messages
const originalMessage = "Created by Gelliel Ashley Dalisay, Mikko Ronce Labitan, and Edz Margaret Untiveros.";
const newMessage = "Hello! Welcome to my webpage.";

let isChanged = false;

// Change Message Button
messageButton.addEventListener("click", function() {
    if (isChanged) {
        message.textContent = originalMessage;
    } else {
        message.textContent = newMessage;
    }

    isChanged = !isChanged;
});

// Background Color Options
const backgroundColors = [
    "#ADD8E6", // Light Blue
    "#FFB6C1", // Light Pink
    "#98FB98", // Pale Green
    "#FFDAB9", // Peach
    "#E6E6FA", // Lavender
    "#FFFACD", // Lemon Chiffon
    "#D8BFD8", // Thistle
    "#AFEEEE", // Pale Turquoise
    "#F0E68C", // Khaki
    "#FFC0CB", // Pink
    "#B0C4DE", // Light Steel Blue
    "#DDA0DD"  // Plum
];

let colorIndex = 0;

// Change Background Button
backgroundButton.addEventListener("click", function() {
    document.body.style.backgroundColor = backgroundColors[colorIndex];

    colorIndex = (colorIndex + 1) % backgroundColors.length;
});