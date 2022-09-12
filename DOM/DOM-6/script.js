let users = [
    {email: "ilyas@gmail.com", password: "qwerty"},
    {email: "eldar@yandex.kz", password: "qqqqq"},
    {email: "assylkhan@mail.ru", password: "qweqwe"},
    {email: "anel@hotmail.com", password: "asdasd"},
    {email: "alibek@mail.kz", password: "aaaaaa"}
];

let emails = [];
for (var i = 0; i < users.length; i++) {
    emails[i] = users[i].email;
}

const body = document.body;
let errors = [... body.querySelectorAll(".error-p")];
const button = body.querySelector("#register-button");

button.addEventListener("click", e => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let repeatedPassword = document.getElementById("repeated-password").value;

    let canBeRegistered = false;

    let emailValid = !emails.includes(email);
    let passwordValid = password.length >= 6;
    let passwordsMatch = password.localeCompare(repeatedPassword) == 0;

    if (email === "" || password === "") {
        errors[0].innerText = "Email field cannot be blank.";
        errors[1].innerText = "Password cannot be blank or less than six characters.";
    }
    else {
        if (!emailValid && !passwordValid) {
            errors[0].innerText = "Email has already been taken.";
            errors[1].innerText = "Password length is less than six characters.";
        }
        else if (!emailValid) {
            errors[0].innerText = "Email has already been taken.";
        }
        else if (!passwordValid) {
            errors[1].innerText = "Password length is less than six characters.";
        }
        else if (!passwordsMatch) {
            errors[2].innerText = "Passwords do not match.";
        }
        else {
            canBeRegistered = true;
        }
    
        if (canBeRegistered) {
            errors[0].innerText = "";
            errors[1].innerText = "";
            errors[2].innerText = "";
            users.push({email: email, password: password});
            email = "";
            password = "";
            alert("User has been registered!")
        }
    }
});