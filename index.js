// const characters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", ",", "|", ":", ";", "<", ">", ".", "?",
//     "/"];


const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#%^&*()_-+={[/;"

let passwordLength = 15
let password1 = ''
let password2 = ''

let passwordEl1 = document.getElementById("password1")
let passwordEl2 = document.getElementById("password2")
function generateNumber() {
    for (let i=0; i < passwordLength; i++){
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



// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");  
// }










// let passwordEl1 = document.getElementById("password1");
// let passwordEl2 = document.getElementById("password2");
// let generateButton = document.getElementById("btn");

// generateButton.addEventListener("click", function() {
//     let lenght = 15;
//     for (let i = 0; i < characters.length; ++i) {
//         if (characters[i] < 15 && i < 15) {
//             let getPass1 = passwordEl1.textContent += characters[Math.floor(characters.length * Math.random())];
//             let getPass2 = passwordEl2.textContent += characters[Math.floor(characters.length * Math.random())];
//             console.log(passwordEl1);
//         }
//     } 
// })
