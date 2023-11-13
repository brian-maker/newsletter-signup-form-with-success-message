var main = document.querySelector(".main");
var thankYou = document.querySelector(".thankyou-state")

const form = document.getElementById("form");
const thankyouEmail = document.querySelector(".thankyouEmail")
const dismiss = document.querySelector(".dismiss")


function updateSuccessMessage(email){
    thankyouEmail.textContent = email
}

function switchSections(){
    main.classList.toggle("hidden");
    thankYou.classList.toggle("hidden")
}

function isValidEntry(str) {
    const reg = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    return reg.test(str);
  }

function showErrors(){
    const error = document.querySelector(".error");

    const input = document.getElementById("email")

    error.style.display ="block";
    input.style.borderColor = "hsl(4, 100%, 67%)"
}

form.addEventListener("submit", (e)=> {
    e.preventDefault();
    const email = form.querySelector("#email");
    const valid = isValidEntry(email.value);
    if(!valid){
        return showErrors();
    }
    if(valid){
        updateSuccessMessage(email.value);
        switchSections();
    }
});

dismiss.addEventListener("click", ()=>{
    email.value = ""
    switchSections();
    updateSuccessMessage("");
   
});
