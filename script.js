// document.getElementById("count-el").innerText = 5;

let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;

console.log(countEl);

function increment() {
    count += 1;
    countEl.innerText = count;
}

function save() {
    let countStr = " " + count + " ,";
    saveEl.innerText += countStr;
    countEl.textContent = 0;
    count = 0;
}

// function result(){
//     let message = " Previous entires: " + count;
//     saveEl.innerText = message;
//     console.log(message);
// }


// let saveBtn = document.getElementById("save-btn");


// let message = " people in the train";


// // console,log(saveBtn);

// function save() {
//     saveBtn.innerText = count + message;
//     console.log(message);

// }

