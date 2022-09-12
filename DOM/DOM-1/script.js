let users = [
    {"login": "ilyas", "password": "qwerty"},
    {"login": "eldar", "password": "qqqqq"},
    {"login": "assylkhan", "password": "qweqwe"},
    {"login": "anel", "password": "asdasd"},
    {"login": "alibek", "password": "aaaaaa"}
];

const mainContainer = document.getElementById("mainContainer");
let authorizationBlock = document.getElementById("itemContainer");
let button = document.getElementById("signInButton");
button.addEventListener("click", e => {
    let login = document.getElementById("logInput");
    let password = document.getElementById("passInput");

    let isValid = false;

    for (let i = 0; i < users.length; i++) {
        if (users[i]["login"].localeCompare(login.value) == 0 && users[i]["password"].localeCompare(password.value) == 0) {
            isValid = true;
        }
    }

    if (isValid) {
        authorizationBlock.remove();
        let successfulAuthorization = document.createElement("div");
        successfulAuthorization.id = "success";
        successfulAuthorization.innerText = "Successfully signed in!";
        mainContainer.append(successfulAuthorization);
    }
    else {
        login.style.border = "1px solid red";
        password.style.border = "1px solid red";
    }
});