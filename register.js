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
  message.classList.remove("msg-success", "msg-error");

  if (
    password.value === passwordAgain.value &&
    password.value !== "" &&
    passwordAgain.value !== "" &&
    emailAddress.value !== "" &&
    secondName.value !== "" &&
    firstName.value !== ""
  ) {
    message.textContent = "Děkujeme za registraci";
    message.classList.add("msg-success");
  } else {
    message.textContent = "Nemáte správně vyplněné všechny údaje";
    message.classList.add("msg-error");
  }
});

//2. Validácia a zhoda hesiel

const checkPasswords = () => {
  password.classList.remove("is-valid", "is-invalid");
  passwordAgain.classList.remove("is-valid", "is-invalid");
  message.classList.remove("msg-error");

  if (password.value === "" && passwordAgain.value === "") {
    message.textContent = "";
  } else if (password.value === passwordAgain.value) {
    password.classList.add("is-valid");
    passwordAgain.classList.add("is-valid");
    message.textContent = "";
  } else {
    password.classList.add("is-invalid");
    passwordAgain.classList.add("is-invalid");
    message.textContent = "Hesla se neshodují";
    message.classList.add("msg-error");
  }
};

password.addEventListener("input", checkPasswords);
passwordAgain.addEventListener("input", checkPasswords);
form.addEventListener("input", (e) => {
  if (e.target.id !== "password" && e.target.id !== "passwordAgain") {
    message.textContent = "";
  }
});

message.classList.remove("msg-success", "msg-error");
