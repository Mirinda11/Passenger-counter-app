// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");

console.log(countEl);

let count = 0;

function increment() {
    count = count + 1;
    countEl.innerText = count;
}

lapTime();

function save() {
    // let lapTime = count + " - ";
    // document.getElementById("lap-time").innerText += lapTime;
    // count = 0;
    // countEl.innerText = count;
    console.log(count);
}

let name = "Iryna";

let greeting = "Hi, my name is "

let myGreeting = greeting + name;

console.log(myGreeting);