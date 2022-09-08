// const body = document.body;
// const div = document.createElement("div");

// div.innerText = "Hello, world!";
// div.textContent = "HELLLLO!";

// //div.innerHTML = "<b>HELLO!</b>";\

// body.append(div);

//-----------------------------------------------------
const body = document.body;
const div = document.createElement("div");

const spanHi = document.querySelector("#hi");
const spanBye = document.querySelector("#bye");

spanBye.remove(); // div.removeChild(spanBye);
div.append(spanBye); 