// Global variable
let globalVar = "I am global";

// Function with local variable and if statement
function testScope(){
    let localVar = "I am local";
    if(localVar === "I am local"){
        console.log("Local variable works!");
    }
    console.log(globalVar);
    console.log(localVar);
}

// Call the function
testScope();

// Intentional error to show in console
console.log(notDefinedVar);

// Time function example
function Time_function(){
    let today = new Date();
    let hour = today.getHours();
    let message;
    if(hour < 12){
        message = "Good morning!";
    } else {
        message = "Good afternoon!";
    }
    document.getElementById("timeResult").innerHTML = message;
}

