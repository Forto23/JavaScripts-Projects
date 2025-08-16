// 1. Ternary using input
function showTernary(){
    let year = document.getElementById("carInput").value;
    document.getElementById("result").innerHTML = year >= 2018 ? "New" : "Old";
}

// 2. Constructor function
function Car(make, model){
    this.make = make;
    this.model = model;
}

// Function to display constructor result
function showConstructor(){
    let myCar = new Car("Toyota", "4Runner");
    document.getElementById("result").innerHTML = "Car: " + myCar.make + " " + myCar.model;
}

// 3. Nested function example
function nestedFunction(){
    function add(a, b){ return a + b; } // inner function
    document.getElementById("result").innerHTML = "2 + 3 = " + add(2,3);
}

