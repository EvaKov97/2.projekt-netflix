//SCROLLOVANIE:

const icon = document.querySelector(".fa-regular.fa-circle-up");

if (icon) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      icon.classList.add("is-visible");
    } else {
      icon.classList.remove("is-visible");
    }
  });

  icon.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

//KONTROLA EMAILU NA DOMOVSKEJ STRÁNKE

const emailForm = document.querySelector(".email-form");
const submitButton = document.getElementById("submitButton");
const emailUser = document.getElementById("emailUser");
const emailMessage = document.getElementById("emailMessage");

const checkEmail = () => {
  emailMessage.textContent = "";
  emailUser.classList.remove("is-valid", "is-invalid");
  if (emailUser.value === "") {
  } else if (emailUser.checkValidity()) {
    emailUser.classList.add("is-valid"); 
  } else {
    emailUser.classList.add("is-invalid"); 
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  emailMessage.classList.remove("msg-success", "msg-error"); 

  if (emailUser.value.trim() === "") {
    emailMessage.textContent = "Pole nesmí být prázdné.";
    emailMessage.classList.add("msg-error"); 
  } else if (emailUser.checkValidity()) {
    emailMessage.textContent =
      "Děkujeme za váš zájem! Podívejte se do své e-mailové schránky.";
    emailMessage.classList.add("msg-success");
  } else {
    emailMessage.textContent = "Zadejte prosím platnou e-mailovou adresu.";
    emailMessage.classList.add("msg-error");
  }
});

emailUser.addEventListener("input", checkEmail);
