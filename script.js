//SCROLLOVANIE:

const icon = document.querySelector(".fa-regular.fa-circle-up");

if (icon) {
  window.addEventListener("scroll", () => {
    if (window.scrollY >= 50) {
      icon.style.visibility = "visible";
      icon.style.opacity = "1";
    } else {
      icon.style.visibility = "hidden";
      icon.style.opacity = "0";
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
  if (emailUser.value === "") {
    emailUser.style.borderColor = "";
  } else if (emailUser.checkValidity()) {
    emailUser.style.borderColor = "green";
  } else {
    emailUser.style.borderColor = "red";
  }
};

submitButton.addEventListener("click", (e) => {
  e.preventDefault();
  if (emailUser.value.trim() === "") {
    emailMessage.textContent = "Pole nesmí být prázdné.";
    emailMessage.style.color = "red";
  } else if (emailUser.checkValidity()) {
    emailMessage.textContent =
      "Děkujeme za váš zájem! Podívejte se do své e-mailové schránky.";
    emailMessage.style.color = "green";
  } else {
    emailMessage.textContent = "Zadejte prosím platnou e-mailovou adresu.";
    emailMessage.style.color = "red";
  }
});

emailUser.addEventListener("input", checkEmail);
