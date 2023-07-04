const car ={
    name: "Fiat",
    model: 200,
    weight: "850 KG",
    color: "white",
    start: function(){
        console.log("car has started");
    },
    drive: function(){
        console.log("car is driving");
    },
};
console.log(car.weight);
console.log(car["model"]);
car.start();



let y = "Mijan"; //literal syntax
let x = new String("Rakib");
console.log(typeof y);
console.log(typeof x);