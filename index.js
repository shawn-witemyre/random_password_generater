const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let randomPassword1 = document.getElementById("random-password-1-el");
let randomPassword2 = document.getElementById("random-password-2-el");

function createPassword() {
  let password1 = "";
  let password2 = "";

  for (let i = 0; i < 20; i++) {
    let randomNumber = Math.floor(Math.random() * characters.length);
    let randomNumber2 = Math.floor(Math.random() * characters.length);

    password1 += characters[randomNumber];
    password2 += characters[randomNumber2];
  }

  randomPassword1.textContent = password1;
  randomPassword2.textContent = password2;
}

function copyPassword(elementId) {
  let passwordElement = document.getElementById(elementId);
  navigator.clipboard.writeText(passwordElement.textContent);
}
