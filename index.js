const button1 = document.querySelector(".main-button");
const button2 = document.querySelector(".popup");

button1.addEventListener("click", function () {
  const enteredEmail = validateEmail();
  if (enteredEmail) {
    document.querySelector(
      ".popup-email"
    ).innerHTML = `A confirmation email has been sent to
          <strong>${enteredEmail}</strong> Please open it and click the button
          inside to confirm your subscription.`;
    toggleClass();
  }
});

button2.addEventListener("click", () => toggleClass());

function toggleClass() {
  const mainPage = document.getElementById("main_page");
  const popupPage = document.getElementById("popup_page");

  mainPage.classList.toggle("hidden");
  popupPage.classList.toggle("hidden");
}

function validateEmail() {
  const emailInput = document.getElementById("emailInput");
  const resultMessage = document.getElementById("resultMessage");

  // Regular expression for a simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Test the email against the regex
  const enteredEmail = emailInput.value.trim();

  if (emailRegex.test(enteredEmail)) {
    resultMessage.textContent = "Valid email address.";
    resultMessage.style.color = "green";

    // Clear the result message after 2000 milliseconds (2 seconds)
    setTimeout(() => {
      resultMessage.textContent = "";
    }, 2000);

    return enteredEmail; // Return the entered email if it is valid
  } else {
    resultMessage.textContent = "Invalid email address.";
    resultMessage.style.color = "red";
    return null; // Return null if the entered email is invalid
  }
}


   const images = document.querySelectorAll(".myImage");

   // Add click event listener for each image
   images.forEach(function (image) {
     image.addEventListener("click", function () {
       // Change the source of the clicked image
       image.src = "assets/images/icon-list.svg";
     });
   });