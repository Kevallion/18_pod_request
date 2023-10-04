const form = document.querySelector("form");
let isEmail = false;
form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (isEmail) {
    userEmail.value = "";
    alert("Thank you for request ;)");
  } else {
    alert("Please add an email before atempt to request");
  }
});

userEmail.addEventListener("input", (e) => {
  let mail = e.target.value;
  if (mail.length > 0) {
    if (mail.match(/^[.\w_-]+@[\w-]+\.[a-z]{2,4}$/i)) {
      isEmail = true;
      emailInfo.textContent = "";
    } else {
      emailInfo.textContent = "Oops! Please check your email";
    }
  } else {
    emailInfo.textContent = "Oops! Please add your email";
  }
});
