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
    let parsedCart = JSON.parse(localStorage.getItem("cart"));
    let table = document.getElementById("tableBody");

    for (let i = 0; i < parsedCart.length; i++) {
        let name = parsedCart[i].name;
        let price = parsedCart[i].price;
        let text = parsedCart[i].text;

        let tr = document.createElement("tr");

        let th = document.createElement("th");
        th.scope = "row";
        th.innerText = i + 1;
        tr.appendChild(th);

        let tdName = document.createElement("td");
        tdName.innerText = name;
        tr.appendChild(tdName);

        let tdText = document.createElement("td");
        tdText.innerText = text;
        tr.appendChild(tdText);

        let tdPrice = document.createElement("td");
        tdPrice.innerText = price;
        tr.append(tdPrice);

        let removeButton = document.createElement("button");
        removeButton.addEventListener("click", e => {
            tr.remove();
            parsedCart.splice(i, 1);
            localStorage.setItem("cart", JSON.stringify(parsedCart));
        });
        removeButton.className = "btn btn btn-sm bg-info";
        removeButton.innerText = "Remove";
        tr.append(removeButton);

        table.append(tr);
    }
}