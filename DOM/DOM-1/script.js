const mainContainer = document.getElementById("mainContainer");
let authorizationBlock = document.getElementById("itemContainer");
let button = document.getElementById("signInButton");
button.addEventListener("click", checkUser);

let users = [
    {"login": "ilyas", "password": "qwerty"},
    {"login": "eldar", "password": "qqqqq"},
    {"login": "assylkhan", "password": "qweqwe"},
    {"login": "anel", "password": "asdasd"},
    {"login": "alibek", "password": "aaaaaa"}
];

function checkUser() {
    let isValid = false;
    let login;
    let password;

    while(!isValid) {
        login = document.getElementById("logInput");
        password = document.getElementById("passInput");
        
        if (login.value.localeCompare("") == 0 && password.value.localeCompare("") == 0) {
            login.style.border = "1px solid red";
            password.style.border = "1px solid red";
            break;
        }
        else if (login.value.localeCompare("") == 0) {
            login.style.border = "1px solid red";
            break;
        }
        else if (password.value.localeCompare("") == 0) {
            password.style.border = "1px solid red";
            break;
        }
        else isValid = true;
    }

    for (let i = 0; i < users.length; i++) {
        if (users[i]["login"].localeCompare(login.value) == 0 && users[i]["password"].localeCompare(password.value) == 0) {
            authorizationBlock.remove();
            let successfulAuthorization = document.createElement("div");
            successfulAuthorization.id = "success";
            successfulAuthorization.innerText = "Successfully signed in!";
            mainContainer.append(successfulAuthorization);
        }
    }
}