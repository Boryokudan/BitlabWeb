const body = document.body;
let decrementButton = body.querySelector("#decrement");
let incrementButton = body.querySelector("#increment");
let num = body.querySelector("#number");
let counter = 0;

decrementButton.addEventListener("click", e => {
    counter--;
    num.innerText = counter;
});

incrementButton.addEventListener("click", e => {
    counter++;
    num.innerText = counter;
});