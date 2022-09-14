let page = document.getElementById("page-1");
let cart = [];

if (page != null) {
    let buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", e => {
            let name = document.getElementsByClassName("card-title")[i].innerText;
            let price = document.getElementsByClassName("price")[i].innerText;
            let text = document.getElementsByClassName("card-text")[i].innerText;
            let item = {name: name, price: price, text: text};
    
            cart.push(item);
            localStorage.setItem("cart", JSON.stringify(cart));
        });
    }
}
else {
    
}