let users = [];

let body = document.body;
let saveToDraft = body.querySelector("#save-to-draft");

saveToDraft.addEventListener("click", e => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;

    let select = document.getElementById("country");
    let country = select.options[select.selectedIndex].text;
    
    let user = {name: name, surname: surname, country: country, phone: phone};
    users.push(user);

    let jsonedUser = JSON.stringify(user);
    localStorage.setItem("user", jsonedUser);
});