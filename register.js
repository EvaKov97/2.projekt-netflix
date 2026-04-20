//FORMULÁR:
//1. Získanie dát a zachytenie odoslania
const form = document.querySelector(".register-form");
const firstName = document.getElementById("firstName");
const secondName = document.getElementById("secondName");
const emailAddress = document.getElementById("emailAddress");
const password = document.getElementById("password");
const passwordAgain = document.getElementById("passwordAgain");
const message = document.getElementById("message");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    password.value === passwordAgain.value &&
    password.value !== "" &&
    passwordAgain.value !== "" &&
    emailAddress.value !== "" &&
    secondName.value !== "" &&
    firstName.value !== ""
  ) {
    message.textContent = "Děkujeme za registraci";
    message.style.color = "green";
  } else {
    message.textContent = "Nemáte správně vyplněné všechny údaje";
    message.style.color = "red";
  }
});

//2. Validácia a zhoda hesiel

const checkPasswords = () => {
  if (password.value === "" && passwordAgain.value === "") {
    password.style.borderColor = "";
    passwordAgain.style.borderColor = "";
    message.textContent = "";
  } else if (password.value === passwordAgain.value) {
    password.style.borderColor = "green";
    passwordAgain.style.borderColor = "green";
    message.textContent = "";
  } else {
    password.style.borderColor = "red";
    passwordAgain.style.borderColor = "red";
    message.textContent = "Hesla se neshodují";
    message.style.color = "red";
  }
};

password.addEventListener("input", checkPasswords);
passwordAgain.addEventListener("input", checkPasswords);
form.addEventListener("input", (e) => {
  if (e.target.id !== "password" && e.target.id !== "passwordAgain") {
    message.textContent = "";
  }
});
