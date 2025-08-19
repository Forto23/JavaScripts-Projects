// Dictionary with my favorite car
let carDictionary = {
    Brand: "Toyota",
    Model: "4Runner",
    Year: 2018,
    Color: "Black"
};

function showCar() {
    // Delete the Color key BEFORE showing it
    delete carDictionary.Color;

    // Now when we try to display Color, it will show "undefined"
    document.getElementById("Dictionary").innerHTML = 
        "Car color is: " + carDictionary.Color;
}



