if (localStorage.getItem("user") != undefined) {
    let parsedUser = JSON.parse(localStorage.getItem("user"));
    document.getElementById("name").value = parsedUser.name;
    document.getElementById("surname").value = parsedUser.surname;
    document.getElementById("phone").value = parsedUser.phone;
    document.getElementById("country").value = parsedUser.country;
}

let saveToDraft = document.body.querySelector("#save-to-draft").addEventListener("click", e => {
    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("country").value;

    let user = {name: name, surname: surname, country: country, phone: phone};

    let userJSON = JSON.stringify(user);
    localStorage.setItem("user", userJSON);
});;