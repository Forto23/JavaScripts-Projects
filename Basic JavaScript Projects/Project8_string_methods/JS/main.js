// Function to demonstrate concat()
function showConcat() {
    let firstName = "Fortunato";
    let lastName = "Fernando";
    let fullName = firstName.concat(" ", lastName); // Join strings with a space
    document.getElementById("output").textContent = "Concat: " + fullName;
}

// Function to demonstrate slice()
function showSlice() {
    let text = "JavaScript";
    let slicedText = text.slice(0, 4); // Take characters from index 0 to 3
    document.getElementById("output").textContent = "Slice: " + slicedText;
}

// Function to demonstrate toString()
function showToString() {
    let num = 2025;
    let numString = num.toString(); // Convert number to string
    document.getElementById("output").textContent = "toString: " + numString;
}

// Function to demonstrate toPrecision()
function showToPrecision() {
    let pi = 3.14159265359;
    let precisePi = pi.toPrecision(4); // Round to 4 significant digits
    document.getElementById("output").textContent = "toPrecision: " + precisePi;
}

