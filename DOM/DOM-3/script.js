let users = [
    {"card-number": "1111 1111 1111 1111", "cardholder": "AAAAA AAAAA", "cvv": 111},
    {"card-number": "4402 8012 6563 0122", "cardholder": "JAMES GLOCK", "cvv": 361},
    {"card-number": "0409 5502 8812 6984", "cardholder": "MARRY BLACK", "cvv": 342},
    {"card-number": "4418 4402 4400 9051", "cardholder": "JOHN SMITH", "cvv": 424},
    {"card-number": "0409 5502 4400 9051", "cardholder": "JOHN SMITH", "cvv": 424},
];

const body = document.body;
let userData = [... body.querySelectorAll('input[type="text"]')];
console.log(userData);

const confirmButton = body.querySelector("#confirm-button");

confirmButton.addEventListener("click", e => {
    let cardNum = userData[0].value + " " + userData[1].value + " " + userData[2].value + " " + userData[3].value;
    let cardholder = userData[4].value;
    let cvv = parseInt(userData[5].value);

    let isValid = false;

    for (let i = 0; i < users.length; i++) {
        if ((users[i]["card-number"].localeCompare(cardNum) == 0) &&
            (users[i]["cardholder"].localeCompare(cardholder) == 0) &&
            (users[i]["cvv"] == cvv)) {
                isValid = true;
            }
        else continue;
    }

    if (isValid) alert("Transaction completed.")
    else alert("Invalid data")
});