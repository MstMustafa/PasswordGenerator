const inputSlider = document.getElementById('inputSlider')
const sliderValue = document.getElementById('sliderValue')
const passBox = document.getElementById('passBox')

const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numbersEl = document.getElementById('numbers')
const symbolsEL = document.getElementById('symbols')

const generateBTn = document.getElementById('getBtn')
const copyBtn = document.getElementById('copy_con')
const passIndicator = document.getElementById('passIndicatior')


const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}\\|;':\",./<>?";


sliderValue.textContent = inputSlider.value;
inputSlider.addEventListener("input",()=>{
       sliderValue.textContent = inputSlider.value

       generatePassword();
})

function generatePassword(){
    const length = inputSlider.value
    let characters = "";
    let password = "";

    characters += lowercaseEl.checked ? lowercaseLetters : "";
    characters += uppercaseEl.checked ? uppercaseLetters : "";
    characters += numbersEl.checked ? numbers : "";
    characters += symbolsEL.checked ? symbols : "";

    for(let i = 0; i< length;i++){
        password +=characters.charAt(Math.floor(Math.random()*characters.length));
    }

    passBox.value = password;
    updatePasswordStrength();
}

copyBtn.addEventListener("click",()=>{

    if(passBox.value != "" || passBox.value.length >= 1){
        navigator.clipboard.writeText(passBox.value);
        copyBtn.innerText = "check";

        setTimeout(()=>{
            copyBtn.innerHTML = "content_copy";
        },3000);
    }

});


generateBTn.addEventListener("click",()=>{
      generatePassword();
})

window.addEventListener('DOMContentLoaded',()=>{
    updatePasswordStrength();
});


function updatePasswordStrength(){
    const passwordStrength = getStrength(passBox.value)
    passIndicator.className = "pass-indicator " + passwordStrength
    
}

function getStrength(password){

    if(password.length <=10){
        return "weak";
    }else if (password.length <=20){
        return "medium";
    }else{
        return "strong";
    }

}



