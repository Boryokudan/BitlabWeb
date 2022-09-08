let users = [
    {"login": "ilyas", "password": "qwerty"},
    {"login": "eldar", "password": "qqqqq"},
    {"login": "assylkhan", "password": "qweqwe"},
    {"login": "anel", "password": "asdasd"},
    {"login": "alibek", "password": "aaaaaa"}
];

function checkUser() {
    let itemContainer1 = document.getElementById("itemContainer");
    let success1 = document.getElementById("success");
    let login1 = document.getElementById("login");
    let password1 = document.getElementById("password");
    let isValid = false;

    while(!isValid) {
        if (login1.innerText.localeCompare("") == 0 && password1.innerText.localeCompare("") == 0) {
            alert("Login and password field cannot be empty!");
            login1.style.border = "1px solid red";
            password1.style.border = "1px solid red";
        }
        else if (login1.localeCompare("") == 0) {
            alert("Login field cannot be empty!");
            login1.style.border = "1px solid red";
        }
        else if (password1.localeCompare("") == 0) {
            alert("Password field cannot be empty!");
            password1.style.border = "1px solid red";
        }
        else isValid = true;
    }

    for (var i = 0; i < users.length; i++) {
        if (users[i]["login"].localeCompare(login1.innerText) == 0 && users[i]["password"].localeCompare(password1.innerText) == 0) {
            itemContainer1.style.display = "none";
            success1.style.display = "flex";
        }
    }
    
}