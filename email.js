window.document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM loaded");
});

// Path: email.js

const email = document.getElementById("contactForm004");
const user = document.getElementById("name");
const emailFrom = document.getElementById("email");
const message = document.getElementById("message");
email.addEventListener("submit", function (e) {
  e.preventDefault();
  let formData = new FormData(email);
  formData.append("service_id", "service_11ipyxl");
  formData.append("template_id", "template_bxcnocs");
    formData.append("user_id", "rRER4cZ-el7fkeXtH");
    formData.append("from_name", user.value + ", " + emailFrom.value);
    // formData.append("from_email", emailFrom.value);
    formData.append("message", message.value);
  fetch("https://api.emailjs.com/api/v1.0/email/send-form", {
    method: "POST",
    body: formData,
  })
    .then(function (response) {
      console.log("SUCCESS!", response.status, response.text);
      console.log(formData)
    })
    .catch(function (error) {
      console.log("FAILED...", error);
    });
});
