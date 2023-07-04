const a = {
    name: "Bangladesh",
    districts: 64,
};

const s = "Bangladesh";
console.log(s.length);

// const String = {
//     name: "Bangladesh",
//     districts: 64,
//     slice: function(){

//     },
//     substring: function(){

//     },
// };


let text1 = "Apple, Banana, Kiwi";
let part1 = text1.slice(0, 5);
console.log(part1);

// reverse
let text2 = "Apple, Banana, Kiwi";
let part2 = text2.slice(-19, -14);
console.log("Reverse Count = " + part2);


// substr
let text3 = "Apple, Banana, Kiwi";
let part3 = text3.substr(15, 4);
console.log(part3);

let paltabo = "ami akhon vat khabo";
let paltao = paltabo.replace("vat", "torkari");
console.log(paltao);

// multi replace
let paltabo1 = "ami akhon vat && vat khabo";
let paltao1 = paltabo1.replace("vat", "torkari");
console.log(paltao1);

// concatination
let jora1 = "amio text ke jora";
let jora2 = "lagaite pari";
console.log(jora1.concat(" ", jora2));

//trim
let faka = "        faka jayga puron koro          ";
console.log(faka.trim());

//extracting character
let textextract = "Mijanur Rahman";
console.log(textextract.charAt(8));
console.log(textextract.charCodeAt(8));
console.log(textextract[5]);