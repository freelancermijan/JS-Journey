// parameters
function sleep(names, time) {
    console.log(names + " is sleeping from " + time);
}

// arguments
sleep("Mijan", "6 PM");
sleep("Ripon", "7 PM");
sleep("jawel", "8 PM");
// console.log("my name is mijan");

// function return
function sleep(names, time) {
    console.log(names + " is sleeping from " + time);
    return 3;
}
sleep("Mijan", "6 PM");

var carName = "BMW";

function myFucn(){
    var carName = "Toyota";
    console.log(carName);
}
myFucn();
console.log(carName);