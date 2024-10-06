// x is a string
let x = "John";

// y is an object
let y = new String("John");

document.getElementById("demotype").innerHTML = typeof x + "<br>" + typeof y;

let xs = "muthu";
let ys = new String("muthu");
document.write(xs == ys);

let xse = "muthu";
let yse = new String("muthu");
//  it used to verify the string is equal or not?
document.write(xse === yse);

let charart = "hello world by me";
document.write(charart.charAt(0));

const namee = "W3Schools";
let letter = namee.at(2);
let letters = namee[3];
document.write(letter);
document.write(letters);

let text = "HELLO WORLD";
document.getElementById("demohello").innerHTML = text[0];

let textslice = "Apple, Banana, Kiwi";
let part = text.slice(7, 13);
document.getElementById("demoslice").innerHTML = part;
document.getElementById("demoslice").innerHTML = str.substring(7, 13);

let textsl = "Apple, Banana, Kiwi";
let partsl = text.slice(-12, -6);
document.getElementById("demoslicem").innerHTML = part;
// by substring can we do
