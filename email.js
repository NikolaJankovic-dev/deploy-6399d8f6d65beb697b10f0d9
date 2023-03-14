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
      console.log(formData);
      // create modal to show success
      const modal = document.createElement("div");
      modal.classList.add("mymodal");
      modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center;">
        <h3>Thank you for your message!</h3>
        <p>We will get back to you as soon as possible.</p>
        </div>
      </div>
      `;
      document.body.appendChild(modal);
      // remove modal after 3 seconds
      setTimeout(() => {
        modal.remove();
      }, 3000);

      // clear form
      email.reset();
    })
    .catch(function (error) {
      console.log("FAILED...", error);
      const modal = document.createElement("div");
      modal.classList.add("mymodal");
      modal.innerHTML = `
      <div style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.5); display: flex; justify-content: center; align-items: center; z-index: 9999;">
        <div style="background: #fff; padding: 20px; border-radius: 10px; text-align: center;">
        <h3>Sorry, something went wrong!</h3>
        <p>Please try again later.</p>
        </div>
      </div>
      `;
      document.body.appendChild(modal);
      // remove modal after 3 seconds
      setTimeout(() => {
        modal.remove();
      }, 3000);
    });
});
