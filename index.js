const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_-+={[/;"

let passwordLength = 15
let password1 = ''
let password2 = ''

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")
function generateNumber() {
  for (let i = 0; i < passwordLength; i++) {
    let randomNumberOne = Math.floor(Math.random() * characters.length)
    let randomNumberTwo = Math.floor(Math.random() * characters.length)
    password1 += characters.substring(randomNumberOne, randomNumberOne + 1)
    password2 += characters.substring(randomNumberTwo, randomNumberTwo + 1)
  }
  passwordEl1.value = password1;
  password1 = ""
  passwordEl2.value = password2;
  password2 = ""
}

function copyPassword() {
  document.getElementById("password1").select();
  document.execCommand("copy1");
}

function copyPassword2() {
  document.getElementById("password2").select();
  document.execCommand("copy2");
}
