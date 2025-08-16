function whileLoop() {
    let count = 1;
    let output = "";
    while (count <= 5) {
        output += count + " ";
        count++;
    }
    document.getElementById("while-output").textContent = output;
}

function forLoop() {
    let output = "";
    for (let i = 1; i <= 5; i++) {
        output += i + " ";
    }
    document.getElementById("for-output").textContent = output;
}

function showArray() {
    let fruits = ["Apple", "Banana", "Cherry"];
    document.getElementById("array-output").textContent = fruits.join(", ");
}

function showObject() {
    let car = {make: "Toyota", model: "Corolla", year: 2020};
    document.getElementById("object-output").textContent =
        car.year + " " + car.make + " " + car.model;
}
